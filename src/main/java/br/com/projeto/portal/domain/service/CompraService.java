package br.com.projeto.portal.domain.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import br.com.projeto.portal.application.security.ContextHolder;
import br.com.projeto.portal.domain.dao.CompraDAO;
import br.com.projeto.portal.domain.dao.EstoqueDAO;
import br.com.projeto.portal.domain.entity.compra.Compra;
import br.com.projeto.portal.domain.entity.compra.ItemCompra;
import br.com.projeto.portal.domain.entity.contasApagar.ContasAPagar;
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

	@Autowired
	private EstoqueDAO estoqueDAO;

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
	public void insertCompra( Compra compra )
	{
		compra.setSituacao( true );
		compra.setUsuario( ContextHolder.getAuthenticatedUser() );
		this.compraDao.insertCompra( compra );

		if ( compra.getItensCompra() != null && compra.getItensCompra().size() > 0 )
		{
			for ( ItemCompra itemCompra : compra.getItensCompra() )
			{
				if(itemCompra.getCurrentEstoque().getCreated() == null)
				{
					itemCompra.getCurrentEstoque().setSaldo( itemCompra.getCurrentEstoque().getSaldo().intValue() +  itemCompra.getQuantidade().intValue() );
				}
				else
				{
					itemCompra.getCurrentEstoque().setSaldo( itemCompra.getCurrentEstoque().getSaldo().intValue() +  itemCompra.getQuantidade().intValue() );
				}

				itemCompra.setCompra( compra );
				itemCompra.calculeCustoUnitario();

				if(itemCompra.getCurrentEstoque().getCreated() == null)
				{
					itemCompra.getCurrentEstoque().setPrecoCusto( itemCompra.getCustoUnitario() ); //insere o preco de custo atualizado
					estoqueDAO.insertEstoque(itemCompra.getCurrentEstoque());
				}
				else
				{
					itemCompra.getCurrentEstoque().setPrecoCusto( itemCompra.getCustoUnitario() ); //atualiza o preco de custo atualizado
					estoqueDAO.updateEstoque(itemCompra.getCurrentEstoque());
				}

				compraDao.insertItemCompra( itemCompra );
			}
		}

		if ( compra.getContasAPagar() != null && compra.getContasAPagar().size() > 0 )
		{
			for ( ContasAPagar contasAPagar : compra.getContasAPagar() )
			{
				compraDao.insertContaAPagar( contasAPagar );
			}
		}
	}

	@Override
	public void updateSituacaoCompra( String modelo, String serie, String numNota, Long idFornecedor, boolean situacao )
	{
		Compra compra = this.findCompraById( modelo, serie, numNota, idFornecedor );
		compra.getItensCompra().forEach( itemCompra -> {
			if(situacao)
				itemCompra.getCurrentEstoque().setSaldo( itemCompra.getCurrentEstoque().getSaldo().intValue() +  itemCompra.getQuantidade().intValue() );
			else
				itemCompra.getCurrentEstoque().setSaldo( itemCompra.getCurrentEstoque().getSaldo().intValue() -  itemCompra.getQuantidade().intValue() );
			estoqueDAO.updateEstoque(itemCompra.getCurrentEstoque());
		});

		this.compraDao.updateSituacaoCompra( modelo, serie, numNota, idFornecedor, situacao );
	}

}