package br.com.projeto.portal.domain.repository;

import java.util.List;

import br.com.projeto.portal.domain.entity.compra.Compra;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface ICompraRepository
{
	public Compra findCompraById(String modelo, String serie, String numNota, Long fornecedorId);

	public Page<Compra> listComprasByFilters( String modelo, String serie, String numNota, Long fornecedorId, PageRequest pageable );

	public void insertCompra( Compra compra);

	public void updateSituacaoCompra(String modelo, String serie, String numNota, Long fornecedorId, boolean situacao );

}