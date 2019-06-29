package br.com.projeto.portal.domain.entity.franquia;

import java.util.Arrays;

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

	private Long id;

	private String codigo;

	private String nome;

	private String cnpj;

	private String endereco;

	private String cidade;

	private String anexoUuid;

	private String nomeArquivo;

	private Boolean situacao;

	//@Transient
	private FileTransfer anexo;

	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/

	public Franquia(){}


	/*-------------------------------------------------------------------
	 *							BEHAVIORS
	 *-------------------------------------------------------------------*/

	@Override
	public String toString()
	{
		return "Franquia{" +
				"id=" + id +
				", nome='" + nome + '\'' +
				", cnpj='" + cnpj + '\'' +
				", endereco='" + endereco + '\'' +
				", cidade='" + cidade + '\'' +
				", anexoUuid='" + anexoUuid + '\'' +
				", nomeArquivo='" + nomeArquivo + '\'' +
				", anexo=" + anexo +
				", created=" + created +
				", updated=" + updated +
				'}';
	}
}
