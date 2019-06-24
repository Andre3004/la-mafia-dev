package br.com.projeto.portal.domain.entity.usuario;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Arrays;

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

	private Long id;

	private String nome;

	private String email;

	private String senha;

	private String telefone;

	private String cpf;

	private PerfilUsuario perfilUsuario;

	private Boolean situacao;

	private String anexoUuid;

	private String nomeArquivo;

	//@Transient
	private byte[] anexoByte;

	//@Transient
	private FileTransfer anexo;

	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/

	public Usuario(){}
	

	/*-------------------------------------------------------------------
	 *							BEHAVIORS
	 *-------------------------------------------------------------------*/

	@Override
	public String toString()
	{
		return "Usuario{" +
				"id=" + id +
				", nome='" + nome + '\'' +
				", email='" + email + '\'' +
				", senha='" + senha + '\'' +
				", telefone='" + telefone + '\'' +
				", cpf='" + cpf + '\'' +
				", perfilUsuario=" + perfilUsuario +
				", situacao=" + situacao +
				", anexoUuid='" + anexoUuid + '\'' +
				", nomeArquivo='" + nomeArquivo + '\'' +
				", anexoByte=" + Arrays.toString( anexoByte ) +
				", anexo=" + anexo +
				", created=" + created +
				", updated=" + updated +
				'}';
	}
}
