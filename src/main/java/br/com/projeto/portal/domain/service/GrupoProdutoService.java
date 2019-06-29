package br.com.projeto.portal.domain.service;

import java.time.LocalDateTime;

import br.com.projeto.portal.domain.dao.GrupoProdutoDAO;
import br.com.projeto.portal.domain.entity.grupoProduto.GrupoProduto;
import br.com.projeto.portal.domain.repository.IGrupoProdutoRepository;
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
public class GrupoProdutoService implements IGrupoProdutoRepository
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

	@Override
	public Page<GrupoProduto> listGrupoProdutosByFilters( String nome, Long franquiaId, PageRequest pageable )
	{
		return this.grupoProdutoDao.listGrupoProdutosByFilters( nome, franquiaId, pageable );
	}

	@Override
	public GrupoProduto findGrupoProdutoById( long id )
	{
		GrupoProduto grupoProduto = this.grupoProdutoDao.findGrupoProdutoById( id );

		if ( grupoProduto.getAnexoUuid() != null )
		{
			grupoProduto.setAnexo( this.arquivoService.downloadArquivoByUuid( grupoProduto.getAnexoUuid() ) );
		}

		return grupoProduto;
	}

	@Override
	public void insertGrupoProduto( GrupoProduto grupoProduto )
	{
		if(grupoProduto.getAnexo() != null)
			this.insertArquivo( grupoProduto );

		grupoProduto.setSituacao( true );

		this.grupoProdutoDao.insertGrupoProduto( grupoProduto );
	}

	@Override
	public void updateGrupoProduto( GrupoProduto grupoProduto )
	{
		if(grupoProduto.getAnexoUuid() == null && grupoProduto.getAnexo() != null)
			this.insertArquivo( grupoProduto );

		GrupoProduto grupoProdutoSaved = this.grupoProdutoDao.findGrupoProdutoById( grupoProduto.getId() );

		grupoProduto.setUpdated( LocalDateTime.now() );

		this.grupoProdutoDao.updateGrupoProduto( grupoProduto );
	}

	@Override
	public void updateSituacaoGrupoProduto( long id, boolean situacao )
	{
		this.grupoProdutoDao.updateSituacaoGrupoProduto( id, situacao );
	}

	@Override
	public void deleteGrupoProduto( long id )
	{
		//TODO validar se existe registros relacionados, se existe só desativa
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