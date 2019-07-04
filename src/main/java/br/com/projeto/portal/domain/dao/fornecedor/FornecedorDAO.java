package br.com.projeto.portal.domain.dao.fornecedor;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.domain.entity.Fornecedor;
import br.com.projeto.portal.domain.repository.IFornecedorRepository;
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
import br.com.projeto.portal.domain.repository.IFornecedorRepository;

@Repository
@Qualifier("fornecedorDao")
public class FornecedorDAO implements IFornecedorRepository
{
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public Fornecedor findFornecedorById(int id)
    {
        String sql = "SELECT * FROM fornecedor WHERE idFornecedor = ?";

        Fornecedor fornecedor = (Fornecedor) jdbcTemplate.queryForObject(sql,
                new Object[] { id }, new BeanPropertyRowMapper(Fornecedor.class));

        return fornecedor;
    }

    @Override
    public void insertFornecedor( Fornecedor fornecedor )
    {
        jdbcTemplate.update(
                "INSERT INTO fornecedor " +
                        "(razaoSocial, " +
                        "cnpj, " +
                        "telefone, " +
                        "celular, " +
                        "endereco, " +
                        "numero, " +
                        "bairro, " +
                        "email, " +
                        "cidade, " +
                        "estado, " +
                        "pais, " +
                        "cep, " +
                        "situacao, " +
                        "created) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                fornecedor.getRazaoSocial(),
                fornecedor.getCnpj(),
                fornecedor.getTelefone(),
                fornecedor.getCelular(),
                fornecedor.getEndereco(),
                fornecedor.getNumero(),
                fornecedor.getBairro(),
                fornecedor.getEmail(),
                fornecedor.getCidade(),
                fornecedor.getEstado(),
                fornecedor.getPais(),
                fornecedor.getCep(),
                fornecedor.getSituacao(),
                Timestamp.valueOf(LocalDateTime.now()) );
    }

    @Override
    public void updateFornecedor( Fornecedor fornecedor )
    {
        jdbcTemplate.update("UPDATE fornecedor " +
                        "SET " +
                        "razaoSocial = ?, " +
                        "cnpj = ?, " +
                        "telefone = ?, " +
                        "celular = ?, " +
                        "endereco = ?, " +
                        "numero = ?, " +
                        "bairro = ?, " +
                        "email = ?, " +
                        "cidade = ?, " +
                        "estado = ?, " +
                        "pais = ?, " +
                        "cep = ?, " +

                        "updated = ? " +
                        "WHERE idFornecedor = ?",
                fornecedor.getRazaoSocial(),
                fornecedor.getCnpj(),
                fornecedor.getTelefone(),
                fornecedor.getCelular(),
                fornecedor.getEndereco(),
                fornecedor.getNumero(),
                fornecedor.getBairro(),
                fornecedor.getEmail(),
                fornecedor.getCidade(),
                fornecedor.getEstado(),
                fornecedor.getPais(),
                fornecedor.getCep(),

                Timestamp.valueOf(LocalDateTime.now()),
                fornecedor.getIdFornecedor());
    }



    @Override
    public void deleteFornecedor(int id){
        jdbcTemplate.update("DELETE from fornecedor WHERE idFornecedor = ? ", id);
    }


    @Override
    public Page<Fornecedor> listFornecedorsByFilters( String razaoSocial, PageRequest pageable )
    {
        if(pageable == null) pageable = new PageRequest(0, 10);

        String rowCountSql = "SELECT count(1) AS row_count FROM fornecedor " ;

        int total =
                jdbcTemplate.queryForObject(
                        rowCountSql,
                        new Object[]{}, (rs, rowNum) -> rs.getInt(1)
                );

        String selectAndFrom = "SELECT * " +
                "FROM fornecedor ";

        String where =  "WHERE razaoSocial LIKE  '%" + razaoSocial + "%' ";


        String pagination = "LIMIT " + pageable.getPageSize() + " " +
                "OFFSET " + pageable.getOffset() + ";";

        String querySql = selectAndFrom + where + pagination;

        List<Fornecedor> fornecedores = jdbcTemplate.query(querySql,new RowMapper<Fornecedor>(){
            public Fornecedor mapRow( ResultSet rs, int row) throws SQLException {
                Fornecedor f=new Fornecedor();
                f.setIdFornecedor(rs.getInt(1));
                f.setRazaoSocial(rs.getString(2));
                f.setCnpj(rs.getString(3));
                f.setCelular(rs.getString(5));
                f.setTelefone(rs.getString(4));
                f.setEndereco(rs.getString(6));
                f.setSituacao( rs.getBoolean( "situacao" ) );

                return f;
            }
        });
        return new PageImpl<>(fornecedores, pageable, total);
    }

    public void updateSituacaoFornecedor( long id, boolean situacao )
    {
        jdbcTemplate.update("UPDATE fornecedor SET situacao = ? WHERE idFornecedor = ?", situacao, id);

    }
}
