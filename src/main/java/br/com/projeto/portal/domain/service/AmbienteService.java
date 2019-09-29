package br.com.projeto.portal.domain.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import br.com.projeto.portal.domain.dao.AmbienteDAO;
import br.com.projeto.portal.domain.dao.MesaDAO;
import br.com.projeto.portal.domain.entity.Ambiente.Ambiente;
import br.com.projeto.portal.domain.entity.Ambiente.AmbienteImagem;
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
public class AmbienteService
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	@Autowired
	private AmbienteDAO ambienteDao;

	@Autowired
	private MesaDAO mesaDAO;

	@Autowired
	private IArquivoRepository arquivoRepository;

	@Autowired
	private ArquivoService arquivoService;


	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/

	
	public Page<Ambiente> listAmbientesByFilters( String nome, Long ambienteId, PageRequest pageable )
	{
		return this.ambienteDao.listAmbientesByFilters( nome, ambienteId, pageable );
	}

	
	public Ambiente findAmbienteById( long id )
	{
		Ambiente ambiente = this.ambienteDao.findAmbienteById( id );

		ambiente.setMesas( mesaDAO.findMesaByAmbienteId( id ) );

		return ambiente;
	}

	
	public Long insertAmbiente( Ambiente ambiente )
	{
		ambiente.setSituacao( true );
		Long ambienteId = this.ambienteDao.insertAmbiente( ambiente );

		if(ambiente.getAmbienteImagems() != null && ambiente.getAmbienteImagems().size() > 0)
		{
			ambiente.getAmbienteImagems().forEach( ambienteImagem -> {

				ambienteImagem.setAmbiente( new Ambiente(ambienteId) );
				insertAmbienteImagem( ambienteImagem );

			});
		}

		return ambienteId;
	}

	
	public void updateAmbiente( Ambiente ambiente, List<Long> imagensDeletadasIds )
	{
		if(imagensDeletadasIds != null && imagensDeletadasIds.size() > 0)
		{
			for ( Long imagensDeletadasId : imagensDeletadasIds )
			{
				ambienteDao.deleteAmbienteImagem( imagensDeletadasId );
			}
		}

		if(ambiente.getAmbienteImagems() != null && ambiente.getAmbienteImagems().size() > 0)
		{
			List<AmbienteImagem> ambienteImagemsToInsert = ambiente.getAmbienteImagems().stream().filter( ambienteImagem -> ambienteImagem.getCodigo() == null ).collect( Collectors.toList() );

			ambienteImagemsToInsert.forEach( ambienteImagem -> {
				ambienteImagem.setAmbiente( ambiente );
				insertAmbienteImagem( ambienteImagem );
			});

		}

		this.ambienteDao.updateAmbiente( ambiente, imagensDeletadasIds );
	}

	
	public void updateSituacaoAmbiente( long id, boolean situacao )
	{
		this.ambienteDao.updateSituacaoAmbiente( id, situacao );
	}

	
	public void deleteAmbiente( long id )
	{
		Ambiente ambiente = ambienteDao.findAmbienteById( id );
		if(ambiente.getAmbienteImagems() != null && ambiente.getAmbienteImagems().size() > 0)
		{
			for ( Long imagensDeletadasId : ambiente.getAmbienteImagems().stream().map( AmbienteImagem::getCodigo ).collect( Collectors.toList() ) )
			{
				deleteAmbienteImagem( imagensDeletadasId );
			}
		}

		this.ambienteDao.deleteAmbiente( id );
	}

	/*-------------------------------------------------------------------
	 *				 		     AMBIENTE IMAGEM
	 *-------------------------------------------------------------------*/

	
	public List<AmbienteImagem> findAmbienteImagemByAmbienteId( long ambienteId )
	{
		return  ambienteDao.findAmbienteImagemByAmbienteId( ambienteId );
	}

	
	public void insertAmbienteImagem( AmbienteImagem ambienteImagem )
	{
		insertArquivo(ambienteImagem);

		ambienteDao.insertAmbienteImagem( ambienteImagem );
	}

	
	public void deleteAmbienteImagem( long id )
	{
		ambienteDao.deleteAmbienteImagem( id );
	}

	
	public void updateAmbienteImagem( AmbienteImagem ambienteImagem )
	{
		if(ambienteImagem.getAnexoUuid() == null && ambienteImagem.getAnexo() != null)
			this.insertArquivo( ambienteImagem );

		ambienteDao.updateAmbienteImagem( ambienteImagem );
	}

	/*-------------------------------------------------------------------
	 *				 		     ARQUIVO
	 *-------------------------------------------------------------------*/


	public void insertArquivo( AmbienteImagem AmbienteImagem)
	{
		Arquivo arquivo = this.arquivoRepository.insert( AmbienteImagem.getAnexo() );
		AmbienteImagem.setAnexoUuid( arquivo.getUuid() );
		AmbienteImagem.setNomeArquivo( arquivo.getNomeOriginal() );
	}

	public void removeArquivo(String uuid)
	{
		this.arquivoService.deleteArquivo( uuid );
	}


}