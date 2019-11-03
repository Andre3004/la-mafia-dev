
package br.com.projeto.portal.domain.service;

import java.time.LocalDateTime;

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
public class ClienteService
{
    /*-------------------------------------------------------------------
     *				 		     ATTRIBUTES
     *-------------------------------------------------------------------*/

    @Autowired
    private ClienteDAO clienteDao;


    /*-------------------------------------------------------------------
     *				 		     SERVICES
     *-------------------------------------------------------------------*/

    
    public Page<Cliente> listClientesByFilters( String cliente, PageRequest pageable )
    {
        return this.clienteDao.listClientesByFilters( cliente, pageable );
    }

    
    public Cliente findClienteById( Long id )
    {
        Cliente cliente = this.clienteDao.findClienteById( id );

        return cliente;
    }

    
    public void insertCliente( Cliente cliente )
    {
        cliente.setSituacao( true );
        this.clienteDao.insertCliente( cliente );
    }

    public void updateSituacaoCliente( long id, boolean situacao )
    {
        this.clienteDao.updateSituacaoCliente( id, situacao );
    }

    
    public void updateCliente( Cliente cliente )
    {
        this.clienteDao.updateCliente( cliente );
    }

    
    public void deleteCliente( Long id )
    {
        Cliente cliente = this.findClienteById( id );
        this.clienteDao.deleteCliente( id );
    }

}
