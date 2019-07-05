package br.com.projeto.portal.domain.repository;

import br.com.projeto.portal.domain.entity.pagamento.FormaPagamento;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IFormaPagamentoRepository {

	public FormaPagamento findFormaPagamentoById( Long codigo);

	public Page<FormaPagamento> listFormaPagamentoByFilters( String formaPagamento, PageRequest pageable );

	public void insertFormaPagamento( FormaPagamento formaPagamento );

	public void deleteFormaPagamento( Long codigo);

	public void updateFormaPagamento( FormaPagamento formaPagamento );

}
