package br.com.projeto.portal.domain.service;

import br.com.projeto.portal.domain.dao.FormaPagamentoDAO;
import br.com.projeto.portal.domain.entity.pagamento.FormaPagamento;
import br.com.projeto.portal.domain.repository.IFormaPagamentoRepository;
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
public class FormaPagamentoService implements IFormaPagamentoRepository {

	@Autowired
	private FormaPagamentoDAO formaPagamentoDAO;


	@Override
	public Page<FormaPagamento> listFormaPagamentoByFilters( String formaPagamento, PageRequest pageable )
	{
		return this.formaPagamentoDAO.listFormaPagamentoByFilters( formaPagamento, pageable );
	}

	@Override
	public FormaPagamento findFormaPagamentoById( Long codigo )
	{
		FormaPagamento formaPagamento = this.formaPagamentoDAO.findFormaPagamentoById( codigo );
		return formaPagamento;
	}

	@Override
	public void insertFormaPagamento( FormaPagamento formaPagamento )
	{
		formaPagamento.setSituacao( true );
		this.formaPagamentoDAO.insertFormaPagamento( formaPagamento );
	}

	@Override
	public void updateFormaPagamento( FormaPagamento FormaPagamento )
	{
		FormaPagamento.setUpdated( LocalDateTime.now());
		this.formaPagamentoDAO.updateFormaPagamento( FormaPagamento );
	}

	public void updateSituacaoFormaPagamento( long id, boolean situacao )
	{
		this.formaPagamentoDAO.updateSituacaoFormaPagamento( id, situacao );
	}


	@Override
	public void deleteFormaPagamento( Long codigo)
	{
		FormaPagamento formaPagamento = this.findFormaPagamentoById( codigo );
		this.formaPagamentoDAO.deleteFormaPagamento( formaPagamento.getCodigo() );
	}
}
