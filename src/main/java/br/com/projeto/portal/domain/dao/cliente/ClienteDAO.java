package br.com.projeto.portal.domain.dao.cliente;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.domain.entity.Cliente;
import br.com.projeto.portal.domain.repository.IClienteRepository;
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
import br.com.projeto.portal.domain.repository.IClienteRepository;

@Repository
@Qualifier("clienteDao")
public class ClienteDAO implements IClienteRepository
{
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public Cliente findClienteById(int id)
    {
        String sql = "SELECT * FROM cliente WHERE idCliente = ?";

        Cliente cliente = (Cliente) jdbcTemplate.queryForObject(sql,
                new Object[] { id }, new BeanPropertyRowMapper(Cliente.class));

        return cliente;
    }

    @Override
    public void insertCliente( Cliente cliente )
    {
        jdbcTemplate.update(
                "INSERT INTO cliente " +
                        "(cliente  , " +
                        "apelido, " +
                        "cpf, " +
                        "sexo, " +
                        "telefone, " +
                        "celular, " +
                        "email, " +
                        "endereco, " +
                        "cidade, " +
                        "estado, " +
                        "pais, " +
                        "situacao, " +
                        "created) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                cliente.getCliente(),
                cliente.getApelido(),
                cliente.getCpf(),
                cliente.getSexo(),
                cliente.getTelefone(),
                cliente.getCelular(),
                cliente.getEmail(),
                cliente.getEndereco(),
                cliente.getCidade(),
                cliente.getEstado(),
                cliente.getPais(),
                Timestamp.valueOf(LocalDateTime.now()) );
    }

    @Override
    public void updateCliente( Cliente cliente )
    {
        jdbcTemplate.update("UPDATE cliente " +
                        "SET " +
                        "cliente= ?, " +
                        "apelido= ?, " +
                        "cpf= ?," +
                        "sexo= ?, " +
                        "telefone= ?, " +
                        "celular= ?, " +
                        "email= ?, " +
                        "endereco= ?, " +
                        "cidade= ?, " +
                        "estado= ?, " +
                        "pais= ?," +
                        "updated = ? " +
                        "WHERE idCliente = ?",
                cliente.getCliente(),
                cliente.getApelido(),
                cliente.getCpf(),
                cliente.getSexo(),
                cliente.getTelefone(),
                cliente.getCelular(),
                cliente.getEmail(),
                cliente.getEndereco(),
                cliente.getCidade(),
                cliente.getEstado(),
                cliente.getPais(),
                Timestamp.valueOf(LocalDateTime.now()),
                cliente.getIdCliente());
    }

    @Override
    public void deleteCliente(int id){
        jdbcTemplate.update("DELETE from cliente WHERE idCliente = ? ", id);
    }


    @Override
    public Page<Cliente> listClientesByFilters( String cliente, PageRequest pageable )
    {
        if(pageable == null) pageable = new PageRequest(0, 10);

        String rowCountSql = "SELECT count(1) AS row_count FROM cliente " ;

        int total =
                jdbcTemplate.queryForObject(
                        rowCountSql,
                        new Object[]{}, (rs, rowNum) -> rs.getInt(1)
                );

        String selectAndFrom = "SELECT * " +
                "FROM cliente ";

        String where =  "WHERE cliente LIKE  '%" + cliente + "%' ";


        String pagination = "LIMIT " + pageable.getPageSize() + " " +
                "OFFSET " + pageable.getOffset() + ";";

        String querySql = selectAndFrom + where + pagination;

        List<Cliente> clientes = jdbcTemplate.query(querySql,new RowMapper<Cliente>(){
            public Cliente mapRow( ResultSet rs, int row) throws SQLException {
                Cliente c=new Cliente();
                c.setIdCliente(rs.getInt(1));
                c.setCliente(rs.getString(2));
                c.setCpf(rs.getString(4));
                c.setCelular(rs.getString(7));
                c.setSituacao( rs.getBoolean( "situacao" ) );

                return c;
            }
        });
        return new PageImpl<>(clientes, pageable, total);
    }

    public void updateSituacaoCliente( long id, boolean situacao )
    {
        jdbcTemplate.update("UPDATE cliente SET situacao = ? WHERE idCliente = ?", situacao, id);
    }
}
