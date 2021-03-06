package br.com.projeto.portal.domain.service;

import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.domain.dao.FranquiaDAO;
import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.infrastructure.arquivo.Arquivo;
import br.com.projeto.portal.infrastructure.arquivo.ArquivoService;
import br.com.projeto.portal.infrastructure.arquivo.IArquivoRepository;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author
 */
@Service
@RemoteProxy
@Transactional
public class FranquiaService
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	@Autowired
	private FranquiaDAO franquiaDao;

	@Autowired
	private IArquivoRepository arquivoRepository;

	@Autowired
	private ArquivoService arquivoService;

	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/

	
	public Page<Franquia> listFranquiasByFilters( String nome, String cnpj, PageRequest pageable )
	{
		return this.franquiaDao.listFranquiasByFilters( nome, cnpj, pageable );
	}

	
	public Franquia findFranquiaById( long id )
	{
		Franquia franquia = this.franquiaDao.findFranquiaById( id );

		if ( franquia.getAnexoUuid() != null )
		{
			franquia.setAnexo( this.arquivoService.downloadArquivoByUuid( franquia.getAnexoUuid() ) );
		}

		return franquia;
	}

	
	public void insertFranquia( Franquia franquia )
	{
		if(franquia.getAnexo() != null)
			this.insertArquivo( franquia );

		franquia.setSituacao( true );

		this.franquiaDao.insertFranquia( franquia );
	}

	
	public void updateFranquia( Franquia franquia)
	{
		if(franquia.getAnexoUuid() == null && franquia.getAnexo() != null)
			this.insertArquivo( franquia );

		Franquia franquiaSaved = this.franquiaDao.findFranquiaById( franquia.getCodigo() );

		franquia.setUpdated( LocalDateTime.now() );

		this.franquiaDao.updateFranquia( franquia );
	}

	
	public void updateSituacaoFranquia( long id, boolean situacao )
	{
		this.franquiaDao.updateSituacaoFranquia( id, situacao );
	}

	
	public void deleteFranquia( long id )
	{
		Franquia franquia = this.findFranquiaById( id );
		if(franquia.getAnexoUuid() != null) this.removeArquivo( franquia.getAnexoUuid() );

		this.franquiaDao.deleteFranquia( id );
	}

	/*-------------------------------------------------------------------
	 *				 		     ARQUIVO
	 *-------------------------------------------------------------------*/


	public void insertArquivo(Franquia franquia)
	{
		Arquivo arquivo = this.arquivoRepository.insert( franquia.getAnexo() );
		franquia.setAnexoUuid( arquivo.getUuid() );
		franquia.setNomeArquivo( arquivo.getNomeOriginal() );
	}

	public void removeArquivo(String uuid)
	{
		this.arquivoService.deleteArquivo( uuid );
	}

}