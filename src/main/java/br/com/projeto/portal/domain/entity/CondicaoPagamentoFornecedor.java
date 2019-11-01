package br.com.projeto.portal.domain.entity;

import java.util.Arrays;

import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.domain.entity.pagamento.CondicaoPagamento;
import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;
import org.directwebremoting.annotations.DataTransferObject;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.directwebremoting.io.FileTransfer;

/**
 *
 */
@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "CondicaoPagamentoFornecedor")
public class CondicaoPagamentoFornecedor extends AbstractEntity
{

	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private Fornecedor fornecedor;

	private Franquia franquia;

	private CondicaoPagamento CondicaoPagamento;

	//Transiente values
	private Long fornecedorId;
	private Long franquiaId;
	private Long condicaoPagamentoId;


	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/

	public CondicaoPagamentoFornecedor(){}


	/*-------------------------------------------------------------------
	 *							BEHAVIORS
	 *-------------------------------------------------------------------*/


}
