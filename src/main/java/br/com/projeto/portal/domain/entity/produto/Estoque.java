package br.com.projeto.portal.domain.entity.produto;

import java.io.Serializable;
import java.time.LocalDateTime;

import org.directwebremoting.annotations.DataTransferObject;

import br.com.projeto.portal.domain.entity.Fornecedor;
import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "Estoque")
public class Estoque implements Serializable
{
	private static final long serialVersionUID = 1L;

	private Franquia franquia;

	private Produto produto;

	private Double precoCusto = new Double(0);

	private Double precoVenda = new Double(0);

	private Integer saldo;

	private Fornecedor fornecedor;

	private LocalDateTime dataUltimaCompra;

	//@Transient
	private Long franquiaId;

	//@Transient
	private Long produtoId;


	//@Transient
	private Integer fornecedorId;

	protected LocalDateTime created;

	protected LocalDateTime updated;
}
