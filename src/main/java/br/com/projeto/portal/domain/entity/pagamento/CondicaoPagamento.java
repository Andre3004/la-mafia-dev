package br.com.projeto.portal.domain.entity.pagamento;

import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.directwebremoting.annotations.DataTransferObject;

@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "condicaoPagamento")
public class CondicaoPagamento extends AbstractEntity
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private Long codigo;

	private Double juros;

	private Double multa;

	private Double desconto;

	private Boolean situacao;

	private Boolean aPrazo;

	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/

	public CondicaoPagamento(){}


	/*-------------------------------------------------------------------
	 *							BEHAVIORS
	 *-------------------------------------------------------------------*/
}
