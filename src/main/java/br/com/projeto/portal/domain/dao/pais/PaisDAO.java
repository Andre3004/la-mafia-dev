package br.com.projeto.portal.domain.dao.pais;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.domain.entity.Pais;
import br.com.projeto.portal.domain.repository.IPaisRepository;
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
import br.com.projeto.portal.domain.repository.IPaisRepository;

@Repository
@Qualifier("paisDao")
public class PaisDAO implements IPaisRepository
{
    @Autowired
    JdbcTemplate jdbcTemplate;

    private static ZoneId fusoHorarioDeSaoPaulo = ZoneId.of("America/Sao_Paulo");

    @Override
    public Pais findPaisById(int id)
    {
        String sql = "SELECT * FROM pais WHERE idPais = ?";

        Pais pais = (Pais) jdbcTemplate.queryForObject(sql,
                new Object[] { id }, new BeanPropertyRowMapper(Pais.class));

        return pais;
    }

    @Override
    public void insertPais( Pais pais )
    {
        jdbcTemplate.update(
                "INSERT INTO pais " +
                        "(pais  , " +
                        "sigla, " +
                        "ddi, " +
                        "situacao, " +
                        "created) VALUES (?, ?, ?, ?, ?)",
                pais.getPais(),
                pais.getSigla(),
                pais.getDdi(),
                pais.getSituacao(),
                Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)) );
    }

    @Override
    public void updatePais( Pais pais )
    {
        jdbcTemplate.update("UPDATE pais " +
                        "SET " +
                        "pais= ?, " +
                        "sigla= ?, " +
                        "ddi= ?," +
                        "updated = ? " +
                        "WHERE idPais = ?",
                pais.getPais(),
                pais.getSigla(),
                pais.getDdi(),
                Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)),
                pais.getIdPais());
    }

    @Override
    public void deletePais(int id){
        jdbcTemplate.update("DELETE from pais WHERE idPais = ? ", id);
    }


    @Override
    public Page<Pais> listPaisesByFilters( String pais, PageRequest pageable )
    {
        if(pageable == null) pageable = new PageRequest(0, 10);

        String rowCountSql = "SELECT count(1) AS row_count FROM pais " ;

        int total =
                jdbcTemplate.queryForObject(
                        rowCountSql,
                        new Object[]{}, (rs, rowNum) -> rs.getInt(1)
                );

        String selectAndFrom = "SELECT * " +
                "FROM pais ";

        String where =  "WHERE pais LIKE  '%" + pais + "%' ";


        String pagination = "LIMIT " + pageable.getPageSize() + " " +
                "OFFSET " + pageable.getOffset() + ";";

        String querySql = selectAndFrom + where + pagination;

        List<Pais> paises = jdbcTemplate.query(querySql,new RowMapper<Pais>(){
            public Pais mapRow( ResultSet rs, int row) throws SQLException {
                Pais c=new Pais();
                c.setIdPais(rs.getInt(1));
                c.setPais(rs.getString(2));
                c.setSigla(rs.getString(3));
                c.setDdi(rs.getString(4));
                c.setSituacao( rs.getBoolean( "situacao" ) );

                return c;
            }
        });
        return new PageImpl<>(paises, pageable, total);
    }

    public void updateSituacaoPais( long id, boolean situacao )
    {
        jdbcTemplate.update("UPDATE pais SET situacao = ? WHERE idPais = ?", situacao, id);

    }
}
