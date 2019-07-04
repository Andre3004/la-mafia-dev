package br.com.projeto.portal.domain.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import br.com.projeto.portal.domain.dao.GrupoProdutoDAO;
import br.com.projeto.portal.domain.entity.GrupoProdutoFranquia;
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
	public Page<GrupoProduto> listGrupoProdutosByFilters( String nome, Long codigo, PageRequest pageable )
	{
		return this.grupoProdutoDao.listGrupoProdutosByFilters( nome, codigo, pageable );
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
	public Long insertGrupoProduto( GrupoProduto grupoProduto )
	{
		if(grupoProduto.getAnexo() != null)
			this.insertArquivo( grupoProduto );

		grupoProduto.setSituacao( true );

		Long grupoProdutoId = this.grupoProdutoDao.insertGrupoProduto( grupoProduto );

		if(grupoProduto.getGrupoProdutoFranquia() != null && grupoProduto.getGrupoProdutoFranquia().size() > 0)
		{
			for ( GrupoProdutoFranquia grupoProdutoFranquia : grupoProduto.getGrupoProdutoFranquia() )
			{
				grupoProdutoFranquia.setGrupoProduto( new GrupoProduto(grupoProdutoId) );
				grupoProdutoDao.insertGrupoProdutoFranquia( grupoProdutoFranquia );
			}

		}

		return grupoProdutoId;
	}

	@Override
	public void updateGrupoProduto( GrupoProduto grupoProduto, List<Long> grupoProdutoFranquiaIds )
	{
		if(grupoProduto.getAnexoUuid() == null && grupoProduto.getAnexo() != null)
			this.insertArquivo( grupoProduto );

		if(grupoProdutoFranquiaIds != null && grupoProdutoFranquiaIds.size() > 0)
		{
			for ( Long grupoProdutoFranquiaId : grupoProdutoFranquiaIds )
			{
				grupoProdutoDao.deleteGrupoProdutoFraquia(grupoProdutoFranquiaId,  grupoProduto.getCodigo() );
			}
		}

		if(grupoProduto.getGrupoProdutoFranquia() != null && grupoProduto.getGrupoProdutoFranquia().size() > 0)
		{
			List<GrupoProdutoFranquia> toInsert = grupoProduto.getGrupoProdutoFranquia().stream().filter( grupoProdutoFranquia -> grupoProdutoFranquia.getCreated() == null ).collect( Collectors.toList() );

			for ( GrupoProdutoFranquia grupoProdutoFranquia : toInsert )
			{
				grupoProdutoFranquia.setCreated( LocalDateTime.now() );
				grupoProdutoFranquia.setGrupoProduto( grupoProduto );
				grupoProdutoDao.insertGrupoProdutoFranquia( grupoProdutoFranquia );
			}
		}

		grupoProduto.setUpdated( LocalDateTime.now() );

		this.grupoProdutoDao.updateGrupoProduto( grupoProduto, grupoProdutoFranquiaIds );
	}

	@Override
	public void updateSituacaoGrupoProduto( long id, boolean situacao )
	{
		this.grupoProdutoDao.updateSituacaoGrupoProduto( id, situacao );
	}

	@Override
	public void deleteGrupoProduto( long id )
	{
		GrupoProduto grupoProdutoSaved = this.grupoProdutoDao.findGrupoProdutoById( id );

		if(grupoProdutoSaved.getGrupoProdutoFranquia() != null && grupoProdutoSaved.getGrupoProdutoFranquia().size() > 0)
		{
			for ( GrupoProdutoFranquia grupoProdutoFranquia : grupoProdutoSaved.getGrupoProdutoFranquia() )
			{
				grupoProdutoDao.deleteGrupoProdutoFraquia(grupoProdutoFranquia.getFranquia().getCodigo(), id );
			}
		}

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

	/*-------------------------------------------------------------------
 *				 		     GRUPO PRODUTO FRANQUIA
	 *-------------------------------------------------------------------*/

	public void insertGrupoProdutoFranquia( GrupoProdutoFranquia grupoProdutoFranquia )
	{

	}
}