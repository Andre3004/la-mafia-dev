package br.com.projeto.portal.domain.service;

import java.util.List;

import br.com.projeto.portal.domain.dao.MesaDAO;
import br.com.projeto.portal.domain.entity.Ambiente.Ambiente;
import br.com.projeto.portal.domain.entity.mesa.Mesa;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

@Service
@RemoteProxy
@Transactional
public class MesaService
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	@Autowired
	private MesaDAO mesaDao;

	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/

	
	public Page<Mesa> listMesasByFilters( Long numeroMesa, Long ambienteId, PageRequest pageable )
	{
		return this.mesaDao.listMesasByFilters( numeroMesa, ambienteId, pageable );
	}

	
	public Mesa findMesaByNumeroMesa( long numeroMesa )
	{
		Mesa mesa = this.mesaDao.findMesaByNumeroMesa( numeroMesa );

		return mesa;
	}

	
	public void insertMesa( Mesa mesa )
	{
		mesa.setSituacao( true );

		List<Mesa> mesas = this.findMesaByAmbienteId( mesa.getAmbiente().getCodigo() );
		Assert.isTrue( mesas.size() < mesa.getAmbiente().getCapacidadeMesas(), "O ambiente não comporta mais mesas." );
		this.mesaDao.insertMesa( mesa );
	}

	
	public void updateMesa( Mesa mesa )
	{
		this.mesaDao.updateMesa( mesa );
	}

	
	public void updateSituacaoMesa( long id, boolean situacao )
	{
		this.mesaDao.updateSituacaoMesa( id, situacao );
	}

	
	public List<Mesa> findMesaByAmbienteId( long ambienteId )
	{
		return mesaDao.findMesaByAmbienteId( ambienteId );
	}

	
	public void deleteMesa( long id )
	{
		this.mesaDao.deleteMesa( id );
	}

}