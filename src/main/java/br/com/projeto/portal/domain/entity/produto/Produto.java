package br.com.projeto.portal.domain.entity.produto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import br.com.projeto.portal.domain.entity.Fornecedor;
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

	private Long codigo;

	private String produto;

	private String descricao;

	private Integer ano;

	private Boolean situacao;

	private String anexoUuid;

	private String nomeArquivo;

	private GrupoProduto grupoProduto;

	private String unidadeComercial;

	private String codigoBarras;

	//@Transient
	private FileTransfer anexo;

	//@Transient
	private Long grupoProdutoId;

	//@Transient
	private List<Estoque> estoques = new ArrayList<Estoque>(  );

	//@Transient
	private Estoque currentEstoque;

	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/

	public Produto(){}


	/*-------------------------------------------------------------------
	 *							BEHAVIORS
	 *-------------------------------------------------------------------*/

}
