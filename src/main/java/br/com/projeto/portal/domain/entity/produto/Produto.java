package br.com.projeto.portal.domain.entity.produto;

import br.com.projeto.portal.domain.entity.grupoProduto.GrupoProduto;
import br.com.projeto.portal.domain.entity.usuario.PerfilUsuario;
import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.directwebremoting.annotations.DataTransferObject;
import org.directwebremoting.io.FileTransfer;

/**
 *
 */
@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "Produto")
public class Produto extends AbstractEntity
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private Long id;

	private String codigo;

	private String nome;

	private String descricao;

	private Integer ano;

	private Boolean situacao;

	private String anexoUuid;

	private String nomeArquivo;

	private GrupoProduto grupoProduto;

	private Integer estoque;

	private Double precoCusto;

	private Double precoVenda;

	//@Transient
	private FileTransfer anexo;

	//@Transient
	private Long grupoProdutoId;

	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/

	public Produto(){}


	/*-------------------------------------------------------------------
	 *							BEHAVIORS
	 *-------------------------------------------------------------------*/

	@Override
	public String toString()
	{
		return "Produto{" +
				"id=" + id +
				", nome='" + nome + '\'' +
				", descricao='" + descricao + '\'' +
				", codigo='" + codigo + '\'' +
				", ano=" + ano +
				", situacao=" + situacao +
				", anexoUuid='" + anexoUuid + '\'' +
				", nomeArquivo='" + nomeArquivo + '\'' +
				", anexo=" + anexo +
				", created=" + created +
				", updated=" + updated +
				'}';
	}
}
