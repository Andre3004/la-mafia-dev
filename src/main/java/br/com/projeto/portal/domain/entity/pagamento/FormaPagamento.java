package br.com.projeto.portal.domain.entity.pagamento;

import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.directwebremoting.annotations.DataTransferObject;

@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "FormaPagamento")
public class FormaPagamento extends AbstractEntity
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private Long codigo;

	private Boolean situacao;

	private String nome;

	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/

	public FormaPagamento(){}


	/*-------------------------------------------------------------------
	 *							BEHAVIORS
	 *-------------------------------------------------------------------*/
}
