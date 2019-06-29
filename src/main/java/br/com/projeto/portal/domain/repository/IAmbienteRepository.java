package br.com.projeto.portal.domain.repository;

import java.util.List;

import br.com.projeto.portal.domain.entity.Ambiente.Ambiente;
import br.com.projeto.portal.domain.entity.Ambiente.AmbienteImagem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IAmbienteRepository
{
	public Ambiente findAmbienteById( long id);

	public Page<Ambiente> listAmbientesByFilters( String nome, Long franquiaId, PageRequest pageable );

	public Long insertAmbiente( Ambiente ambiente );

	public void deleteAmbiente( long id);

	public void updateAmbiente( Ambiente ambiente, List<Long> imagensDeletadasIds  );

	public void updateSituacaoAmbiente(long id, boolean situacao);


	/*-------------------------------------------------------------------
	 *				 		     Arquivo
	 *-------------------------------------------------------------------*/


	public List<AmbienteImagem> findAmbienteImagemByAmbienteId( long ambienteId);

	public void insertAmbienteImagem( AmbienteImagem ambienteImagem );

	public void deleteAmbienteImagem( long id);

	public void updateAmbienteImagem( AmbienteImagem ambienteImagem );
}
