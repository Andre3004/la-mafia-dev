package br.com.projeto.portal.domain.entity.pagamento;

import java.io.Serializable;
import java.time.LocalDateTime;

import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.directwebremoting.annotations.DataTransferObject;

@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "condicaoPagamentoParcela")
public class CondicaoPagamentoParcela implements Serializable
{
	private static final long serialVersionUID = 1L;


	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private Long codigo;

	private Integer dias;

	private Double porcentagem;

	private Integer parcela;

	private CondicaoPagamento condicaoPagamento;

	private FormaPagamento formaPagamento;

	//@Transient
	private Long condicaoPagamentoId;

	//@Transient
	private Long formaPagamentoId;

	protected LocalDateTime created;

	protected LocalDateTime updated;

	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/

	public CondicaoPagamentoParcela(){}


	/*-------------------------------------------------------------------
	 *							BEHAVIORS
	 *-------------------------------------------------------------------*/
}
