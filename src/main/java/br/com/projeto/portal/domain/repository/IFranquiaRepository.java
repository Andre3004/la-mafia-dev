package br.com.projeto.portal.domain.repository;

import java.util.List;

import br.com.projeto.portal.domain.entity.franquia.Franquia;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IFranquiaRepository
{
	public Franquia findFranquiaById( long id);

	public Page<Franquia> listFranquiasByFilters( String nome, String cnpj, PageRequest pageable );

	public void insertFranquia( Franquia franquia );

	public void deleteFranquia(long id);

	public void updateFranquia( Franquia franquia );

	public void updateSituacaoFranquia(long id, boolean situacao);
}
