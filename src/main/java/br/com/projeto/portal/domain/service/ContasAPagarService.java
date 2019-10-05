package br.com.projeto.portal.domain.service;

import java.util.List;

import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.portal.domain.dao.ContasAPagarDAO;
import br.com.projeto.portal.domain.entity.contasApagar.ContasAPagar;

@Service
@RemoteProxy
@Transactional
public class ContasAPagarService
{

	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	@Autowired
	private ContasAPagarDAO contasAPagarDAO;

	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/

	public Page<ContasAPagar> listContasAPagarByFilters( String modelo, String serie, String numNota, Long fornecedorId, PageRequest pageable )
	{
		return contasAPagarDAO.listContasAPagarByFilters( modelo, serie, numNota, fornecedorId, pageable );
	}

	public List<ContasAPagar> findContasAPagar( String modelo, String serie, String numNota, Long fornecedorId )
	{
		return contasAPagarDAO.findContasAPagar( modelo, serie, numNota, fornecedorId );
	}

	public void insertContaAPagar( ContasAPagar contasAPagar )
	{
		contasAPagarDAO.insertContaAPagar( contasAPagar );
	}

}
