package br.com.projeto.portal.domain.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.domain.dao.fornecedor.FornecedorDAO;
import br.com.projeto.portal.domain.entity.produto.Produto;
import br.com.projeto.portal.domain.repository.IProdutoRepository;
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
@Qualifier("ProdutoDAO")
public class ProdutoDAO implements IProdutoRepository
{
	@Autowired
	JdbcTemplate jdbcTemplate;

    private static ZoneId fusoHorarioDeSaoPaulo = ZoneId.of("America/Sao_Paulo");

	@Autowired
	GrupoProdutoDAO grupoProdutoDAO;

	@Autowired
	FornecedorDAO fornecedorDAO;

	@Override
	public Produto findProdutoById( long id)
	{
		String sql = "SELECT * FROM produto WHERE codigo = ?";

		Produto produto = (Produto) jdbcTemplate.queryForObject(sql,
				new Object[] { id }, new BeanPropertyRowMapper(Produto.class));

		produto.setGrupoProduto( grupoProdutoDAO.findGrupoProdutoById( produto.getGrupoProdutoId() ) );
		if(produto.getFornecedorId() != null) produto.setFornecedor( fornecedorDAO.findFornecedorById( produto.getFornecedorId() ) );

		return produto;
	}

	@Override
	public void insertProduto( Produto produto )
	{
		jdbcTemplate.update(
				"INSERT INTO produto " +
						"(produto, " +
						"descricao, " +
						"ano, " +
						"situacao, " +
						"anexo_uuid, " +
						"nome_arquivo, " +
						"preco_custo, " +
						"preco_venda, " +
						"grupo_produto_id, " +
						"codigo_barras, " +
						"unidade_comercial, " +
						"fornecedor_id, " +
						"created) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
				produto.getProduto(),
				produto.getDescricao(),
				produto.getAno(),
				produto.getSituacao(),
				produto.getAnexoUuid(),
				produto.getNomeArquivo(),
				produto.getPrecoCusto(),
				produto.getPrecoVenda(),
				produto.getGrupoProduto().getCodigo(),
				produto.getCodigoBarras(),
				produto.getUnidadeComercial(),
				produto.getFornecedor() != null ? produto.getFornecedor().getIdFornecedor() : null,
				Timestamp.valueOf( LocalDateTime.now(this.fusoHorarioDeSaoPaulo)) );
	}

	@Override
	public void updateProduto( Produto produto )
	{
		jdbcTemplate.update("UPDATE produto " +
						"SET " +
						"produto = ?, " +
						"descricao = ?, " +
						"ano = ?, " +
						"situacao = ?, " +
						"anexo_uuid = ?, " +
						"nome_arquivo = ?, " +
						"grupo_produto_id = ? "+
						"preco_custo = ? " +
						"preco_venda = ? " +
						"codigo_barras, " +
						"unidade_comercial, " +
						"fornecedor_id, " +
						"updated = ? " +
						"WHERE codigo = ?",
				produto.getProduto(),
				produto.getDescricao(),
				produto.getAno(),
				produto.getSituacao(),
				produto.getAnexoUuid(),
				produto.getNomeArquivo(),
				produto.getGrupoProduto().getCodigo(),
				produto.getPrecoCusto(),
				produto.getPrecoVenda(),
				produto.getCodigoBarras(),
				produto.getUnidadeComercial(),
				produto.getFornecedor().getIdFornecedor(),
				Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)),
				produto.getCodigo());
	}

	@Override
	public void deleteProduto(long id){
		jdbcTemplate.update("DELETE from produto WHERE codigo = ? ", id);
	}

	@Override
	public void updateSituacaoProduto(long id, boolean situacao){
		jdbcTemplate.update("UPDATE produto SET situacao = ? WHERE codigo = ?", situacao, id);
	}

	@Override
	public Page<Produto> listProdutosByFilters( String nome, PageRequest pageable )
	{
		if(pageable == null) pageable = new PageRequest(0, 10);

		String rowCountSql = "SELECT count(1) AS row_count FROM produto " ;

		int total =
				jdbcTemplate.queryForObject(
						rowCountSql,
						new Object[]{}, (rs, rowNum) -> rs.getInt(1)
				);

		String selectAndFrom = "SELECT * " +
				"FROM produto ";

		String where =  "WHERE produto LIKE  '%" + nome + "%' ";


		String pagination = "LIMIT " + pageable.getPageSize() + " " +
				"OFFSET " + pageable.getOffset() + ";";

		String querySql = selectAndFrom + where + pagination;

		List<Produto> produtos = jdbcTemplate.query(querySql,new RowMapper<Produto>(){
			public Produto mapRow( ResultSet rs, int row) throws SQLException
			{
				Produto e=new Produto();
				e.setCodigo(rs.getLong("codigo"));
				e.setProduto(rs.getString("produto"));
				e.setSituacao( rs.getBoolean( "situacao" ) );
				return e;
			}
		});
		return new PageImpl<>(produtos, pageable, total);
	}
}
