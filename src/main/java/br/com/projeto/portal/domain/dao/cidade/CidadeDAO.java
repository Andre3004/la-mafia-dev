package br.com.projeto.portal.domain.dao.cidade;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.domain.dao.estado.EstadoDAO;
import br.com.projeto.portal.domain.entity.Cidade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import java.time.ZoneId;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
@Qualifier("cidadeDao")
public class CidadeDAO 
{
    @Autowired
    JdbcTemplate jdbcTemplate;

    private static ZoneId fusoHorarioDeSaoPaulo = ZoneId.of("America/Sao_Paulo");

    @Autowired
    EstadoDAO estadoDAO;

    
    public Cidade findCidadeById(int id)
    {
        String sql = "SELECT * FROM cidade WHERE codigo = ?";

        Cidade cidade = (Cidade) jdbcTemplate.queryForObject(sql,
                new Object[] { id }, new BeanPropertyRowMapper(Cidade.class));

        cidade.setEstado( estadoDAO.findEstadoById( cidade.getEstadoId() ) );

        return cidade;
    }

    
    public void insertCidade( Cidade cidade )
    {
        jdbcTemplate.update(
                "INSERT INTO cidade " +
                        "(cidade  , " +
                        "ddd, " +
                        "estado_id, " +
                        "situacao, " +
                        "created) VALUES (?, ?, ?, ?, ?)",
                cidade.getCidade(),
                cidade.getDdd(),
                cidade.getEstado().getCodigo(),
                cidade.getSituacao(),
                Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)) );
    }

    
    public void updateCidade( Cidade cidade )
    {
        jdbcTemplate.update("UPDATE cidade " +
                        "SET " +
                        "cidade= ?, " +
                        "ddd= ?, " +
                        "estado_id= ?," +
                        "updated = ? " +
                        "WHERE codigo = ?",
                cidade.getCidade(),
                cidade.getDdd(),
                cidade.getEstado().getCodigo(),
                Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)),
                cidade.getCodigo());
    }

    
    public void deleteCidade(int id){
        jdbcTemplate.update("DELETE from cidade WHERE codigo = ? ", id);
    }


    
    public Page<Cidade> listCidadesByFilters( String cidade, PageRequest pageable )
    {
        if(pageable == null) pageable = new PageRequest(0, 100);

        if(cidade != null)
            cidade = cidade.replaceAll( "'", "''" );

        String rowCountSql = "SELECT count(1) AS row_count FROM cidade " ;

        int total =
                jdbcTemplate.queryForObject(
                        rowCountSql,
                        new Object[]{}, (rs, rowNum) -> rs.getInt(1)
                );

        String selectAndFrom = "SELECT * " +
                "FROM cidade ";

        String where =  "WHERE cidade LIKE  '%" + cidade + "%' ";


        String pagination = "LIMIT " + pageable.getPageSize() + " " +
                "OFFSET " + pageable.getOffset() + ";";

        String querySql = selectAndFrom + where + pagination;

        List<Cidade> cidades = jdbcTemplate.query(querySql,new RowMapper<Cidade>(){
            public Cidade mapRow( ResultSet rs, int row) throws SQLException {
                Cidade e=new Cidade();
                e.setCodigo(rs.getInt(1));
                e.setCidade(rs.getString(2));
                e.setDdd(rs.getString(3));
                e.setSituacao( rs.getBoolean( "situacao" ) );
                e.setEstado( estadoDAO.findEstadoById( rs.getInt( "estado_id" )  ));
                return e;
            }
        });
        return new PageImpl<>(cidades, pageable, total);
    }

    public void updateSituacaoCidade( long id, boolean situacao )
    {
        jdbcTemplate.update("UPDATE cidade SET situacao = ? WHERE codigo = ?", situacao, id);
    }
}
