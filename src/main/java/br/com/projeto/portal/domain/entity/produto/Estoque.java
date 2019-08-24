package br.com.projeto.portal.domain.entity.produto;

import org.directwebremoting.annotations.DataTransferObject;

import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "Estoque")
public class Estoque extends AbstractEntity
{
	private Franquia franquia;

	private Produto produto;

	private Double precoCusto = new Double(0);

	private Double precoVenda;

	//@Transient
	private Long franquiaId;

	//@Transient
	private Long produtoId;
}
