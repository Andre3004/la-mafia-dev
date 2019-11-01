
package br.com.projeto.portal.domain.service;

import java.time.LocalDateTime;

import br.com.projeto.portal.application.security.ContextHolder;
import br.com.projeto.portal.domain.dao.fornecedor.FornecedorDAO;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.portal.domain.entity.CondicaoPagamentoFornecedor;
import br.com.projeto.portal.domain.entity.Fornecedor;
import br.com.projeto.portal.domain.entity.usuario.PerfilUsuario;

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

    
    public Fornecedor findFornecedorById( Long id )
    {
        Fornecedor fornecedor = this.fornecedorDao.findFornecedorById( id );
        CondicaoPagamentoFornecedor condicaoPagamentoFornecedor = this.fornecedorDao.findCondicaoPagamentoFornecedorById( id, ContextHolder.getAuthenticatedUser().getFranquia().getCodigo() );
        fornecedor.setCondicaoPagamento( condicaoPagamentoFornecedor != null ? condicaoPagamentoFornecedor.getCondicaoPagamento() : null );

        return fornecedor;
    }


    public void insertFornecedor( Fornecedor fornecedor )
    {
        fornecedor.setSituacao( true );
        Long fornecedorId = this.fornecedorDao.insertFornecedor( fornecedor );
        fornecedor.setCodigo( fornecedorId );

        if(ContextHolder.getAuthenticatedUser().getPerfilUsuario().equals( PerfilUsuario.FRANQUIADO ))
            this.fornecedorDao.insertCondicaoPagamentoFornecedor( fornecedor );
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

        if(ContextHolder.getAuthenticatedUser().getPerfilUsuario().equals( PerfilUsuario.FRANQUIADO ))
        {
            CondicaoPagamentoFornecedor condicaoPagamentoFornecedor = this.fornecedorDao.findCondicaoPagamentoFornecedorById( fornecedor.getCodigo(), ContextHolder.getAuthenticatedUser().getFranquia().getCodigo() );
            if(condicaoPagamentoFornecedor != null)
                this.fornecedorDao.updateCondicaoPagamentoFornecedor( fornecedor );
            else
                this.fornecedorDao.insertCondicaoPagamentoFornecedor( fornecedor );
        }
    }

    
    public void deleteFornecedor( Long id )
    {
        Fornecedor fornecedor = this.findFornecedorById( id );
        this.fornecedorDao.deleteFornecedor( id );
    }

}
