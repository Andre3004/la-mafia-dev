package br.com.projeto.portal.domain.entity.pagamento;

import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.directwebremoting.annotations.DataTransferObject;

@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "condicaoPagamentoParcela")
public class CondicaoPagamentoParcela extends AbstractEntity
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private Integer dias;

	private Double porcentagem;

	private Integer parcela;

	private CondicaoPagamento condicaoPagamento;

	private FormaPagamento formaPagamento;

	//@Transient
	private Long condicaoPagamentoId;

	//@Transient
	private Long formaPagamentoId;

	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/

	public CondicaoPagamentoParcela(){}


	/*-------------------------------------------------------------------
	 *							BEHAVIORS
	 *-------------------------------------------------------------------*/
}
