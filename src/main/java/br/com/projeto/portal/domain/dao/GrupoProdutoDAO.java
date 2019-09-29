package br.com.projeto.portal.domain.dao;


import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.domain.entity.GrupoProdutoFranquia;
import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.domain.entity.grupoProduto.GrupoProduto;
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
@Qualifier("grupoProdutoDao")
public class GrupoProdutoDAO
{
	@Autowired
	JdbcTemplate jdbcTemplate;

    private static ZoneId fusoHorarioDeSaoPaulo = ZoneId.of("America/Sao_Paulo");

	@Autowired
	FranquiaDAO franquiaDAO;

	
	public GrupoProduto findGrupoProdutoById( long id )
	{
		String sql = "SELECT * FROM grupo_produto WHERE codigo = ?";

		GrupoProduto grupoProduto = (GrupoProduto) jdbcTemplate.queryForObject( sql,
				new Object[]{id}, new BeanPropertyRowMapper( GrupoProduto.class ) );

		grupoProduto.setGrupoProdutoFranquia( findGrupoProdutoFranquiaById( id ) );

		return grupoProduto;
	}

	
	public Long insertGrupoProduto( GrupoProduto grupoProduto )
	{
		String sqlId = "SELECT max(codigo) FROM grupo_produto";
		Long returnQuery = jdbcTemplate.queryForObject( sqlId, Long.class );
		Long id = returnQuery == null ? 1 : returnQuery+1;

		jdbcTemplate.update(
				"INSERT INTO grupo_produto " +
						"(grupo_produto, " +
						"exige_ano, " +
						"codigo, " +
						"situacao, " +
						"anexo_uuid, " +
						"nome_arquivo, " +
						"created) VALUES (?, ?, ?, ?, ?, ?, ?)",
				grupoProduto.getGrupoProduto(),
				grupoProduto.getExigeAno(),
				id,
				grupoProduto.getSituacao(),
				grupoProduto.getAnexoUuid(),
				grupoProduto.getNomeArquivo(),
				Timestamp.valueOf( LocalDateTime.now(this.fusoHorarioDeSaoPaulo) ) );

		return id;
	}

	
	public void updateGrupoProduto( GrupoProduto grupoProduto,  List<Long> grupoProdutoFranquiaIds  )
	{
		jdbcTemplate.update( "UPDATE grupo_produto " +
						"SET " +
						"grupo_produto = ?, " +
						"exige_ano = ?, " +
						"anexo_uuid = ?, " +
						"nome_arquivo = ?, " +
						"updated = ? " +
						"WHERE codigo = ?",
				grupoProduto.getGrupoProduto(),
				grupoProduto.getExigeAno(),
				grupoProduto.getAnexoUuid(),
				grupoProduto.getNomeArquivo(),
				Timestamp.valueOf( LocalDateTime.now(this.fusoHorarioDeSaoPaulo) ),
				grupoProduto.getCodigo() );
	}

	
	public void deleteGrupoProduto( long id )
	{
		jdbcTemplate.update( "DELETE from grupo_produto WHERE codigo = ? ", id );
	}

	
	public void updateSituacaoGrupoProduto( long id, boolean situacao )
	{
		jdbcTemplate.update( "UPDATE grupo_produto SET situacao = ? WHERE codigo = ?", situacao, id );
	}

	
	public Page<GrupoProduto> listGrupoProdutosByFilters( String nome, Long codigo, PageRequest pageable )
	{
		if ( pageable == null ) pageable = new PageRequest( 0, 10 );

		if(nome != null)
			nome = nome.replaceAll( "'", "''" );
			
		String rowCountSql = "SELECT count(1) AS row_count FROM grupo_produto ";

		int total =
				jdbcTemplate.queryForObject(
						rowCountSql,
						new Object[]{}, ( rs, rowNum ) -> rs.getInt( 1 )
				);

		String selectAndFrom = "SELECT * " +
				"FROM grupo_produto ";

		String where = "WHERE grupo_produto LIKE  '%" + nome + "%' ";

		where += codigo != null ? "OR codigo = " + codigo + " " : "";

		String pagination = "LIMIT " + pageable.getPageSize() + " " +
				"OFFSET " + pageable.getOffset() + ";";

		String querySql = selectAndFrom + where + pagination;

		List<GrupoProduto> grupoProdutos = jdbcTemplate.query( querySql, new RowMapper<GrupoProduto>()
		{
			public GrupoProduto mapRow( ResultSet rs, int row ) throws SQLException
			{
				GrupoProduto e = new GrupoProduto();
				e.setCodigo( rs.getLong( "codigo" ) );
				e.setGrupoProduto( rs.getString( "grupo_produto" ) );
				e.setSituacao( rs.getBoolean( "situacao" ) );
				e.setExigeAno( rs.getBoolean( "exige_ano" ) );
				return e;
			}
		} );
		return new PageImpl<>( grupoProdutos, pageable, total );
	}


	/*-------------------------------------------------------------------
	 *				 		     GRUPO PRODUTO FRANQUIA
	 *-------------------------------------------------------------------*/



	public List<GrupoProdutoFranquia> findGrupoProdutoFranquiaById( long grupoProdutoId )
	{
		String querySql = "SELECT * FROM grupo_produto_franquia WHERE grupo_produto_id = " + grupoProdutoId +" ;";

		List<GrupoProdutoFranquia> grupoProdutoFranquias = jdbcTemplate.query(querySql, new BeanPropertyRowMapper(GrupoProdutoFranquia.class));

		grupoProdutoFranquias.forEach( grupoProdutoFranquia -> {
			grupoProdutoFranquia.setFranquia( franquiaDAO.findFranquiaById( grupoProdutoFranquia.getFranquiaId() ) );
		} );

		return grupoProdutoFranquias;
	}

	public void insertGrupoProdutoFranquia( GrupoProdutoFranquia grupoProdutoFranquia )
	{
		jdbcTemplate.update(
				"INSERT INTO grupo_produto_franquia " +
						"(grupo_produto_id, " +
						"franquia_id, " +
						"created) VALUES (?, ?, ?)",
				grupoProdutoFranquia.getGrupoProduto().getCodigo(),
				grupoProdutoFranquia.getFranquia().getCodigo(),
				Timestamp.valueOf( LocalDateTime.now(this.fusoHorarioDeSaoPaulo) ) );
	}

	public void deleteGrupoProdutoFraquia( long franquiaId, long grupoProdutoId )
	{
		jdbcTemplate.update( "DELETE from grupo_produto_franquia WHERE franquia_id = " + franquiaId +" AND grupo_produto_id = " +grupoProdutoId+ " ;"  );
	}
}