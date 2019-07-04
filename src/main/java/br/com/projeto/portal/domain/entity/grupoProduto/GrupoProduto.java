package br.com.projeto.portal.domain.entity.grupoProduto;

import java.util.ArrayList;
import java.util.List;

import br.com.projeto.portal.domain.entity.GrupoProdutoFranquia;
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
	private Long codigo;

	private String grupoProduto;

	private Boolean exigeAno;

	private Boolean situacao;

	private String anexoUuid;

	private String nomeArquivo;

	//@Transient
	private FileTransfer anexo;

	//@Transient
	private List<GrupoProdutoFranquia> grupoProdutoFranquia = new ArrayList<>();
	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/

	public GrupoProduto(){}

	public GrupoProduto(Long id){
		this.codigo = id;
	}



	/*-------------------------------------------------------------------
	 *							BEHAVIORS
	 *-------------------------------------------------------------------*/

	@Override
	public String toString()
	{
		return "GrupoProduto{" +
				"id=" + codigo +
				", exigeAno=" + exigeAno +
				", situacao=" + situacao +
				", anexoUuid='" + anexoUuid + '\'' +
				", nomeArquivo='" + nomeArquivo + '\'' +
				", anexo=" + anexo +
				", created=" + created +
				", updated=" + updated +
				'}';
	}
}
