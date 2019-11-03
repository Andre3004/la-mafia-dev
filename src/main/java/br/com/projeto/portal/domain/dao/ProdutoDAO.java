package br.com.projeto.portal.domain.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.application.security.ContextHolder;
import br.com.projeto.portal.domain.dao.fornecedor.FornecedorDAO;
import br.com.projeto.portal.domain.entity.produto.Estoque;
import br.com.projeto.portal.domain.entity.produto.Produto;
import br.com.projeto.portal.domain.entity.usuario.PerfilUsuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.jdbc.core.BeanPropertyRowMapper;

import java.time.ZoneId;
import java.util.stream.Collectors;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
@Qualifier("ProdutoDAO")
public class ProdutoDAO
{
	@Autowired
	JdbcTemplate jdbcTemplate;

	private static ZoneId fusoHorarioDeSaoPaulo = ZoneId.of( "America/Sao_Paulo" );

	@Autowired
	GrupoProdutoDAO grupoProdutoDAO;

	@Autowired
	FornecedorDAO fornecedorDAO;

	@Autowired
	EstoqueDAO estoqueDAO;

	public Produto findProdutoById( long id )
	{
		String sql = "SELECT * FROM produto WHERE codigo = ?";

		Produto produto = (Produto) jdbcTemplate.queryForObject( sql,
				new Object[]{id}, new BeanPropertyRowMapper( Produto.class ) );

		produto.setGrupoProduto( grupoProdutoDAO.findGrupoProdutoById( produto.getGrupoProdutoId() ) );

		if ( ContextHolder.getAuthenticatedUser().getPerfilUsuario().equals( PerfilUsuario.FRANQUIADO ) )
		{
			setCurrentEstoque( produto );
		}

		return produto;
	}

	public Long insertProduto( Produto produto )
	{
		String sqlId = "SELECT max(codigo) FROM produto";
		Long returnQuery = jdbcTemplate.queryForObject( sqlId, Long.class );
		Long id = returnQuery == null ? 1 : returnQuery + 1;

		jdbcTemplate.update(
				"INSERT INTO produto " +
						"(codigo, " +
						"produto, " +
						"descricao, " +
						"ano, " +
						"situacao, " +
						"anexo_uuid, " +
						"nome_arquivo, " +
						"grupo_produto_id, " +
						"codigo_barras, " +
						"unidade_comercial, " +
						"created) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
				id,
				produto.getProduto(),
				produto.getDescricao(),
				produto.getAno(),
				produto.getSituacao(),
				produto.getAnexoUuid(),
				produto.getNomeArquivo(),
				produto.getGrupoProduto().getCodigo(),
				produto.getCodigoBarras(),
				produto.getUnidadeComercial(),
				Timestamp.valueOf( LocalDateTime.now( this.fusoHorarioDeSaoPaulo ) ) );

		return id;
	}

	public void updateProduto( Produto produto )
	{
		jdbcTemplate.update( "UPDATE produto " +
						"SET " +
						"produto = ?, " +
						"descricao = ?, " +
						"ano = ?, " +
						"situacao = ?, " +
						"anexo_uuid = ?, " +
						"nome_arquivo = ?, " +
						"grupo_produto_id = ?, " +
						"codigo_barras  = ?, " +
						"unidade_comercial  = ?, " +
						"updated = ? " +
						"WHERE codigo = ?",
				produto.getProduto(),
				produto.getDescricao(),
				produto.getAno(),
				produto.getSituacao(),
				produto.getAnexoUuid(),
				produto.getNomeArquivo(),
				produto.getGrupoProduto().getCodigo(),
				produto.getCodigoBarras(),
				produto.getUnidadeComercial(),
				Timestamp.valueOf( LocalDateTime.now( this.fusoHorarioDeSaoPaulo ) ),
				produto.getCodigo() );
	}

	public void deleteProduto( long id )
	{
		jdbcTemplate.update( "DELETE from produto WHERE codigo = ? ", id );
	}

	public void updateSituacaoProduto( long id, boolean situacao )
	{
		jdbcTemplate.update( "UPDATE produto SET situacao = ? WHERE codigo = ?", situacao, id );
	}

	public Page<Produto> listProdutosByFilters( String nome, Long codigo, PageRequest pageable )
	{
		if ( pageable == null )
		{
			pageable = new PageRequest( 0, 10 );
		}

		if ( nome != null )
		{
			nome = nome.replaceAll( "'", "''" );
		}

		String rowCountSql = "SELECT count(1) AS row_count FROM produto ";

		int total =
				jdbcTemplate.queryForObject(
						rowCountSql,
						new Object[]{}, ( rs, rowNum ) -> rs.getInt( 1 )
				);

		String selectAndFrom = "SELECT * " +
				"FROM produto ";

		String where = "WHERE produto LIKE  '%" + nome + "%' ";

		where += codigo != null ? "AND codigo = " + codigo + " " : "";

		String pagination = "LIMIT " + pageable.getPageSize() + " " +
				"OFFSET " + pageable.getOffset() + ";";

		String querySql = selectAndFrom + where + pagination;

		List<Produto> produtos = jdbcTemplate.query( querySql, new RowMapper<Produto>()
		{
			public Produto mapRow( ResultSet rs, int row ) throws SQLException
			{
				Produto e = new Produto();
				e.setCodigo( rs.getLong( "codigo" ) );
				e.setProduto( rs.getString( "produto" ) );
				e.setSituacao( rs.getBoolean( "situacao" ) );
				e.setUnidadeComercial( rs.getString( "unidade_comercial" ) );

				if ( ContextHolder.getAuthenticatedUser().getPerfilUsuario().equals( PerfilUsuario.FRANQUIADO ) )
				{
					setCurrentEstoque( e );
				}

				return e;
			}
		} );
		return new PageImpl<>( produtos, pageable, total );
	}


	public void setCurrentEstoque( Produto produto )
	{
		Estoque currentEstoque = new Estoque();

		List<Estoque> estoquesFiltered = estoqueDAO.listEstoquesByCodigoProduto( produto.getCodigo() )
				.stream()
				.filter( estoque1 -> estoque1.getFranquia().getCodigo().equals( ContextHolder.getAuthenticatedUser().getFranquia().getCodigo() ) )
				.collect( Collectors.toList() );

		if ( estoquesFiltered.size() > 0 )
		{
			Estoque estoqueFiltered = estoquesFiltered.get( 0 );
			estoqueFiltered.setProduto( produto );
			if ( estoqueFiltered.getFornecedorId() != null )
			{
				estoqueFiltered.setFornecedor( fornecedorDAO.findFornecedorById( estoqueFiltered.getFornecedorId() ) );
			}

			if ( ContextHolder.getAuthenticatedUser().getPerfilUsuario().equals( PerfilUsuario.FRANQUIADO ) )
			{
				produto.setCurrentEstoque( estoqueFiltered );
			}
		}
		else
		{
			currentEstoque.setFranquia( ContextHolder.getAuthenticatedUser().getFranquia() );
			currentEstoque.setProduto( produto );
			if ( currentEstoque.getFornecedorId() != null )
			{
				currentEstoque.setFornecedor( fornecedorDAO.findFornecedorById( currentEstoque.getFornecedorId() ) );
			}

			if ( ContextHolder.getAuthenticatedUser().getPerfilUsuario().equals( PerfilUsuario.FRANQUIADO ) )
			{
				produto.setCurrentEstoque( currentEstoque );
			}
		}
	}

	public Page<Produto> listProdutosByFiltersToAssociation( String nome, Long codigo, PageRequest pageable )
	{
		if ( pageable == null )
		{
			pageable = new PageRequest( 0, 10 );
		}

		if ( nome != null )
		{
			nome = nome.replaceAll( "'", "''" );
		}

		String rowCountSql = "SELECT count(1) AS row_count FROM produto ";

		int total =
				jdbcTemplate.queryForObject(
						rowCountSql,
						new Object[]{}, ( rs, rowNum ) -> rs.getInt( 1 )
				);

		String selectAndFrom = "SELECT produto.codigo, produto.produto, produto.situacao, produto.unidade_comercial " +
				"FROM produto, estoque ";

		String where = "WHERE estoque.produto_id = produto.codigo AND estoque.franquia_id = " + ContextHolder.getAuthenticatedUser().getFranquia().getCodigo();

		where += " AND produto LIKE  '%" + nome + "%' ";

		where += codigo != null ? "AND codigo = " + codigo + " " : "";

		String pagination = "LIMIT " + pageable.getPageSize() + " " +
				"OFFSET " + pageable.getOffset() + ";";

		String querySql = selectAndFrom + where + pagination;

		List<Produto> produtos = jdbcTemplate.query( querySql, new RowMapper<Produto>()
		{
			public Produto mapRow( ResultSet rs, int row ) throws SQLException
			{
				Produto e = new Produto();
				e.setCodigo( rs.getLong( "codigo" ) );
				e.setProduto( rs.getString( "produto" ) );
				e.setSituacao( rs.getBoolean( "situacao" ) );
				e.setUnidadeComercial( rs.getString( "unidade_comercial" ) );

				if ( ContextHolder.getAuthenticatedUser().getPerfilUsuario().equals( PerfilUsuario.FRANQUIADO ) )
				{
					setCurrentEstoque( e );
				}

				return e;
			}
		} );
		return new PageImpl<>( produtos, pageable, total );
	}
}
