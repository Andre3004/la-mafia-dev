package br.com.projeto.portal.domain.dao.fornecedor;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.domain.dao.CondicaoPagamentoDAO;
import br.com.projeto.portal.domain.dao.FormaPagamentoDAO;
import br.com.projeto.portal.domain.dao.cidade.CidadeDAO;
import br.com.projeto.portal.domain.dao.estado.EstadoDAO;
import br.com.projeto.portal.domain.dao.pais.PaisDAO;
import br.com.projeto.portal.domain.entity.Fornecedor;
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
@Qualifier("fornecedorDao")
public class FornecedorDAO
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
    CondicaoPagamentoDAO condicaoPagamentoDAO;


    
    public Fornecedor findFornecedorById(int id)
    {
        String sql = "SELECT * FROM fornecedor WHERE codigo = ?";

        Fornecedor fornecedor = (Fornecedor) jdbcTemplate.queryForObject(sql,
                new Object[] { id }, new BeanPropertyRowMapper(Fornecedor.class));

        fornecedor.setEstado( estadoDAO.findEstadoById(fornecedor.getEstadoId()) );
        fornecedor.setCidade( cidadeDAO.findCidadeById( fornecedor.getCidadeId()) );
        fornecedor.setPais( paisDAO.findPaisById( fornecedor.getPaisId()) );
        fornecedor.setCondicaoPagamento( condicaoPagamentoDAO.findCondicaoPagamentoById( fornecedor.getCondicaoPagamentoId()) );

        return fornecedor;
    }

    
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
                        "cidade_id, " +
                        "estado_id, " +
                        "pais_id, " +
                        "cep, " +
                        "situacao, " +
                        "inscricao_estadual, " +
                        "condicao_pagamento_id, " +
                        "created) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                fornecedor.getRazaoSocial(),
                fornecedor.getCnpj(),
                fornecedor.getTelefone(),
                fornecedor.getCelular(),
                fornecedor.getEndereco(),
                fornecedor.getNumero(),
                fornecedor.getBairro(),
                fornecedor.getEmail(),
                fornecedor.getCidade().getCodigo(),
                fornecedor.getEstado().getCodigo(),
                fornecedor.getPais().getCodigo(),
                fornecedor.getCep(),
                fornecedor.getSituacao(),
                fornecedor.getInscricaoEstadual(),
                fornecedor.getCondicaoPagamento().getCodigo(),
                Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)) );
    }

    
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
                        "cidade_id = ?, " +
                        "estado_id = ?, " +
                        "pais_id = ?, " +
                        "cep = ?, " +
                        "inscricao_estadual = ?, " +
                        "condicao_pagamento_id = ?, " +
                        "updated = ? " +
                        "WHERE codigo = ?",
                fornecedor.getRazaoSocial(),
                fornecedor.getCnpj(),
                fornecedor.getTelefone(),
                fornecedor.getCelular(),
                fornecedor.getEndereco(),
                fornecedor.getNumero(),
                fornecedor.getBairro(),
                fornecedor.getEmail(),
                fornecedor.getCidade().getCodigo(),
                fornecedor.getEstado().getCodigo(),
                fornecedor.getPais().getCodigo(),
                fornecedor.getCep(),
                fornecedor.getInscricaoEstadual(),
                fornecedor.getCondicaoPagamento().getCodigo(),
                Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)),
                fornecedor.getCodigo());
    }



    
    public void deleteFornecedor(int id){
        jdbcTemplate.update("DELETE from fornecedor WHERE codigo = ? ", id);
    }


    
    public Page<Fornecedor> listFornecedorsByFilters( String razaoSocial, PageRequest pageable )
    {
        if(pageable == null) pageable = new PageRequest(0, 10);

        if(razaoSocial != null)
            razaoSocial = razaoSocial.replaceAll( "'", "''" );
            
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
                f.setCodigo(rs.getInt(1));
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
        jdbcTemplate.update("UPDATE fornecedor SET situacao = ? WHERE codigo = ?", situacao, id);

    }
}
