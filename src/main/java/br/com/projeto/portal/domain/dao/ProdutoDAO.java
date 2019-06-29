package br.com.projeto.portal.domain.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.domain.entity.produto.Produto;
import br.com.projeto.portal.domain.repository.IProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
@Qualifier("ProdutoDAO")
public class ProdutoDAO implements IProdutoRepository
{
	@Autowired
	JdbcTemplate jdbcTemplate;

	@Autowired
	GrupoProdutoDAO grupoProdutoDAO;

	@Override
	public Produto findProdutoById( long id)
	{
		String sql = "SELECT * FROM produto WHERE id = ?";

		Produto produto = (Produto) jdbcTemplate.queryForObject(sql,
				new Object[] { id }, new BeanPropertyRowMapper(Produto.class));

		produto.setGrupoProduto( grupoProdutoDAO.findGrupoProdutoById( produto.getGrupoProdutoId() ) );

		return produto;
	}

	@Override
	public void insertProduto( Produto produto )
	{
		jdbcTemplate.update(
				"INSERT INTO produto " +
						"(nome, " +
						"descricao, " +
						"codigo, " +
						"ano, " +
						"situacao, " +
						"anexo_uuid, " +
						"nome_arquivo, " +
						"preco_custo, " +
						"preco_venda, " +
						"estoque, " +
						"grupo_produto_id, " +
						"created) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
				produto.getNome(),
				produto.getDescricao(),
				produto.getCodigo(),
				produto.getAno(),
				produto.getSituacao(),
				produto.getAnexoUuid(),
				produto.getNomeArquivo(),
				produto.getPrecoCusto(),
				produto.getPrecoVenda(),
				produto.getEstoque(),
				produto.getGrupoProduto().getId(),
				Timestamp.valueOf( LocalDateTime.now()) );
	}

	@Override
	public void updateProduto( Produto produto )
	{
		jdbcTemplate.update("UPDATE produto " +
						"SET " +
						"nome = ?, " +
						"descricao = ?, " +
						"codigo = ?, " +
						"ano = ?, " +
						"situacao = ?, " +
						"anexo_uuid = ?, " +
						"nome_arquivo = ?, " +
						"grupo_produto_id = ? "+
						"preco_custo = ? " +
						"preco_venda = ? " +
						"estoque = ? " +
						"updated = ? " +
						"WHERE id = ?",
				produto.getNome(),
				produto.getDescricao(),
				produto.getCodigo(),
				produto.getAno(),
				produto.getSituacao(),
				produto.getAnexoUuid(),
				produto.getNomeArquivo(),
				produto.getGrupoProduto().getId(),
				produto.getPrecoCusto(),
				produto.getPrecoVenda(),
				produto.getEstoque(),
				Timestamp.valueOf(LocalDateTime.now()),
				produto.getId());
	}

	@Override
	public void deleteProduto(long id){
		jdbcTemplate.update("DELETE from produto WHERE id = ? ", id);
	}

	@Override
	public void updateSituacaoProduto(long id, boolean situacao){
		jdbcTemplate.update("UPDATE produto SET situacao = ? WHERE id = ?", situacao, id);
	}

	@Override
	public Page<Produto> listProdutosByFilters( String nome, String codigo, PageRequest pageable )
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

		String where =  "WHERE nome LIKE  '%" + nome + "%' AND "+
				"codigo LIKE  '%" + codigo + "%' ";


		String pagination = "LIMIT " + pageable.getPageSize() + " " +
				"OFFSET " + pageable.getOffset() + ";";

		String querySql = selectAndFrom + where + pagination;

		List<Produto> produtos = jdbcTemplate.query(querySql,new RowMapper<Produto>(){
			public Produto mapRow( ResultSet rs, int row) throws SQLException
			{
				Produto e=new Produto();
				e.setId(rs.getLong("id"));
				e.setNome(rs.getString("nome"));
				e.setCodigo(rs.getString("codigo"));
				e.setSituacao( rs.getBoolean( "situacao" ) );
				return e;
			}
		});
		return new PageImpl<>(produtos, pageable, total);
	}
}
