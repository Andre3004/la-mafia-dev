package br.com.projeto.portal.domain.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import br.com.projeto.portal.domain.dao.CompraDAO;
import br.com.projeto.portal.domain.entity.compra.Compra;
import br.com.projeto.portal.domain.entity.compra.ItemCompra;
import br.com.projeto.portal.domain.repository.ICompraRepository;

import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RemoteProxy
@Transactional
public class CompraService implements ICompraRepository
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	@Autowired
	private CompraDAO compraDao;

	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/

	@Override
	public Page<Compra> listComprasByFilters( String modelo, String serie, String numNota, Long idFornecedor, PageRequest pageable )
	{
		return this.compraDao.listComprasByFilters( modelo, serie, numNota, idFornecedor, pageable );
	}

	@Override
	public Compra findCompraById( String modelo, String serie, String numNota, Long idFornecedor )
	{
		Compra compra = this.compraDao.findCompraById( modelo, serie, numNota, idFornecedor );
		return compra;
	}

	@Override
	@Transactional
	public void insertCompra( Compra compra )
	{
		compra.setSituacao( true );
		this.compraDao.insertCompra( compra );

		if ( compra.getItemCompra() != null && compra.getItemCompra().size() > 0 )
		{
			for ( ItemCompra itemCompra : compra.getItemCompra() )
			{
				itemCompra.setCompra( compra );
				compraDao.insertItemCompra( itemCompra );
			}
		}
	}

	@Override
	public void updateSituacaoCompra( String modelo, String serie, String numNota, Long idFornecedor, boolean situacao )
	{
		this.compraDao.updateSituacaoCompra( modelo, serie, numNota, idFornecedor, situacao );
	}

}