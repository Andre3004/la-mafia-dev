package br.com.projeto.portal.domain.entity.compra;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.directwebremoting.annotations.DataTransferObject;

import br.com.projeto.portal.domain.entity.Fornecedor;
import br.com.projeto.portal.domain.entity.pagamento.CondicaoPagamento;
import br.com.projeto.portal.domain.entity.usuario.Usuario;
import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "compra")
public class Compra extends AbstractEntity
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private String serie;

	private String modelo;

	private String numeroNota;

	private int fornecedorId;

	private Long usuarioId;

	private Long condicaoPagamentoId;

	private LocalDateTime dataChegada;

	private TipoFrete tipoFrete;

	private Double frete;

	private Double seguro;

	private Double despesa;

	private Boolean situacao;

	///////Transient values///////
	private CondicaoPagamento condicaoPagamento;

	private Fornecedor fornecedor;

	private Usuario usuario;

	private List<ItemCompra> itemCompra = new ArrayList<>();

	public Compra()
	{

	}

	public Compra( String modelo, String numeroNota, String serie, int fornecedorId )
	{
		this.serie = serie;
		this.numeroNota = numeroNota;
		this.modelo = modelo;
		this.fornecedorId = fornecedorId;
	}
}
