package br.com.projeto.portal.domain.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.stream.Collectors;

import br.com.projeto.portal.application.security.ContextHolder;
import br.com.projeto.portal.domain.dao.CompraDAO;
import br.com.projeto.portal.domain.dao.ContasAPagarDAO;
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

	@Autowired
	private ContasAPagarDAO contasAPagarDAO;

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
		Compra compra = this.compraDao.findCompraById( modelo, serie, numNota, codigo, ContextHolder.getAuthenticatedUser().getFranquia().getCodigo() );
		return compra;
	}

	
	public void insertCompra( Compra compra )
	{
		compra.setSituacao( true );
		compra.setUsuario( ContextHolder.getAuthenticatedUser() );
		compra.setFranquia( ContextHolder.getAuthenticatedUser().getFranquia() );

		this.compraDao.insertCompra( compra );

		if ( compra.getItensCompra() != null && compra.getItensCompra().size() > 0 )
		{
			for ( ItemCompra itemCompra : compra.getItensCompra() )
			{
				itemCompra.setCompra( compra );
				itemCompra.setFranquia( ContextHolder.getAuthenticatedUser().getFranquia() );

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
				contasAPagar.setDataEmissao( LocalDate.now() );
				contasAPagar.setFranquia( ContextHolder.getAuthenticatedUser().getFranquia() );
				contasAPagarDAO.insertContaAPagar( contasAPagar );
			}
		}
	}

	public void updateSituacaoCompra( String modelo, String serie, String numNota, Long codigo, boolean situacao )
	{
		Compra compra = this.findCompraById( modelo, serie, numNota, codigo );

		//CANCELANDO OS ITENS DA COMPRA
		compra.getItensCompra().forEach( itemCompra -> {

			itemCompra.getCurrentEstoque().setSaldo( itemCompra.getCurrentEstoque().getSaldo().intValue() -  itemCompra.getQuantidade().intValue() );
			Assert.isTrue( itemCompra.getCurrentEstoque().getSaldo() >= 0, "Não foi possível cancelar a compra, pois não possui saldo suficiente em estoque para realizar o cancelamento.");

			compraDao.updateSituacaoItemCompra(itemCompra, false);
			estoqueDAO.updateEstoque(itemCompra.getCurrentEstoque());
		});

		//CANCELANDO AS CONTAS A PAGAR
		compra.getContasAPagar().forEach( contasAPagar -> {
			Assert.isTrue( contasAPagar.getSituacaoLiquidez() == null || contasAPagar.getSituacaoLiquidez() != null && !contasAPagar.getSituacaoLiquidez(), "Não foi possível cancelar a compra, pois uma das contas á pagar, foi dado baixa.");
			this.contasAPagarDAO.updateSituacaoContaAPagar( contasAPagar, false );
		});

		this.compraDao.updateSituacaoCompra( modelo, serie, numNota, codigo, ContextHolder.getAuthenticatedUser().getFranquia().getCodigo(),  situacao );
	}

}