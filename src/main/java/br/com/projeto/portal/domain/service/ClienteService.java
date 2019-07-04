
package br.com.projeto.portal.domain.service;

import java.time.LocalDateTime;
import br.com.projeto.portal.domain.repository.IClienteRepository;

import br.com.projeto.portal.domain.dao.cliente.ClienteDAO;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.portal.domain.entity.Cliente;

/**
 * @author
 */
@Service
@RemoteProxy
@Transactional
public class ClienteService implements IClienteRepository
{
    /*-------------------------------------------------------------------
     *				 		     ATTRIBUTES
     *-------------------------------------------------------------------*/

    @Autowired
    private ClienteDAO clienteDao;


    /*-------------------------------------------------------------------
     *				 		     SERVICES
     *-------------------------------------------------------------------*/

    @Override
    public Page<Cliente> listClientesByFilters( String cliente, PageRequest pageable )
    {
        return this.clienteDao.listClientesByFilters( cliente, pageable );
    }

    @Override
    public Cliente findClienteById( int id )
    {
        Cliente cliente = this.clienteDao.findClienteById( id );

        return cliente;
    }

    @Override
    public void insertCliente( Cliente cliente )
    {
        cliente.setSituacao( true );
        this.clienteDao.insertCliente( cliente );
    }

    public void updateSituacaoCliente( long id, boolean situacao )
    {
        this.clienteDao.updateSituacaoCliente( id, situacao );
    }

    @Override
    public void updateCliente( Cliente cliente )
    {


        Cliente clienteSaved = this.clienteDao.findClienteById( cliente.getIdCliente() );



        cliente.setUpdated( LocalDateTime.now() );

        this.clienteDao.updateCliente( cliente );
    }

    @Override
    public void deleteCliente( int id )
    {
        Cliente cliente = this.findClienteById( id );
        this.clienteDao.deleteCliente( id );
    }

}
