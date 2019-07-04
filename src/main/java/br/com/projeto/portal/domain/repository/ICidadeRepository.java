package br.com.projeto.portal.domain.repository;


import br.com.projeto.portal.domain.entity.Cidade;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface ICidadeRepository
{
    public Cidade findCidadeById(int id);

    public Page<Cidade> listCidadesByFilters( String cidade, PageRequest pageable );

    public void insertCidade( Cidade cidade );

    public void deleteCidade(int id);

    public void updateCidade( Cidade cidade );

}
