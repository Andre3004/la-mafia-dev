package br.com.projeto.portal.domain.dao.estado;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.domain.dao.pais.PaisDAO;
import br.com.projeto.portal.domain.entity.Estado;
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
@Qualifier("estadoDao")
public class EstadoDAO
{
    @Autowired
    JdbcTemplate jdbcTemplate;

    private static ZoneId fusoHorarioDeSaoPaulo = ZoneId.of("America/Sao_Paulo");

    @Autowired
    PaisDAO paisDAO;

    
    public Estado findEstadoById(int id)
    {
        String sql = "SELECT * FROM estado WHERE codigo = ?";

        Estado estado = (Estado) jdbcTemplate.queryForObject(sql,
                new Object[] { id }, new BeanPropertyRowMapper(Estado.class));

        estado.setPais( paisDAO.findPaisById( estado.getCodigo() ) );
        return estado;
    }

    
    public void insertEstado( Estado estado )
    {
        jdbcTemplate.update(
                "INSERT INTO estado " +
                        "(estado  , " +
                        "uf, " +
                        "pais_id, " +
                        "situacao, " +
                        "created) VALUES (?, ?, ?, ?, ?)",
                estado.getEstado(),
                estado.getUf(),
                estado.getPais().getCodigo(),
                estado.getSituacao(),
                Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)) );
    }

    
    public void updateEstado( Estado estado )
    {
        jdbcTemplate.update("UPDATE estado " +
                        "SET " +
                        "estado= ?, " +
                        "uf= ?, " +
                        "pais_id= ?," +
                        "situacao= ?," +
                        "updated = ? " +
                        "WHERE codigo = ?",
                estado.getEstado(),
                estado.getUf(),
                estado.getPais().getCodigo(),
                estado.getSituacao(),
                Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)),
                estado.getCodigo());
    }

    
    public void deleteEstado(int id){
        jdbcTemplate.update("DELETE from estado WHERE codigo = ? ", id);
    }


    
    public Page<Estado> listEstadosByFilters( String estado, PageRequest pageable )
    {
        if(pageable == null) pageable = new PageRequest(0, 100);

        if(estado != null)
            estado = estado.replaceAll( "'", "''" );
            
        String rowCountSql = "SELECT count(1) AS row_count FROM estado " ;

        int total =
                jdbcTemplate.queryForObject(
                        rowCountSql,
                        new Object[]{}, (rs, rowNum) -> rs.getInt(1)
                );

        String selectAndFrom = "SELECT * " +
                "FROM estado ";

        String where =  "WHERE estado LIKE  '%" + estado + "%' ";


        String pagination = "LIMIT " + pageable.getPageSize() + " " +
                "OFFSET " + pageable.getOffset() + ";";

        String querySql = selectAndFrom + where + pagination;

        List<Estado> estados = jdbcTemplate.query(querySql,new RowMapper<Estado>(){
            public Estado mapRow( ResultSet rs, int row) throws SQLException {
                Estado e=new Estado();
                e.setCodigo(rs.getInt(1));
                e.setEstado(rs.getString(2));
                e.setUf(rs.getString(3));
                e.setSituacao( rs.getBoolean( "situacao" ) );
                e.setPais( paisDAO.findPaisById( rs.getInt( "pais_id" )  ));

                return e;
            }
        });
        return new PageImpl<>(estados, pageable, total);
    }

    public void updateSituacaoEstado( long id, boolean situacao )
    {
        jdbcTemplate.update("UPDATE estado SET situacao = ? WHERE codigo = ?", situacao, id);

    }
}
