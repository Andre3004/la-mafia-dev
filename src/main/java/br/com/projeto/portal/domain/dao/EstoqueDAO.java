package br.com.projeto.portal.domain.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.domain.entity.pagamento.CondicaoPagamento;
import br.com.projeto.portal.domain.entity.produto.Estoque;
import br.com.projeto.portal.domain.entity.produto.Produto;

@Repository
@Qualifier("EstoqueDAO")
public class EstoqueDAO
{
	@Autowired
	JdbcTemplate jdbcTemplate;

	@Autowired
	private FranquiaDAO franquiaDAO;

	private static ZoneId fusoHorarioDeSaoPaulo = ZoneId.of( "America/Sao_Paulo" );


	public void insertEstoque( Estoque estoque )
	{
		jdbcTemplate.update(
				"INSERT INTO estoque " +
						"(produto_id, " +
						"franquia_id, " +
						"saldo, " +
						"preco_custo, " +
						"preco_venda, " +
						"fornecedor_id, " +
						"data_ultima_compra, "+
						"created) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
				estoque.getProduto().getCodigo(),
				estoque.getFranquia().getCodigo(),
				estoque.getSaldo(),
				estoque.getPrecoCusto(),
				estoque.getPrecoVenda(),
				estoque.getFornecedor() != null ? estoque.getFornecedor().getCodigo() : null,
				estoque.getDataUltimaCompra(),
				Timestamp.valueOf( LocalDateTime.now( this.fusoHorarioDeSaoPaulo ) ));
	}

	public void updateEstoque( Estoque estoque )
	{
		jdbcTemplate.update( "UPDATE estoque " +
						"SET " +
						"saldo = ?, " +
						"preco_custo = ?, " +
						"preco_venda = ?, " +
						"fornecedor_id = ?, " +
						"data_ultima_compra = ?, " +
						"updated = ? " +
						"WHERE franquia_id = ? AND produto_id = ?",
				estoque.getSaldo(),
				estoque.getPrecoCusto(),
				estoque.getPrecoVenda(),
				estoque.getFornecedor().getCodigo(),
				Timestamp.valueOf( estoque.getDataUltimaCompra() ),
				Timestamp.valueOf( LocalDateTime.now( this.fusoHorarioDeSaoPaulo ) ),
				estoque.getFranquia().getCodigo(),
				estoque.getProduto().getCodigo() );
	}

	public List<Estoque> listEstoquesByCodigoProduto( Long codigo )
	{
		String rowCountSql = "SELECT count(1) AS row_count FROM estoque " ;

		String selectAndFrom = "SELECT * " +
				"FROM estoque ";

		String where = codigo != null ? "WHERE produto_id = " + codigo + " " : "";


		String querySql = selectAndFrom + where;

		List<Estoque> estoques = jdbcTemplate.query(querySql,new RowMapper<Estoque>(){
			public Estoque mapRow( ResultSet rs, int row) throws SQLException
			{
				Estoque e=new Estoque();
				e.setFranquia(franquiaDAO.findFranquiaById( rs.getLong("franquia_id") ));
				e.setPrecoCusto(rs.getDouble("preco_custo"));
				e.setPrecoVenda(rs.getDouble("preco_venda"));
				e.setCreated( rs.getTimestamp( "created" ).toLocalDateTime() );
				e.setFornecedorId(rs.getLong("fornecedor_id") != 0 ? rs.getLong("fornecedor_id") : null);
				e.setDataUltimaCompra( rs.getTimestamp( "data_ultima_compra" ) != null ? rs.getTimestamp( "data_ultima_compra" ).toLocalDateTime() : null );
				e.setSaldo(rs.getInt("saldo"));

				return e;
			}
		});
		return estoques;
	}
}
