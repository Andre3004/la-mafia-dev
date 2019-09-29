package br.com.projeto.portal.domain.service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.stream.Collectors;

import br.com.projeto.portal.application.security.ContextHolder;
import br.com.projeto.portal.domain.dao.CompraDAO;
import br.com.projeto.portal.domain.dao.EstoqueDAO;
import br.com.projeto.portal.domain.entity.compra.Compra;
import br.com.projeto.portal.domain.entity.compra.ItemCompra;
import br.com.projeto.portal.domain.entity.contasApagar.ContasAPagar;

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
public class CompraService
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	@Autowired
	private CompraDAO compraDao;

	@Autowired
	private EstoqueDAO estoqueDAO;

	private static ZoneId fusoHorarioDeSaoPaulo = ZoneId.of( "America/Sao_Paulo" );


	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/

	
	public Page<Compra> listComprasByFilters( String modelo, String serie, String numNota, Long codigo, PageRequest pageable )
	{
		return this.compraDao.listComprasByFilters( modelo, serie, numNota, codigo, pageable );
	}

	
	public Compra findCompraById( String modelo, String serie, String numNota, Long codigo )
	{
		Compra compra = this.compraDao.findCompraById( modelo, serie, numNota, codigo );
		return compra;
	}

	
	public void insertCompra( Compra compra )
	{
		compra.setSituacao( true );
		compra.setUsuario( ContextHolder.getAuthenticatedUser() );
		this.compraDao.insertCompra( compra );

		if ( compra.getItensCompra() != null && compra.getItensCompra().size() > 0 )
		{
			for ( ItemCompra itemCompra : compra.getItensCompra() )
			{
				itemCompra.setCompra( compra );
				itemCompra.calculeCustoUnitario();

				if(itemCompra.getCurrentEstoque().getCreated() == null)
				{
					itemCompra.getCurrentEstoque().setSaldo( itemCompra.getCurrentEstoque().getSaldo().intValue() +  itemCompra.getQuantidade().intValue() );
				}
				else
				{
					itemCompra.getCurrentEstoque().setSaldo( itemCompra.getCurrentEstoque().getSaldo().intValue() +  itemCompra.getQuantidade().intValue() );
				}

				itemCompra.getCurrentEstoque().setFornecedor( compra.getFornecedor() );
				itemCompra.getCurrentEstoque().setDataUltimaCompra( LocalDateTime.now(fusoHorarioDeSaoPaulo) );

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

	
	public void updateSituacaoCompra( String modelo, String serie, String numNota, Long codigo, boolean situacao )
	{
		Compra compra = this.findCompraById( modelo, serie, numNota, codigo );
		compra.getItensCompra().forEach( itemCompra -> {
			if(situacao)
				itemCompra.getCurrentEstoque().setSaldo( itemCompra.getCurrentEstoque().getSaldo().intValue() +  itemCompra.getQuantidade().intValue() );
			else
				itemCompra.getCurrentEstoque().setSaldo( itemCompra.getCurrentEstoque().getSaldo().intValue() -  itemCompra.getQuantidade().intValue() );

			Assert.isTrue( itemCompra.getCurrentEstoque().getSaldo() >= 0, "Não foi possível cancelar a compra, pois não possui saldo suficiente em estoque para realizar o cancelamento.");
			estoqueDAO.updateEstoque(itemCompra.getCurrentEstoque());
		});

		this.compraDao.updateSituacaoCompra( modelo, serie, numNota, codigo, situacao );
	}

}