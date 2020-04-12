package br.com.projeto.portal.domain.entity.mesa;

import br.com.projeto.portal.domain.entity.Ambiente.Ambiente;
import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.directwebremoting.annotations.DataTransferObject;

@Data
@EqualsAndHashCode(callSuper = true)
@DataTransferObject(javascript = "Mesa")
public class Mesa extends AbstractEntity
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private Long numeroMesa;

	private Ambiente ambiente;

	private Integer quantidadeLugares;

	private Boolean situacao;

	//@Transient
	private Long ambienteId;

	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/

	public Mesa(){}

	/*-------------------------------------------------------------------
	 *							BEHAVIORS
	 *-------------------------------------------------------------------*/


}