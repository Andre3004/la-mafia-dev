package br.com.projeto.portal.domain.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import br.com.projeto.portal.domain.dao.CondicaoPagamentoDAO;
import br.com.projeto.portal.domain.entity.pagamento.CondicaoPagamento;
import br.com.projeto.portal.domain.entity.pagamento.CondicaoPagamentoParcela;
import br.com.projeto.portal.domain.repository.ICondicaoPagamentoRepository;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RemoteProxy
@Transactional
public class CondicaoPagamentoService implements ICondicaoPagamentoRepository
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	@Autowired
	private CondicaoPagamentoDAO condicaoPagamentoDao;

	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/

	@Override
	public Page<CondicaoPagamento> listCondicaoPagamentosByFilters( Long codigo, PageRequest pageable )
	{
		return this.condicaoPagamentoDao.listCondicaoPagamentosByFilters(codigo, pageable );
	}

	@Override
	public CondicaoPagamento findCondicaoPagamentoById( long id )
	{
		CondicaoPagamento condicaoPagamento = this.condicaoPagamentoDao.findCondicaoPagamentoById( id );
		return condicaoPagamento;
	}

	@Override
	public Long insertCondicaoPagamento( CondicaoPagamento condicaoPagamento )
	{
		condicaoPagamento.setSituacao( true );

		Long condicaoPagamentoId = this.condicaoPagamentoDao.insertCondicaoPagamento( condicaoPagamento );

		if(condicaoPagamento.getParcelas() != null && condicaoPagamento.getParcelas().size() > 0)
		{
			for ( CondicaoPagamentoParcela condicaoPagamentoParcela : condicaoPagamento.getParcelas() )
			{
				condicaoPagamentoParcela.setCondicaoPagamento( new CondicaoPagamento(condicaoPagamentoId) );
				condicaoPagamentoDao.insertCondicaoPagamentoParcela( condicaoPagamentoParcela );
			}
		}

		return condicaoPagamentoId;
	}

	@Override
	public void updateCondicaoPagamento( CondicaoPagamento condicaoPagamento, List<Long> condicaoPagamentoParcelasIds )
	{
		if(condicaoPagamentoParcelasIds != null && condicaoPagamentoParcelasIds.size() > 0)
		{
			for ( Long condicaoPagamentoParcelaId : condicaoPagamentoParcelasIds )
			{
				condicaoPagamentoDao.deleteCondicaoPagamentoParcela(condicaoPagamentoParcelaId);
			}
		}

		if(condicaoPagamento.getParcelas() != null && condicaoPagamento.getParcelas().size() > 0)
		{
			List<CondicaoPagamentoParcela> toInsert = condicaoPagamento.getParcelas().stream().filter( condicaoPagamentoParcela -> condicaoPagamentoParcela.getCreated() == null ).collect( Collectors.toList() );
			List<CondicaoPagamentoParcela> toUpdate = condicaoPagamento.getParcelas().stream().filter( condicaoPagamentoParcela -> condicaoPagamentoParcela.getCreated() != null ).collect( Collectors.toList() );

			for ( CondicaoPagamentoParcela condicaoPagamentoParcela : toInsert )
			{
				condicaoPagamentoParcela.setCreated( LocalDateTime.now() );
				condicaoPagamentoParcela.setCondicaoPagamento( condicaoPagamento );
				condicaoPagamentoDao.insertCondicaoPagamentoParcela( condicaoPagamentoParcela );
			}

			for ( CondicaoPagamentoParcela condicaoPagamentoParcela : toUpdate )
			{
				condicaoPagamentoParcela.setUpdated( LocalDateTime.now() );
				condicaoPagamentoParcela.setCondicaoPagamento( condicaoPagamento );
				condicaoPagamentoDao.updateCondicaoPagamentoParcela( condicaoPagamentoParcela );
			}
		}

		condicaoPagamento.setUpdated( LocalDateTime.now() );

		this.condicaoPagamentoDao.updateCondicaoPagamento( condicaoPagamento, condicaoPagamentoParcelasIds );
	}

	@Override
	public void updateSituacaoCondicaoPagamento( long id, boolean situacao )
	{
		this.condicaoPagamentoDao.updateSituacaoCondicaoPagamento( id, situacao );
	}

	@Override
	public void deleteCondicaoPagamento( long id )
	{
		CondicaoPagamento condicaoPagamentoSaved = this.condicaoPagamentoDao.findCondicaoPagamentoById( id );

		if(condicaoPagamentoSaved.getParcelas() != null && condicaoPagamentoSaved.getParcelas().size() > 0)
		{
			for ( CondicaoPagamentoParcela condicaoPagamentoParcela : condicaoPagamentoSaved.getParcelas() )
			{
				condicaoPagamentoDao.deleteCondicaoPagamentoParcela(condicaoPagamentoParcela.getCodigo());
			}
		}

		//TODO validar se existe registros relacionados, se existe só desativa
		this.condicaoPagamentoDao.deleteCondicaoPagamento( id );
	}

}