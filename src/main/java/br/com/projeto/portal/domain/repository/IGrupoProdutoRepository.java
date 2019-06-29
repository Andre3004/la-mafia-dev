package br.com.projeto.portal.domain.repository;

import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.domain.entity.grupoProduto.GrupoProduto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IGrupoProdutoRepository
{
	public GrupoProduto findGrupoProdutoById( long id);

	public Page<GrupoProduto> listGrupoProdutosByFilters( String nome, Long franquiaId, PageRequest pageable );

	public void insertGrupoProduto( GrupoProduto grupoProduto );

	public void deleteGrupoProduto(long id);

	public void updateGrupoProduto( GrupoProduto grupoProduto );

	public void updateSituacaoGrupoProduto(long id, boolean situacao);
}
