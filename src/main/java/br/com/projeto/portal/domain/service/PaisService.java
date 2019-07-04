
package br.com.projeto.portal.domain.service;

import java.time.LocalDateTime;
import br.com.projeto.portal.domain.repository.IPaisRepository;

import br.com.projeto.portal.domain.dao.pais.PaisDAO;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.portal.domain.entity.Pais;

/**
 * @author
 */
@Service
@RemoteProxy
@Transactional
public class PaisService implements IPaisRepository
{
    /*-------------------------------------------------------------------
     *				 		     ATTRIBUTES
     *-------------------------------------------------------------------*/

    @Autowired
    private PaisDAO paisDao;


    /*-------------------------------------------------------------------
     *				 		     SERVICES
     *-------------------------------------------------------------------*/

    @Override
    public Page<Pais> listPaisesByFilters( String pais, PageRequest pageable )
    {
        return this.paisDao.listPaisesByFilters( pais, pageable );
    }

    @Override
    public Pais findPaisById( int id )
    {
        Pais pais = this.paisDao.findPaisById( id );

        return pais;
    }

    @Override
    public void insertPais( Pais pais )
    {
        pais.setSituacao( true );
        this.paisDao.insertPais( pais );
    }

    public void updateSituacaoPais( long id, boolean situacao )
    {
        this.paisDao.updateSituacaoPais( id, situacao );
    }

    @Override
    public void updatePais( Pais pais )
    {


        Pais paisSaved = this.paisDao.findPaisById( pais.getIdPais() );



        pais.setUpdated( LocalDateTime.now() );

        this.paisDao.updatePais( pais );
    }

    @Override
    public void deletePais( int id )
    {
        Pais pais = this.findPaisById( id );
        this.paisDao.deletePais( id );
    }

}
