package br.com.projeto.portal.domain.repository;


import br.com.projeto.portal.domain.entity.Fornecedor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IFornecedorRepository
{
    public Fornecedor findFornecedorById(int id);

    public Page<Fornecedor> listFornecedorsByFilters( String razaoSocial, PageRequest pageable );

    public void insertFornecedor( Fornecedor fornecedor );

    public void deleteFornecedor(int id);

    public void updateFornecedor( Fornecedor fornecedor );

}
