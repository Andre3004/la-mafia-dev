package br.com.projeto.portal.domain.dao.cliente;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.application.security.ContextHolder;
import br.com.projeto.portal.domain.dao.FranquiaDAO;
import br.com.projeto.portal.domain.dao.cidade.CidadeDAO;
import br.com.projeto.portal.domain.dao.estado.EstadoDAO;
import br.com.projeto.portal.domain.dao.pais.PaisDAO;
import br.com.projeto.portal.domain.entity.Cliente;
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
@Qualifier("clienteDao")
public class ClienteDAO 
{
    @Autowired
    JdbcTemplate jdbcTemplate;

    private static ZoneId fusoHorarioDeSaoPaulo = ZoneId.of("America/Sao_Paulo");

    @Autowired
    CidadeDAO cidadeDAO;

    @Autowired
    EstadoDAO estadoDAO;

    @Autowired
    PaisDAO paisDAO;

    @Autowired
    FranquiaDAO franquiaDAO;
    
    public Cliente findClienteById(Long id)
    {
        String sql = "SELECT * FROM cliente WHERE codigo = ?";

        Cliente cliente = (Cliente) jdbcTemplate.queryForObject(sql,
                new Object[] { id }, new BeanPropertyRowMapper(Cliente.class));

        cliente.setEstado( estadoDAO.findEstadoById(cliente.getEstadoId()) );
        cliente.setCidade( cidadeDAO.findCidadeById( cliente.getCidadeId()) );
        cliente.setPais( paisDAO.findPaisById( cliente.getPaisId()) );
        cliente.setFranquia( franquiaDAO.findFranquiaById( cliente.getFranquiaId() ) );

        return cliente;
    }

    
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
                        "cidade_id, " +
                        "estado_id, " +
                        "pais_id, " +
                        "situacao, " +
                        "franquia_id, " +
                        "created) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                cliente.getCliente(),
                cliente.getApelido(),
                cliente.getCpf(),
                cliente.getSexo(),
                cliente.getTelefone(),
                cliente.getCelular(),
                cliente.getEmail(),
                cliente.getEndereco(),
                cliente.getCidade().getCodigo(),
                cliente.getEstado().getCodigo(),
                cliente.getPais().getCodigo(),
                cliente.getSituacao(),
                ContextHolder.getAuthenticatedUser().getFranquia().getCodigo(),
                Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)) );
    }

    
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
                        "cidade_id = ?, " +
                        "estado_id = ?, " +
                        "pais_id = ?, " +
                        "updated = ? " +
                        "WHERE codigo = ?",
                cliente.getCliente(),
                cliente.getApelido(),
                cliente.getCpf(),
                cliente.getSexo(),
                cliente.getTelefone(),
                cliente.getCelular(),
                cliente.getEmail(),
                cliente.getEndereco(),
                cliente.getCidade().getCodigo(),
                cliente.getEstado().getCodigo(),
                cliente.getPais().getCodigo(),
                Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)),
                cliente.getCodigo());
    }

    
    public void deleteCliente(Long id){
        jdbcTemplate.update("DELETE from cliente WHERE codigo = ? ", id);
    }


    
    public Page<Cliente> listClientesByFilters( String cliente, PageRequest pageable )
    {
        if(pageable == null) pageable = new PageRequest(0, 10);

        if(cliente != null)
            cliente = cliente.replaceAll( "'", "''" );

        String rowCountSql = "SELECT count(1) AS row_count FROM cliente " ;

        int total =
                jdbcTemplate.queryForObject(
                        rowCountSql,
                        new Object[]{}, (rs, rowNum) -> rs.getInt(1)
                );

        String selectAndFrom = "SELECT * " +
                "FROM cliente ";

        String where =  "WHERE franquia_id = "+ContextHolder.getAuthenticatedUser().getFranquia().getCodigo()+" AND cliente LIKE  '%" + cliente + "%' ";


        String pagination = "LIMIT " + pageable.getPageSize() + " " +
                "OFFSET " + pageable.getOffset() + ";";

        String querySql = selectAndFrom + where + pagination;

        List<Cliente> clientes = jdbcTemplate.query(querySql,new RowMapper<Cliente>(){
            public Cliente mapRow( ResultSet rs, int row) throws SQLException {
                Cliente c=new Cliente();
                c.setCodigo(rs.getLong(1));
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
        jdbcTemplate.update("UPDATE cliente SET situacao = ? WHERE codigo = ?", situacao, id);
    }
}
