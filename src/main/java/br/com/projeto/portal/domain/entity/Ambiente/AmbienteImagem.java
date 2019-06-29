package br.com.projeto.portal.domain.entity.Ambiente;

import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.directwebremoting.annotations.DataTransferObject;
import org.directwebremoting.io.FileTransfer;

@Data
@EqualsAndHashCode(callSuper = true)
@DataTransferObject(javascript = "AmbienteImagem")
public class AmbienteImagem extends AbstractEntity
{

	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private Long id;

	private Ambiente ambiente;

	private String anexoUuid;

	private String nomeArquivo;

	//@Transient
	private FileTransfer anexo;

	//@Transient
	private Long ambienteId;

	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/

	public AmbienteImagem(){}

	/*-------------------------------------------------------------------
	 *							BEHAVIORS
	 *-------------------------------------------------------------------*/
}
