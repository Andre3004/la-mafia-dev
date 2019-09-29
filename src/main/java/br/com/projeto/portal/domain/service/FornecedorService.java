
package br.com.projeto.portal.domain.service;

import java.time.LocalDateTime;

import br.com.projeto.portal.domain.dao.fornecedor.FornecedorDAO;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.portal.domain.entity.Fornecedor;

/**
 * @author
 */
@Service
@RemoteProxy
@Transactional
public class FornecedorService
{
    /*-------------------------------------------------------------------
     *				 		     ATTRIBUTES
     *-------------------------------------------------------------------*/

    @Autowired
    private FornecedorDAO fornecedorDao;


    /*-------------------------------------------------------------------
     *				 		     SERVICES
     *-------------------------------------------------------------------*/

    
    public Page<Fornecedor> listFornecedorsByFilters( String razaoSocial, PageRequest pageable )
    {
        return this.fornecedorDao.listFornecedorsByFilters( razaoSocial, pageable );
    }

    
    public Fornecedor findFornecedorById( int id )
    {
        Fornecedor fornecedor = this.fornecedorDao.findFornecedorById( id );

        return fornecedor;
    }





    
    public void insertFornecedor( Fornecedor fornecedor )
    {
        fornecedor.setSituacao( true );
        this.fornecedorDao.insertFornecedor( fornecedor );
    }

    public void updateSituacaoFornecedor( long id, boolean situacao )
    {
        this.fornecedorDao.updateSituacaoFornecedor( id, situacao );
    }


    
    public void updateFornecedor( Fornecedor fornecedor )
    {


        Fornecedor fornecedorSaved = this.fornecedorDao.findFornecedorById( fornecedor.getCodigo() );


        fornecedor.setUpdated( LocalDateTime.now() );

        this.fornecedorDao.updateFornecedor( fornecedor );
    }

    
    public void deleteFornecedor( int id )
    {
        Fornecedor fornecedor = this.findFornecedorById( id );
        this.fornecedorDao.deleteFornecedor( id );
    }

}
