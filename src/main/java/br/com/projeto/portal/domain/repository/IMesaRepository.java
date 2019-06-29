package br.com.projeto.portal.domain.repository;

import java.util.List;

import br.com.projeto.portal.domain.entity.mesa.Mesa;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IMesaRepository
{
	public Mesa findMesaByNumeroMesa( long numeroMesa );

	public Page<Mesa> listMesasByFilters( Long numeroMesa, Long ambienteId, PageRequest pageable );

	public void insertMesa( Mesa mesa );

	public void deleteMesa( long id);

	public void updateMesa( Mesa mesa );

	public void updateSituacaoMesa(long id, boolean situacao);

	public List<Mesa> findMesaByAmbienteId(long ambienteId);
	
}
