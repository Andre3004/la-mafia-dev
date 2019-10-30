package br.com.projeto.portal.domain.service;

import br.com.projeto.portal.application.security.ContextHolder;
import br.com.projeto.portal.domain.dao.FormaPagamentoDAO;
import br.com.projeto.portal.domain.entity.pagamento.FormaPagamento;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

/**
 * @author
 */
@Service
@RemoteProxy
@Transactional
public class FormaPagamentoService{

	@Autowired
	private FormaPagamentoDAO formaPagamentoDAO;
	
	public Page<FormaPagamento> listFormaPagamentoByFilters( String formaPagamento, PageRequest pageable )
	{
		return this.formaPagamentoDAO.listFormaPagamentoByFilters( formaPagamento, pageable );
	}

	
	public FormaPagamento findFormaPagamentoById( Long codigo )
	{
		FormaPagamento formaPagamento = this.formaPagamentoDAO.findFormaPagamentoById( codigo );
		return formaPagamento;
	}

	
	public void insertFormaPagamento( FormaPagamento formaPagamento )
	{
		formaPagamento.setSituacao( true );
		formaPagamento.setFranquia( ContextHolder.getAuthenticatedUser().getFranquia() );

		this.formaPagamentoDAO.insertFormaPagamento( formaPagamento );
	}

	
	public void updateFormaPagamento( FormaPagamento FormaPagamento )
	{
		FormaPagamento.setUpdated( LocalDateTime.now());
		this.formaPagamentoDAO.updateFormaPagamento( FormaPagamento );
	}

	public void updateSituacaoFormaPagamento( long id, boolean situacao )
	{
		this.formaPagamentoDAO.updateSituacaoFormaPagamento( id, situacao );
	}


	
	public void deleteFormaPagamento( Long codigo)
	{
		FormaPagamento formaPagamento = this.findFormaPagamentoById( codigo );
		this.formaPagamentoDAO.deleteFormaPagamento( formaPagamento.getCodigo() );
	}
}
