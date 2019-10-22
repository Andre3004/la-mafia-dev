package br.com.projeto.portal.domain.entity.venda;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.directwebremoting.annotations.DataTransferObject;

import br.com.projeto.portal.domain.entity.Cliente;
import br.com.projeto.portal.domain.entity.Fornecedor;
import br.com.projeto.portal.domain.entity.contasApagar.ContasAPagar;
import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.domain.entity.pagamento.CondicaoPagamento;
import br.com.projeto.portal.domain.entity.usuario.Usuario;
import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "Venda")
public class Venda extends AbstractEntity
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private String modelo;

	private String serie;

	private String numeroNota;

	private Long clienteId;

	private Long franquiaId;

	private LocalDateTime dataEmissao;

	private Long usuarioId;

	private Long condicaoPagamentoId;

	private Boolean situacao;

	///////Transient values///////
	private Cliente cliente;

	private Franquia franquia;

	private Usuario usuario;

	private CondicaoPagamento condicaoPagamento;

	private List<ItemVenda> itensVenda = new ArrayList<>();

	private List<ContasAReceber> contasAReceber = new ArrayList<>();

	public Venda()
	{

	}

	public Venda( String serie, String modelo, String numeroNota, Long clienteId, Long franquiaId )
	{
		this.serie = serie;
		this.numeroNota = numeroNota;
		this.modelo = modelo;
		this.clienteId = clienteId;
		this.franquiaId = franquiaId;
	}

}
