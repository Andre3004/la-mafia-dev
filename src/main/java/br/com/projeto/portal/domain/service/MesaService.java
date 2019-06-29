package br.com.projeto.portal.domain.service;

import java.util.List;

import br.com.projeto.portal.domain.dao.MesaDAO;
import br.com.projeto.portal.domain.entity.mesa.Mesa;
import br.com.projeto.portal.domain.repository.IMesaRepository;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RemoteProxy
@Transactional
public class MesaService implements IMesaRepository
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	@Autowired
	private MesaDAO mesaDao;

	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/

	@Override
	public Page<Mesa> listMesasByFilters( Long numeroMesa, Long ambienteId, PageRequest pageable )
	{
		return this.mesaDao.listMesasByFilters( numeroMesa, ambienteId, pageable );
	}

	@Override
	public Mesa findMesaByNumeroMesa( long numeroMesa )
	{
		Mesa mesa = this.mesaDao.findMesaByNumeroMesa( numeroMesa );

		return mesa;
	}

	@Override
	public void insertMesa( Mesa mesa )
	{
		mesa.setSituacao( true );

		this.mesaDao.insertMesa( mesa );
	}

	@Override
	public void updateMesa( Mesa mesa )
	{
		this.mesaDao.updateMesa( mesa );
	}

	@Override
	public void updateSituacaoMesa( long id, boolean situacao )
	{
		this.mesaDao.updateSituacaoMesa( id, situacao );
	}

	@Override
	public List<Mesa> findMesaByAmbienteId( long ambienteId )
	{
		return mesaDao.findMesaByAmbienteId( ambienteId );
	}

	@Override
	public void deleteMesa( long id )
	{
		this.mesaDao.deleteMesa( id );
	}

}