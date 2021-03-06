package br.com.projeto.portal.domain.service;

import java.time.LocalDateTime;

import br.com.projeto.portal.domain.dao.GrupoProdutoDAO;
import br.com.projeto.portal.domain.entity.grupoProduto.GrupoProduto;
import br.com.projeto.portal.infrastructure.arquivo.Arquivo;
import br.com.projeto.portal.infrastructure.arquivo.ArquivoService;
import br.com.projeto.portal.infrastructure.arquivo.IArquivoRepository;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RemoteProxy
@Transactional
public class GrupoProdutoService
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	@Autowired
	private GrupoProdutoDAO grupoProdutoDao;

	@Autowired
	private IArquivoRepository arquivoRepository;

	@Autowired
	private ArquivoService arquivoService;

	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/

	
	public Page<GrupoProduto> listGrupoProdutosByFilters( String nome, Long codigo, PageRequest pageable )
	{
		return this.grupoProdutoDao.listGrupoProdutosByFilters( nome, codigo, pageable );
	}

	
	public GrupoProduto findGrupoProdutoById( long id )
	{
		GrupoProduto grupoProduto = this.grupoProdutoDao.findGrupoProdutoById( id );

		if ( grupoProduto.getAnexoUuid() != null )
		{
			grupoProduto.setAnexo( this.arquivoService.downloadArquivoByUuid( grupoProduto.getAnexoUuid() ) );
		}

		return grupoProduto;
	}

	
	public Long insertGrupoProduto( GrupoProduto grupoProduto )
	{
		if(grupoProduto.getAnexo() != null)
			this.insertArquivo( grupoProduto );

		grupoProduto.setSituacao( true );

		Long grupoProdutoId = this.grupoProdutoDao.insertGrupoProduto( grupoProduto );

		return grupoProdutoId;
	}

	
	public void updateGrupoProduto( GrupoProduto grupoProduto)
	{
		if(grupoProduto.getAnexoUuid() == null && grupoProduto.getAnexo() != null)
			this.insertArquivo( grupoProduto );

		grupoProduto.setUpdated( LocalDateTime.now() );

		this.grupoProdutoDao.updateGrupoProduto( grupoProduto );
	}

	
	public void updateSituacaoGrupoProduto( long id, boolean situacao )
	{
		this.grupoProdutoDao.updateSituacaoGrupoProduto( id, situacao );
	}

	
	public void deleteGrupoProduto( long id )
	{
		GrupoProduto grupoProdutoSaved = this.grupoProdutoDao.findGrupoProdutoById( id );

		GrupoProduto grupoProduto = this.findGrupoProdutoById( id );
		if(grupoProduto.getAnexoUuid() != null) this.removeArquivo( grupoProduto.getAnexoUuid() );

		this.grupoProdutoDao.deleteGrupoProduto( id );
	}

	/*-------------------------------------------------------------------
	 *				 		     ARQUIVO
	 *-------------------------------------------------------------------*/


	public void insertArquivo(GrupoProduto grupoProduto)
	{
		Arquivo arquivo = this.arquivoRepository.insert( grupoProduto.getAnexo() );
		grupoProduto.setAnexoUuid( arquivo.getUuid() );
		grupoProduto.setNomeArquivo( arquivo.getNomeOriginal() );
	}

	public void removeArquivo(String uuid)
	{
		this.arquivoService.deleteArquivo( uuid );
	}


}