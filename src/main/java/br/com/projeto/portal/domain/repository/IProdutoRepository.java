package br.com.projeto.portal.domain.repository;

import br.com.projeto.portal.domain.entity.produto.Produto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IProdutoRepository
{
	public Produto findProdutoById(long id);

	public Page<Produto> listProdutosByFilters( String nome, String codigo, PageRequest pageable );

	public void insertProduto( Produto produto );

	public void deleteProduto(long id);

	public void updateProduto( Produto produto );

	public void updateSituacaoProduto(long id, boolean situacao);

}
