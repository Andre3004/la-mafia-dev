package br.com.projeto.portal.domain.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.domain.entity.Ambiente.Ambiente;
import br.com.projeto.portal.domain.entity.Ambiente.AmbienteImagem;
import br.com.projeto.portal.domain.entity.franquia.Franquia;
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
@Qualifier("ambienteDao")
public class AmbienteDAO 
{
	@Autowired
	JdbcTemplate jdbcTemplate;

    private static ZoneId fusoHorarioDeSaoPaulo = ZoneId.of("America/Sao_Paulo");

	@Autowired
	FranquiaDAO franquiaDAO;

	
	public Ambiente findAmbienteById( long id)
	{
		String sql = "SELECT * FROM ambiente WHERE codigo = ?";

		Ambiente ambiente = (Ambiente) jdbcTemplate.queryForObject(sql,
				new Object[] { id }, new BeanPropertyRowMapper(Ambiente.class));

		ambiente.setFranquia( franquiaDAO.findFranquiaById( ambiente.getFranquiaId() ) );
		ambiente.setAmbienteImagems( findAmbienteImagemByAmbienteId( id ) );

		return ambiente;
	}

	
	public Long insertAmbiente( Ambiente ambiente )
	{
		String sqlId = "SELECT max(codigo) FROM ambiente";
		Long returnQuery = jdbcTemplate.queryForObject( sqlId, Long.class );
		Long id = returnQuery == null ? 1 : returnQuery+1;

		jdbcTemplate.update(
				"INSERT INTO ambiente " +
						"(codigo, " +
						"ambiente, " +
						"franquia_id, " +
						"descricao, " +
						"capacidade_mesas, " +
						"situacao, " +
						"created) VALUES (?, ?, ?, ?, ?, ?, ?)",
				id,
				ambiente.getAmbiente(),
				ambiente.getFranquia().getCodigo(),
				ambiente.getDescricao(),
				ambiente.getCapacidadeMesas(),
				ambiente.getSituacao(),
				Timestamp.valueOf( LocalDateTime.now(this.fusoHorarioDeSaoPaulo)) );

		return id;
	}

	
	public void updateAmbiente( Ambiente ambiente, List<Long> imagensDeletadasIds  )
	{
		jdbcTemplate.update("UPDATE ambiente " +
						"SET " +
						"ambiente = ?, " +
						"franquia_id = ?, " +
						"descricao = ?, " +
						"capacidade_mesas = ?, " +
						"situacao = ?, " +
						"updated = ? " +
						"WHERE codigo = ?",
				ambiente.getAmbiente(),
				ambiente.getFranquia().getCodigo(),
				ambiente.getDescricao(),
				ambiente.getCapacidadeMesas(),
				ambiente.getSituacao(),
				Timestamp.valueOf( LocalDateTime.now(this.fusoHorarioDeSaoPaulo)),
				ambiente.getCodigo());
	}

	
	public void deleteAmbiente(long id){
		jdbcTemplate.update("DELETE from ambiente WHERE codigo = ? ", id);
	}

	
	public void updateSituacaoAmbiente(long id, boolean situacao){
		jdbcTemplate.update("UPDATE ambiente SET situacao = ? WHERE codigo = ?", situacao, id);
	}

	
	public Page<Ambiente> listAmbientesByFilters( String nome, Long franquiaId, PageRequest pageable )
	{
		if(pageable == null) pageable = new PageRequest(0, 10);

		if(nome != null)
			nome = nome.replaceAll( "'", "''" );

		String rowCountSql = "SELECT count(1) AS row_count FROM ambiente " ;

		int total =
				jdbcTemplate.queryForObject(
						rowCountSql,
						new Object[]{}, (rs, rowNum) -> rs.getInt(1)
				);

		String selectAndFrom = "SELECT * " +
				"FROM ambiente ";

		String where =  "WHERE ambiente LIKE  '%" + nome + "%' ";

		where += franquiaId != null ?	"AND franquia_id = " + franquiaId + "  " : "";


		String pagination = "LIMIT " + pageable.getPageSize() + " " +
				"OFFSET " + pageable.getOffset() + ";";

		String querySql = selectAndFrom + where + pagination;

		List<Ambiente> ambientes = jdbcTemplate.query(querySql,new RowMapper<Ambiente>(){
			public Ambiente mapRow( ResultSet rs, int row) throws SQLException
			{
				Ambiente e=new Ambiente();
				e.setCodigo(rs.getLong(1));
				e.setAmbiente(rs.getString(5));
				e.setFranquia( franquiaDAO.findFranquiaById( rs.getLong( 4 ) ) );
				e.setSituacao( rs.getBoolean( 8 ) );
				return e;
			}
		});
		return new PageImpl<>(ambientes, pageable, total);
	}



	/*-------------------------------------------------------------------
	 *				 		     Arquivo
	 *-------------------------------------------------------------------*/

	
	public List<AmbienteImagem> findAmbienteImagemByAmbienteId( long ambienteId)
	{
		String querySql = "SELECT * FROM ambiente_imagem WHERE ambiente_id = " + ambienteId;

		List<AmbienteImagem> ambienteImagens = jdbcTemplate.query(querySql, new BeanPropertyRowMapper(AmbienteImagem.class));

		return ambienteImagens;
	}

	
	public void insertAmbienteImagem( AmbienteImagem ambienteImagem )
	{
		jdbcTemplate.update(
				"INSERT INTO ambiente_imagem " +
						"(ambiente_id, " +
						"anexo_uuid, " +
						"nome_arquivo, " +
						"created) VALUES (?, ?, ?, ?)",
						ambienteImagem.getAmbiente().getCodigo(),
						ambienteImagem.getAnexoUuid(),
						ambienteImagem.getNomeArquivo(),
						Timestamp.valueOf( LocalDateTime.now(this.fusoHorarioDeSaoPaulo)) );
	}

	
	public void updateAmbienteImagem( AmbienteImagem ambienteImagem )
	{
		jdbcTemplate.update("UPDATE ambiente " +
								"SET " +
								"ambiente_id = ?, " +
								"anexo_uuid = ?, " +
								"nome_arquivo = ?, " +
								"updated = ? " +
								"WHERE codigo = ?",
				ambienteImagem.getAmbiente().getCodigo(),
				ambienteImagem.getAnexoUuid(),
				ambienteImagem.getNomeArquivo(),
				Timestamp.valueOf( LocalDateTime.now(this.fusoHorarioDeSaoPaulo)),
				ambienteImagem.getCodigo());
	}

	
	public void deleteAmbienteImagem( long id)
	{
		jdbcTemplate.update("DELETE from ambiente_imagem WHERE codigo = ? ", id);
	}


}
