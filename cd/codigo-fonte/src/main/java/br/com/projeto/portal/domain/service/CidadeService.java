
package br.com.projeto.portal.domain.service;

import java.time.LocalDateTime;

import br.com.projeto.portal.domain.dao.cidade.CidadeDAO;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.portal.domain.entity.Cidade;

/**
 * @author
 */
@Service
@RemoteProxy
@Transactional
public class CidadeService
{
    /*-------------------------------------------------------------------
     *				 		     ATTRIBUTES
     *-------------------------------------------------------------------*/

    @Autowired
    private CidadeDAO cidadeDao;


    /*-------------------------------------------------------------------
     *				 		     SERVICES
     *-------------------------------------------------------------------*/

    
    public Page<Cidade> listCidadesByFilters( String cidade, PageRequest pageable )
    {
        return this.cidadeDao.listCidadesByFilters( cidade, pageable );
    }

    
    public Cidade findCidadeById( int id )
    {
        Cidade cidade = this.cidadeDao.findCidadeById( id );

        return cidade;
    }

    
    public void insertCidade( Cidade cidade )
    {
        cidade.setSituacao( true );
        this.cidadeDao.insertCidade( cidade );
    }

    public void updateSituacaoCidade( long id, boolean situacao )
    {
        this.cidadeDao.updateSituacaoCidade( id, situacao );
    }

    
    public void updateCidade( Cidade cidade )
    {
        Cidade cidadeSaved = this.cidadeDao.findCidadeById( cidade.getCodigo() );

        cidade.setUpdated( LocalDateTime.now() );

        this.cidadeDao.updateCidade( cidade );
    }

    
    public void deleteCidade( int id )
    {
        Cidade cidade = this.findCidadeById( id );
        this.cidadeDao.deleteCidade( id );
    }

}
