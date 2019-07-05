package br.com.projeto.portal.domain.repository;

import java.util.List;

import br.com.projeto.portal.domain.entity.pagamento.CondicaoPagamento;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface ICondicaoPagamentoRepository
{
	public CondicaoPagamento findCondicaoPagamentoById(long id);

	public Page<CondicaoPagamento> listCondicaoPagamentosByFilters(  Long codigo, PageRequest pageable );

	public Long insertCondicaoPagamento( CondicaoPagamento condicaoPagamento);

	public void deleteCondicaoPagamento(long id);

	public void updateCondicaoPagamento( CondicaoPagamento condicaoPagamento, List<Long> parcelasExcluidas  );

	public void updateSituacaoCondicaoPagamento(long id, boolean situacao);

}
