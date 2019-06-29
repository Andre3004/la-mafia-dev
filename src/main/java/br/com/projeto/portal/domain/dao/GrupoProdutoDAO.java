package br.com.projeto.portal.domain.dao;


import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.domain.entity.grupoProduto.GrupoProduto;
import br.com.projeto.portal.domain.repository.IGrupoProdutoRepository;
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
@Qualifier("grupoProdutoDao")
public class GrupoProdutoDAO implements IGrupoProdutoRepository
{
	@Autowired
	JdbcTemplate jdbcTemplate;

	@Autowired
	FranquiaDAO franquiaDAO;

	@Override
	public GrupoProduto findGrupoProdutoById( long id )
	{
		String sql = "SELECT * FROM grupo_produto WHERE id = ?";

		GrupoProduto grupoProduto = (GrupoProduto) jdbcTemplate.queryForObject( sql,
				new Object[]{id}, new BeanPropertyRowMapper( GrupoProduto.class ) );

		grupoProduto.setFranquia( franquiaDAO.findFranquiaById( grupoProduto.getFranquiaId() ) );
		return grupoProduto;
	}

	@Override
	public void insertGrupoProduto( GrupoProduto grupoProduto )
	{
		jdbcTemplate.update(
				"INSERT INTO grupo_produto " +
						"(franquia_id, " +
						"nome, " +
						"exige_ano, " +
						"codigo, " +
						"situacao, " +
						"anexo_uuid, " +
						"nome_arquivo, " +
						"created) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
				grupoProduto.getFranquia().getId(),
				grupoProduto.getNome(),
				grupoProduto.getExigeAno(),
				grupoProduto.getCodigo(),
				grupoProduto.getSituacao(),
				grupoProduto.getAnexoUuid(),
				grupoProduto.getNomeArquivo(),
				Timestamp.valueOf( LocalDateTime.now() ) );
	}

	@Override
	public void updateGrupoProduto( GrupoProduto grupoProduto )
	{
		jdbcTemplate.update( "UPDATE grupo_produto " +
						"SET " +
						"franquia_id = ?, " +
						"nome = ?, " +
						"exige_ano = ?, " +
						"codigo = ?, " +
						"anexo_uuid = ?, " +
						"nome_arquivo = ?, " +
						"updated = ? " +
						"WHERE id = ?",
				grupoProduto.getFranquia().getId(),
				grupoProduto.getNome(),
				grupoProduto.getExigeAno(),
				grupoProduto.getCodigo(),
				grupoProduto.getAnexoUuid(),
				grupoProduto.getNomeArquivo(),
				Timestamp.valueOf( LocalDateTime.now() ),
				grupoProduto.getId() );
	}

	@Override
	public void deleteGrupoProduto( long id )
	{
		jdbcTemplate.update( "DELETE from grupo_produto WHERE id = ? ", id );
	}

	@Override
	public void updateSituacaoGrupoProduto( long id, boolean situacao )
	{
		jdbcTemplate.update( "UPDATE grupo_produto SET situacao = ? WHERE id = ?", situacao, id );
	}

	@Override
	public Page<GrupoProduto> listGrupoProdutosByFilters( String nome, Long franquiaId, PageRequest pageable )
	{
		if ( pageable == null ) pageable = new PageRequest( 0, 10 );

		String rowCountSql = "SELECT count(1) AS row_count FROM grupo_produto ";

		int total =
				jdbcTemplate.queryForObject(
						rowCountSql,
						new Object[]{}, ( rs, rowNum ) -> rs.getInt( 1 )
				);

		String selectAndFrom = "SELECT * " +
				"FROM grupo_produto ";

		String where = "WHERE nome LIKE  '%" + nome + "%' ";

		where += franquiaId != null ? "AND franquia_id = " + franquiaId + "  " : "";

		String pagination = "LIMIT " + pageable.getPageSize() + " " +
				"OFFSET " + pageable.getOffset() + ";";

		String querySql = selectAndFrom + where + pagination;

		List<GrupoProduto> grupoProdutos = jdbcTemplate.query( querySql, new RowMapper<GrupoProduto>()
		{
			public GrupoProduto mapRow( ResultSet rs, int row ) throws SQLException
			{
				GrupoProduto e = new GrupoProduto();
				e.setId( rs.getLong( "id" ) );
				e.setNome( rs.getString( "nome" ) );
				e.setFranquia( franquiaDAO.findFranquiaById( rs.getLong( "franquia_id" ) ) );
				e.setSituacao( rs.getBoolean( "situacao" ) );
				e.setExigeAno( rs.getBoolean( "exige_ano" ) );
				return e;
			}
		} );
		return new PageImpl<>( grupoProdutos, pageable, total );
	}
}