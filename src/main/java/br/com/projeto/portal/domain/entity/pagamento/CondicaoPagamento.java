package br.com.projeto.portal.domain.entity.pagamento;

import java.util.ArrayList;
import java.util.List;

import br.com.projeto.portal.domain.entity.franquia.Franquia;
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

	private String condicaoPagamento;

	private Double juros;

	private Double multa;

	private Double desconto;

	private Boolean situacao;

	private Long franquiaId;

	//@Transient
	private Franquia franquia;

	//@Transient
	private List<CondicaoPagamentoParcela> parcelas = new ArrayList<>();

	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/

	public CondicaoPagamento(){}

	public CondicaoPagamento(Long codigo){
		this.codigo = codigo;
	}


	/*-------------------------------------------------------------------
	 *							BEHAVIORS
	 *-------------------------------------------------------------------*/
}
