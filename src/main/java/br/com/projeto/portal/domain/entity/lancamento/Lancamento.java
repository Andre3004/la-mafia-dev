package br.com.projeto.portal.domain.entity.lancamento;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Entity;

import br.com.eits.common.domain.entity.AbstractEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.directwebremoting.annotations.DataTransferObject;

@Data
@Entity
@EqualsAndHashCode(callSuper = true)
@DataTransferObject(javascript = "Lancamento")
public class Lancamento extends AbstractEntity implements Serializable
{
	/**
	 *
	 */
	private static final long serialVersionUID = 1L;

	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private BigDecimal valor;
	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/



	/*-------------------------------------------------------------------
	 *							BEHAVIORS
	 *-------------------------------------------------------------------*/



	/*-------------------------------------------------------------------
	 *						EXCEPTIONS
	 *-------------------------------------------------------------------*/



	/*-------------------------------------------------------------------
	 *						GETTERS AND SETTERS
	 *-------------------------------------------------------------------*/
}
