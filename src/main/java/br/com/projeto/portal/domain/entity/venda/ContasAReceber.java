package br.com.projeto.portal.domain.entity.venda;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.directwebremoting.annotations.DataTransferObject;

import br.com.projeto.portal.domain.entity.Cliente;
import br.com.projeto.portal.domain.entity.Fornecedor;
import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.domain.entity.pagamento.FormaPagamento;
import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "ContasAReceber")
public class ContasAReceber extends AbstractEntity
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private String modelo;

	private String serie;

	private String numeroNota;

	private Integer numeroParcela;

	private Long clienteId;

	private Long franquiaId;

	private LocalDate dataEmissao;

	private Boolean situacaoLiquidez;

	private Double desconto;

	private Double juros;

	private Double multa;

	private Double valorRecebido;

	private LocalDateTime dataRecebimento;

	private Long formaPagamentoId;

	private LocalDate dataVencimento;

	private Double valorParcela;

	private Boolean situacao;

	///////Transient values///////
	private Cliente cliente;

	private Franquia franquia;

	private FormaPagamento formaPagamento;

	public ContasAReceber()
	{
	}
}
