package br.com.projeto.portal.domain.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;

import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

import br.com.projeto.portal.application.security.ContextHolder;
import br.com.projeto.portal.domain.dao.CompraDAO;
import br.com.projeto.portal.domain.dao.ContasAPagarDAO;
import br.com.projeto.portal.domain.dao.EstoqueDAO;
import br.com.projeto.portal.domain.dao.ProdutoDAO;
import br.com.projeto.portal.domain.dao.venda.ContasAReceberDAO;
import br.com.projeto.portal.domain.dao.venda.VendaDAO;
import br.com.projeto.portal.domain.entity.compra.Compra;
import br.com.projeto.portal.domain.entity.compra.ItemCompra;
import br.com.projeto.portal.domain.entity.contasApagar.ContasAPagar;
import br.com.projeto.portal.domain.entity.venda.ContasAReceber;
import br.com.projeto.portal.domain.entity.venda.ItemVenda;
import br.com.projeto.portal.domain.entity.venda.Venda;

@Service
@RemoteProxy
@Transactional
public class VendaService
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	@Autowired
	private VendaDAO vendaDao;

	@Autowired
	private EstoqueDAO estoqueDAO;

	@Autowired
	private ContasAReceberDAO contasAReceberDAO;

	@Autowired
	private ProdutoDAO produtoDAO;

	private static ZoneId fusoHorarioDeSaoPaulo = ZoneId.of( "America/Sao_Paulo" );


	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/

	
	public Page<Venda> listVendasByFilters( String modelo, String serie, String numNota, Long codigo, PageRequest pageable )
	{
		return this.vendaDao.listVendasByFilters( modelo, serie, numNota, codigo, pageable );
	}

	
	public Venda findVendaById( String modelo, String serie, String numNota, Long codigo )
	{
		Venda venda = this.vendaDao.findVendaById( modelo, serie, numNota, codigo, ContextHolder.getAuthenticatedUser().getFranquia().getCodigo() );
		return venda;
	}

	
	public void insertVenda( Venda venda )
	{
		venda.setSituacao( true );
		venda.setUsuario( ContextHolder.getAuthenticatedUser() );
		venda.setFranquia( ContextHolder.getAuthenticatedUser().getFranquia() );

		this.vendaDao.insertVenda( venda );

		if ( venda.getItensVenda() != null && venda.getItensVenda().size() > 0 )
		{
			for ( ItemVenda itemVenda : venda.getItensVenda() )
			{
				itemVenda.setVenda( venda );
				itemVenda.setFranquia( ContextHolder.getAuthenticatedUser().getFranquia() );

				produtoDAO.setCurrentEstoque( itemVenda ); // atualiza o saldo
				itemVenda.getCurrentEstoque().setSaldo( itemVenda.getCurrentEstoque().getSaldo().intValue() -  itemVenda.getQuantidade().intValue() );

				Assert.isTrue( itemVenda.getCurrentEstoque().getSaldo() >= 0, "Não foi possível realizar a venda pois o produto "+itemVenda.getProduto()+" não possui estoque suficiente." );

				vendaDao.insertItemVenda( itemVenda );

				if(itemVenda.getCurrentEstoque().getCreated() == null)
					estoqueDAO.insertEstoque( itemVenda.getCurrentEstoque() );
				else
					estoqueDAO.updateEstoque( itemVenda.getCurrentEstoque() );
			}
		}

		if ( venda.getContasAReceber() != null && venda.getContasAReceber().size() > 0 )
		{
			for ( ContasAReceber contasAReceber : venda.getContasAReceber() )
			{
				contasAReceber.setDataEmissao( LocalDate.now() );
				contasAReceber.setFranquia( ContextHolder.getAuthenticatedUser().getFranquia() );
				contasAReceberDAO.insertContaAReceber( contasAReceber );
			}
		}
	}

	public void updateSituacaoVenda( String modelo, String serie, String numNota, Long codigo, boolean situacao )
	{
		Venda venda = this.findVendaById( modelo, serie, numNota, codigo );

		//CANCELANDO OS ITENS DA VENDA
		venda.getItensVenda().forEach( itemVenda -> {
			itemVenda.getCurrentEstoque().setSaldo( itemVenda.getCurrentEstoque().getSaldo().intValue() +  itemVenda.getQuantidade().intValue() );
			Assert.isTrue( itemVenda.getCurrentEstoque().getSaldo() >= 0, "Não foi possível cancelar a venda, pois não possui saldo suficiente em estoque para realizar o cancelamento.");

			vendaDao.updateSituacaoItemVenda(itemVenda, false);
			estoqueDAO.updateEstoque(itemVenda.getCurrentEstoque());
		});

		//CANCELANDO AS CONTAS A RECEBER
		venda.getContasAReceber().forEach( contasAReceber -> {
			Assert.isTrue( contasAReceber.getSituacaoLiquidez() == null || contasAReceber.getSituacaoLiquidez() != null && !contasAReceber.getSituacaoLiquidez(), "Não foi possível cancelar a venda, pois uma das contas á receber, foi dado baixa.");
			this.contasAReceberDAO.updateSituacaoContaAReceber( contasAReceber, false );
		});

		this.vendaDao.updateSituacaoVenda( modelo, serie, numNota, codigo, ContextHolder.getAuthenticatedUser().getFranquia().getCodigo(),  situacao );
	}

}