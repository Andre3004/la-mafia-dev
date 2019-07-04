package br.com.projeto.portal.domain.dao.cidade;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.domain.entity.Cidade;
import br.com.projeto.portal.domain.repository.ICidadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import br.com.projeto.portal.domain.repository.ICidadeRepository;

@Repository
@Qualifier("cidadeDao")
public class CidadeDAO implements ICidadeRepository
{
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public Cidade findCidadeById(int id)
    {
        String sql = "SELECT * FROM cidade WHERE idCidade = ?";

        Cidade cidade = (Cidade) jdbcTemplate.queryForObject(sql,
                new Object[] { id }, new BeanPropertyRowMapper(Cidade.class));

        return cidade;
    }

    @Override
    public void insertCidade( Cidade cidade )
    {
        jdbcTemplate.update(
                "INSERT INTO cidade " +
                        "(cidade  , " +
                        "ddd, " +
                        "idEstado, " +
                        "created) VALUES (?, ?, ?, ?)",
                cidade.getCidade(),
                cidade.getDdd(),
                cidade.getEstado().getIdEstado(),
                Timestamp.valueOf(LocalDateTime.now()) );
    }

    @Override
    public void updateCidade( Cidade cidade )
    {
        jdbcTemplate.update("UPDATE cidade " +
                        "SET " +
                        "cidade= ?, " +
                        "ddd= ?, " +
                        "idEstado= ?," +
                        "updated = ? " +
                        "WHERE idCidade = ?",
                cidade.getCidade(),
                cidade.getDdd(),
                cidade.getEstado().getIdEstado(),
                Timestamp.valueOf(LocalDateTime.now()),
                cidade.getIdCidade());
    }

    @Override
    public void deleteCidade(int id){
        jdbcTemplate.update("DELETE from cidade WHERE idCidade = ? ", id);
    }


    @Override
    public Page<Cidade> listCidadesByFilters( String cidade, PageRequest pageable )
    {
        if(pageable == null) pageable = new PageRequest(0, 10);

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
                e.setIdCidade(rs.getInt(1));
                e.setCidade(rs.getString(2));
                e.setDdd(rs.getString(3));
                e.setSituacao( rs.getBoolean( "situacao" ) );

                return e;
            }
        });
        return new PageImpl<>(cidades, pageable, total);
    }

    public void updateSituacaoCidade( long id, boolean situacao )
    {
        jdbcTemplate.update("UPDATE cidade SET situacao = ? WHERE idCidade = ?", situacao, id);
    }
}
