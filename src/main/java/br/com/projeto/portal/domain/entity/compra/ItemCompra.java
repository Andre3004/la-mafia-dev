package br.com.projeto.portal.domain.entity.compra;


import java.io.Serializable;
import java.time.LocalDateTime;

import br.com.projeto.portal.domain.entity.Fornecedor;
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

	private Long quantidade;

	private Double valorUnitario;

	private Double custoUnitario; //calculado

	///////Transient values///////
	private Compra compra;

	public ItemCompra()
	{
	}


}
