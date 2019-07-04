package br.com.projeto.portal.domain.repository;


import br.com.projeto.portal.domain.entity.Cliente;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IClienteRepository
{
    public Cliente findClienteById(int id);

    public Page<Cliente> listClientesByFilters( String cliente, PageRequest pageable );

    public void insertCliente( Cliente cliente );

    public void deleteCliente(int id);

    public void updateCliente( Cliente cliente );

}
