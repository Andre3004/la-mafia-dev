package br.com.projeto.portal.domain.repository;


import br.com.projeto.portal.domain.entity.Pais;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IPaisRepository
{
    public Pais findPaisById(int id);

    public Page<Pais> listPaisesByFilters( String pais, PageRequest pageable );

    public void insertPais( Pais pais );

    public void deletePais(int id);

    public void updatePais( Pais pais );

}
