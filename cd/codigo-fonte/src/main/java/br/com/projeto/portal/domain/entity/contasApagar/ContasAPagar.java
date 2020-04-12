package br.com.projeto.portal.domain.entity.contasApagar;

import java.io.Serializable;
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
@DataTransferObject(javascript = "ContasAPagar")
public class ContasAPagar  implements Serializable
{

	private static final long serialVersionUID = 1L;

	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private String modelo;

	private String serie;

	private String numeroNota;

	private Integer numeroParcela;

	private Long fornecedorId;

	private Long franquiaId;

	private LocalDate dataEmissao;

	private Boolean situacaoLiquidez;

	private Double desconto;

	private Double juros;

	private Double multa;

	private Double valorPago;

	private LocalDateTime dataPagamento;

	private Long formaPagamentoId;

	private LocalDate dataVencimento;

	private Double valorParcela;

	private Boolean situacao;

	private Boolean isAvulso;

	protected LocalDateTime created;
	protected LocalDateTime updated;

	///////Transient values///////
	private Fornecedor fornecedor;

	private Franquia franquia;

	private FormaPagamento formaPagamento;

	public ContasAPagar()
	{
	}
}
