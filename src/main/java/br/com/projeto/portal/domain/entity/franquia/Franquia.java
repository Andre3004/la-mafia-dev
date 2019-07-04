package br.com.projeto.portal.domain.entity.franquia;

import java.util.Arrays;

import br.com.projeto.portal.domain.entity.Cidade;
import br.com.projeto.portal.domain.entity.Estado;
import br.com.projeto.portal.domain.entity.Pais;
import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.directwebremoting.annotations.DataTransferObject;
import org.directwebremoting.io.FileTransfer;

@Data
@EqualsAndHashCode(callSuper = true)
@DataTransferObject(javascript = "Franquia")
public class Franquia extends AbstractEntity
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private Long codigo;

	private String franquia;

	private String cnpj;

	private String anexoUuid;

	private String nomeArquivo;

	private Boolean situacao;

	private String endereco;

	private Integer numero;

	private String complemento;

	private String bairro;

	private String cep;

	private Cidade cidade;

	private Estado estado;

	private Pais pais;

	private String telefone;

	//@Transient
	private FileTransfer anexo;

	//@Transient
	private int cidadeId;

	//@Transient
	private int estadoId;

	//@Transient
	private int paisId;
	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/

	public Franquia(){}


	/*-------------------------------------------------------------------
	 *							BEHAVIORS
	 *-------------------------------------------------------------------*/

}
