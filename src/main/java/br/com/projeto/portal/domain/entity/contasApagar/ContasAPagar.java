package br.com.projeto.portal.domain.entity.contasApagar;

import java.time.LocalDate;

import org.directwebremoting.annotations.DataTransferObject;

import br.com.projeto.portal.domain.entity.Fornecedor;
import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "ContasAPagar")
public class ContasAPagar extends AbstractEntity
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private String serie;

	private String modelo;

	private String numeroNota;

	private int fornecedorId;

	private int numero_parcela;

	private LocalDate dataVencimento;

	private double valorParcela;

	private Boolean situacao;

	///////Transient values///////
	private Fornecedor fornecedor;

	public ContasAPagar()
	{
	}
}
