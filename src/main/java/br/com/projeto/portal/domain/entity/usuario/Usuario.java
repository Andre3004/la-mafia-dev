package br.com.projeto.portal.domain.entity.usuario;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Arrays;

import br.com.projeto.portal.domain.entity.franquia.Franquia;
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
@DataTransferObject(javascript = "Usuario")
public class Usuario extends AbstractEntity
{

	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private Long codigo;

	private String usuario;

	private String email;

	private String senha;

	private String telefone;

	private String cpf;

	private PerfilUsuario perfilUsuario;

	private Boolean situacao;

	private String anexoUuid;

	private String nomeArquivo;

	private Franquia franquia;

	//@Transient
	private FileTransfer anexo;

	private Long franquiaId;

	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/

	public Usuario(){}
	

	/*-------------------------------------------------------------------
	 *							BEHAVIORS
	 *-------------------------------------------------------------------*/

}
