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
import br.com.projeto.portal.domain.repository.IEstadoRepository;
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
import br.com.projeto.portal.domain.repository.IEstadoRepository;

@Repository
@Qualifier("estadoDao")
public class EstadoDAO implements IEstadoRepository
{
    @Autowired
    JdbcTemplate jdbcTemplate;

    private static ZoneId fusoHorarioDeSaoPaulo = ZoneId.of("America/Sao_Paulo");

    @Autowired
    PaisDAO paisDAO;

    @Override
    public Estado findEstadoById(int id)
    {
        String sql = "SELECT * FROM estado WHERE idEstado = ?";

        Estado estado = (Estado) jdbcTemplate.queryForObject(sql,
                new Object[] { id }, new BeanPropertyRowMapper(Estado.class));

        estado.setPais( paisDAO.findPaisById( estado.getIdPais() ) );
        return estado;
    }

    @Override
    public void insertEstado( Estado estado )
    {
        jdbcTemplate.update(
                "INSERT INTO estado " +
                        "(estado  , " +
                        "uf, " +
                        "idPais, " +
                        "situacao, " +
                        "created) VALUES (?, ?, ?, ?, ?)",
                estado.getEstado(),
                estado.getUf(),
                estado.getPais().getIdPais(),
                estado.getSituacao(),
                Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)) );
    }

    @Override
    public void updateEstado( Estado estado )
    {
        jdbcTemplate.update("UPDATE estado " +
                        "SET " +
                        "estado= ?, " +
                        "uf= ?, " +
                        "idPais= ?," +
                        "situacao= ?," +
                        "updated = ? " +
                        "WHERE idEstado = ?",
                estado.getEstado(),
                estado.getUf(),
                estado.getPais().getIdPais(),
                estado.getSituacao(),
                Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)),
                estado.getIdEstado());
    }

    @Override
    public void deleteEstado(int id){
        jdbcTemplate.update("DELETE from estado WHERE idEstado = ? ", id);
    }


    @Override
    public Page<Estado> listEstadosByFilters( String estado, PageRequest pageable )
    {
        if(pageable == null) pageable = new PageRequest(0, 100);

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
                e.setIdEstado(rs.getInt(1));
                e.setEstado(rs.getString(2));
                e.setUf(rs.getString(3));
                e.setSituacao( rs.getBoolean( "situacao" ) );
                e.setPais( paisDAO.findPaisById( rs.getInt( "idpais" )  ));

                return e;
            }
        });
        return new PageImpl<>(estados, pageable, total);
    }

    public void updateSituacaoEstado( long id, boolean situacao )
    {
        jdbcTemplate.update("UPDATE estado SET situacao = ? WHERE idEstado = ?", situacao, id);

    }
}
