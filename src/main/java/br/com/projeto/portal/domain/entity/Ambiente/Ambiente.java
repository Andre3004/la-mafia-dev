package br.com.projeto.portal.domain.entity.Ambiente;

import java.util.ArrayList;
import java.util.List;

import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.domain.entity.mesa.Mesa;
import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.directwebremoting.annotations.DataTransferObject;
import org.directwebremoting.io.FileTransfer;

@Data
@EqualsAndHashCode(callSuper = true)
@DataTransferObject(javascript = "Ambiente")
public class Ambiente extends AbstractEntity
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private Long codigo;

	private Franquia franquia;

	private String ambiente;

	private String descricao;

	private Integer capacidadeMesas;

	private Boolean situacao;

	//@Transient
	private Long franquiaId;

	//@Transient
	private List<AmbienteImagem> ambienteImagems = new ArrayList<>();

	//@Transient
	private List<Mesa> mesas = new ArrayList<>();

	//@Transient
	private Integer quantidadeMesas;


	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/

	 public Ambiente(){}

	 public Ambiente(Long codigo)
	 {
	 	this.codigo = codigo;
	 }

	/*-------------------------------------------------------------------
	 *							BEHAVIORS
	 *-------------------------------------------------------------------*/
	public Integer getQuantidadeMesas()
	{
		return this.mesas.size();
	}



}
