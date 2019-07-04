package br.com.projeto.portal.domain.repository;


import br.com.projeto.portal.domain.entity.Estado;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IEstadoRepository
{
    public Estado findEstadoById(int id);

    public Page<Estado> listEstadosByFilters( String estado, PageRequest pageable );

    public void insertEstado( Estado estado );

    public void deleteEstado(int id);

    public void updateEstado( Estado estado );

}
