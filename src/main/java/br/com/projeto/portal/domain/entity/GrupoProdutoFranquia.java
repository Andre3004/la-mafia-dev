package br.com.projeto.portal.domain.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.domain.entity.grupoProduto.GrupoProduto;
import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.directwebremoting.annotations.DataTransferObject;

@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "GrupoProdutoFranquia")
public class GrupoProdutoFranquia  implements Serializable
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private GrupoProduto grupoProduto;

	private Franquia franquia;

	//@Transient
	private Long franquiaId;

	//@Transient
	private Long grupoProdutoId;

	private static final long serialVersionUID = 1L;

	protected LocalDateTime created ;
	protected LocalDateTime updated;

	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/

	public GrupoProdutoFranquia(){}
}
