package br.com.projeto.portal.domain.dao.fornecedor;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.application.security.ContextHolder;
import br.com.projeto.portal.domain.dao.CondicaoPagamentoDAO;
import br.com.projeto.portal.domain.dao.FranquiaDAO;
import br.com.projeto.portal.domain.dao.cidade.CidadeDAO;
import br.com.projeto.portal.domain.dao.estado.EstadoDAO;
import br.com.projeto.portal.domain.dao.pais.PaisDAO;
import br.com.projeto.portal.domain.entity.CondicaoPagamentoFornecedor;
import br.com.projeto.portal.domain.entity.Fornecedor;
import br.com.projeto.portal.domain.entity.usuario.PerfilUsuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
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

    @Autowired
    FranquiaDAO franquiaDAO;


    
    public Fornecedor findFornecedorById(Long id)
    {
        String sql = "SELECT * FROM fornecedor WHERE codigo = ?";

        Fornecedor fornecedor = (Fornecedor) jdbcTemplate.queryForObject(sql,
                new Object[] { id }, new BeanPropertyRowMapper(Fornecedor.class));

        fornecedor.setEstado( estadoDAO.findEstadoById(fornecedor.getEstadoId()) );
        fornecedor.setCidade( cidadeDAO.findCidadeById( fornecedor.getCidadeId()) );
        fornecedor.setPais( paisDAO.findPaisById( fornecedor.getPaisId()) );

        return fornecedor;
    }

    
    public Long insertFornecedor( Fornecedor fornecedor )
    {
        String sqlId = "SELECT max(codigo) FROM fornecedor";
        Long returnQuery = jdbcTemplate.queryForObject( sqlId, Long.class );
        Long id = returnQuery == null ? 1 : returnQuery+1;


        jdbcTemplate.update(
                "INSERT INTO fornecedor " +
                        "(codigo, " +
                        "razaoSocial, " +
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
                        "created) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                id,
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
                Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)) );

        return id;

    }

    public void insertCondicaoPagamentoFornecedor(Fornecedor fornecedor){
        jdbcTemplate.update(
                "INSERT INTO condicao_pagamento_fornecedor " +
                        "(fornecedor_id, " +
                        "condicao_pagamento_id, " +
                        "franquia_id, "+
                        "created) VALUES (?,?,?,?)",
                fornecedor.getCodigo(),
                fornecedor.getCondicaoPagamento().getCodigo(),
                ContextHolder.getAuthenticatedUser().getFranquia().getCodigo(),
                Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)) );
    }

    public void updateCondicaoPagamentoFornecedor(Fornecedor fornecedor){
        jdbcTemplate.update(
                "UPDATE condicao_pagamento_fornecedor SET " +
                        "condicao_pagamento_id = ?, " +
                        "updated = ? " +
                        "WHERE fornecedor_id = ? AND franquia_id = ?",
                fornecedor.getCondicaoPagamento() != null ? fornecedor.getCondicaoPagamento().getCodigo() : null,
                Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)),
                fornecedor.getCodigo(),
                ContextHolder.getAuthenticatedUser().getFranquia().getCodigo());
    }

    public CondicaoPagamentoFornecedor findCondicaoPagamentoFornecedorById( Long fornecedorId, Long franquiaId)
    {
        try{
            String sql = "SELECT * FROM condicao_pagamento_fornecedor WHERE fornecedor_id = ? AND franquia_id = ?";

            CondicaoPagamentoFornecedor condicaoPagamentoFornecedor = (CondicaoPagamentoFornecedor) jdbcTemplate.queryForObject(sql,
                    new Object[] { fornecedorId ,  franquiaId}, new BeanPropertyRowMapper(CondicaoPagamentoFornecedor.class));

            if(condicaoPagamentoFornecedor.getCondicaoPagamentoId() != null)
                condicaoPagamentoFornecedor.setCondicaoPagamento( condicaoPagamentoDAO.findCondicaoPagamentoById( condicaoPagamentoFornecedor.getCondicaoPagamentoId()) );

            return condicaoPagamentoFornecedor;
        }
        catch ( Exception e ){
            return null;
        }
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
                Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)),
                fornecedor.getCodigo());
    }



    
    public void deleteFornecedor(Long id){
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
                f.setCodigo(rs.getLong(1));
                f.setRazaoSocial(rs.getString(2));
                f.setCnpj(rs.getString(3));
                f.setCelular(rs.getString(5));
                f.setTelefone(rs.getString(4));
                f.setEndereco(rs.getString(6));
                f.setSituacao( rs.getBoolean( "situacao" ) );

                if(ContextHolder.getAuthenticatedUser().getPerfilUsuario().equals( PerfilUsuario.FRANQUIADO ))
                {
                    CondicaoPagamentoFornecedor condicaoPagamentoFornecedor = findCondicaoPagamentoFornecedorById( rs.getLong( 1 ), ContextHolder.getAuthenticatedUser().getFranquia().getCodigo() );
                    f.setCondicaoPagamento( condicaoPagamentoFornecedor != null ? condicaoPagamentoFornecedor.getCondicaoPagamento() : null);
                }
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
