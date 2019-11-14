package br.com.projeto.portal.domain.entity.compra;


import java.io.Serializable;
import java.time.LocalDateTime;

import br.com.projeto.portal.domain.entity.Fornecedor;
import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.domain.entity.produto.Produto;
import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import org.directwebremoting.annotations.DataTransferObject;


@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "ItemCompra")
public class ItemCompra extends Produto
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private String modelo;

	private String serie;

	private String numeroNota;

	private Long fornecedorId;

	private Long produtoId;

	private Long franquiaId;

	private Long quantidade;

	private Double valorUnitario;

	///////Transient values///////
	private Fornecedor fornecedor;

	private Double custoUnitario; //calculado

	private Franquia franquia;


	public ItemCompra()
	{
	}


	public void calculeCustoUnitario()
	{
		Double saldo = this.getCurrentEstoque().getSaldo() != null ? this.getCurrentEstoque().getSaldo() : 0.0;
		Double precoCusto = this.getCurrentEstoque().getPrecoCusto() != null ? this.getCurrentEstoque().getPrecoCusto() : 0.0;
		Double custoUnitario = this.custoUnitario != null ? this.custoUnitario : 0.0;

		this.custoUnitario = ( saldo * precoCusto + quantidade * custoUnitario ) / (saldo + quantidade);
	}

	public void setCompra( Compra compra )
	{
		this.modelo = compra.getModelo();
		this.serie = compra.getSerie();
		this.numeroNota = compra.getNumeroNota();
		this.fornecedor = compra.getFornecedor();
	}

	public Compra getCompra ( )
	{
		return null;
	}
}
