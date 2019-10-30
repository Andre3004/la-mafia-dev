package br.com.projeto.portal.domain.service;

import java.util.List;

import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.portal.application.security.ContextHolder;
import br.com.projeto.portal.domain.dao.venda.ContasAReceberDAO;
import br.com.projeto.portal.domain.entity.venda.ContasAReceber;

@Service
@RemoteProxy
@Transactional
public class ContasAReceberService
{

	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	@Autowired
	private ContasAReceberDAO contasAReceberDAO;

	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/

	public Page<ContasAReceber> listContasAReceberByFilters( String modelo, String serie, String numNota, Long fornecedorId, PageRequest pageable )
	{
		return contasAReceberDAO.listContasAReceberByFilters( modelo, serie, numNota, fornecedorId, pageable );
	}

	public List<ContasAReceber> findContasAReceber( String modelo, String serie, String numNota, Long fornecedorId )
	{
		return contasAReceberDAO.findContasAReceber( modelo, serie, numNota, fornecedorId );
	}

	public void insertContaAReceber( ContasAReceber contasAReceber )
	{
		contasAReceber.setFranquia( ContextHolder.getAuthenticatedUser().getFranquia() );
		contasAReceberDAO.insertContaAReceber( contasAReceber );
	}

	public void updateContaAReceber( ContasAReceber contasAReceber )
	{
		contasAReceberDAO.updateContaAReceber( contasAReceber );
	}

	public ContasAReceber findContaAReceber( String modelo, String serie, String numNota, Long fornecedorId, Integer numeroParcela ){
		return this.contasAReceberDAO.findContaAReceber( modelo, serie, numNota, fornecedorId, numeroParcela );
	}

	public void makeReceiveContaAReceber(ContasAReceber contasAReceber, Boolean situacaoLiquidez)
	{
		this.contasAReceberDAO.makePaymentContaAReceber(contasAReceber, situacaoLiquidez);
	}

	public void updateSituacaoContaAReceber(ContasAReceber contasAReceber, Boolean situacao)
	{
		this.contasAReceberDAO.updateSituacaoContaAReceber(contasAReceber, situacao);
	}

}
