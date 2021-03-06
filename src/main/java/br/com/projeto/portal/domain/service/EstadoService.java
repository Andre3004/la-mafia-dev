
package br.com.projeto.portal.domain.service;

import java.time.LocalDateTime;

import br.com.projeto.portal.domain.dao.estado.EstadoDAO;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.portal.domain.entity.Estado;

/**
 * @author
 */
@Service
@RemoteProxy
@Transactional
public class EstadoService
{
    /*-------------------------------------------------------------------
     *				 		     ATTRIBUTES
     *-------------------------------------------------------------------*/

    @Autowired
    private EstadoDAO estadoDao;


    /*-------------------------------------------------------------------
     *				 		     SERVICES
     *-------------------------------------------------------------------*/

    
    public Page<Estado> listEstadosByFilters( String estado, PageRequest pageable )
    {
        return this.estadoDao.listEstadosByFilters( estado, pageable );
    }

    
    public Estado findEstadoById( int id )
    {
        Estado estado = this.estadoDao.findEstadoById( id );

        return estado;
    }

    
    public void insertEstado( Estado estado )
    {
        estado.setSituacao( true );
        this.estadoDao.insertEstado( estado );
    }

    public void updateSituacaoEstado( long id, boolean situacao )
    {
        this.estadoDao.updateSituacaoEstado( id, situacao );
    }

    
    public void updateEstado( Estado estado )
    {
        Estado estadoSaved = this.estadoDao.findEstadoById( estado.getCodigo() );

        estado.setUpdated( LocalDateTime.now() );

        this.estadoDao.updateEstado( estado );
    }

    
    public void deleteEstado( int id )
    {
        Estado estado = this.findEstadoById( id );
        this.estadoDao.deleteEstado( id );
    }

}
