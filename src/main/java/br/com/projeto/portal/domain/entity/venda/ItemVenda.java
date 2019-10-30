package br.com.projeto.portal.domain.entity.venda;


import org.directwebremoting.annotations.DataTransferObject;

import br.com.projeto.portal.domain.entity.Cliente;
import br.com.projeto.portal.domain.entity.venda.Venda;
import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.domain.entity.produto.Produto;

import lombok.Data;
import lombok.EqualsAndHashCode;


@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "ItemVenda")
public class ItemVenda extends Produto
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private String modelo;

	private String serie;

	private String numeroNota;

	private Long produtoId;

	private Long clienteId;

	private Long franquiaId;

	private Long quantidade;

	private Double valorVenda;

	///////Transient values///////

	private Cliente cliente;

	private Franquia franquia;

	public ItemVenda()
	{
	}

	public void setVenda( Venda venda )
	{
		this.serie = venda.getSerie();
		this.numeroNota = venda.getNumeroNota();
		this.modelo = venda.getModelo();
		this.cliente = venda.getCliente();
		this.franquia = venda.getFranquia();
	}

	public Venda getVenda()
	{
		return null;
	}

}
