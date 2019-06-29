package br.com.projeto.portal.domain.entity.grupoProduto;

import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.directwebremoting.annotations.DataTransferObject;
import org.directwebremoting.io.FileTransfer;

@Data
@EqualsAndHashCode(callSuper = true)
@DataTransferObject(javascript = "GrupoProduto")
public class GrupoProduto extends AbstractEntity
{
	private Long id;

	private String nome;

	private Franquia franquia;

	private Boolean exigeAno;

	private String codigo;

	private Boolean situacao;

	private String anexoUuid;

	private String nomeArquivo;

	//@Transient
	private Long franquiaId;

	//@Transient
	private FileTransfer anexo;

	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/

	public GrupoProduto(){}


	/*-------------------------------------------------------------------
	 *							BEHAVIORS
	 *-------------------------------------------------------------------*/

	@Override
	public String toString()
	{
		return "GrupoProduto{" +
				"id=" + id +
				", nome='" + nome + '\'' +
				", franquia=" + franquia +
				", exigeAno=" + exigeAno +
				", codigo='" + codigo + '\'' +
				", situacao=" + situacao +
				", anexoUuid='" + anexoUuid + '\'' +
				", nomeArquivo='" + nomeArquivo + '\'' +
				", anexo=" + anexo +
				", created=" + created +
				", updated=" + updated +
				'}';
	}
}
