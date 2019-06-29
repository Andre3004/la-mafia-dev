package br.com.projeto.portal.domain.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.domain.entity.Ambiente.Ambiente;
import br.com.projeto.portal.domain.entity.Ambiente.AmbienteImagem;
import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.domain.repository.IAmbienteRepository;
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
@Qualifier("ambienteDao")
public class AmbienteDAO implements IAmbienteRepository
{
	@Autowired
	JdbcTemplate jdbcTemplate;

	@Autowired
	FranquiaDAO franquiaDAO;

	@Override
	public Ambiente findAmbienteById( long id)
	{
		String sql = "SELECT * FROM ambiente WHERE id = ?";

		Ambiente ambiente = (Ambiente) jdbcTemplate.queryForObject(sql,
				new Object[] { id }, new BeanPropertyRowMapper(Ambiente.class));

		ambiente.setFranquia( franquiaDAO.findFranquiaById( ambiente.getFranquiaId() ) );
		ambiente.setAmbienteImagems( findAmbienteImagemByAmbienteId( id ) );

		return ambiente;
	}

	@Override
	public Long insertAmbiente( Ambiente ambiente )
	{
		String sqlId = "SELECT max(id) FROM ambiente";
		Long id = jdbcTemplate.queryForObject(sqlId, Long.class)+1;

		jdbcTemplate.update(
				"INSERT INTO ambiente " +
						"(id, " +
						"nome, " +
						"franquia_id, " +
						"descricao, " +
						"capacidade_mesas, " +
						"situacao, " +
						"created) VALUES (?, ?, ?, ?, ?, ?, ?)",
				id,
				ambiente.getNome(),
				ambiente.getFranquia().getId(),
				ambiente.getDescricao(),
				ambiente.getCapacidadeMesas(),
				ambiente.getSituacao(),
				Timestamp.valueOf( LocalDateTime.now()) );

		return id;
	}

	@Override
	public void updateAmbiente( Ambiente ambiente, List<Long> imagensDeletadasIds  )
	{
		jdbcTemplate.update("UPDATE ambiente " +
						"SET " +
						"nome = ?, " +
						"franquia_id = ?, " +
						"descricao = ?, " +
						"capacidade_mesas = ?, " +
						"situacao = ?, " +
						"updated = ? " +
						"WHERE id = ?",
				ambiente.getNome(),
				ambiente.getFranquia().getId(),
				ambiente.getDescricao(),
				ambiente.getCapacidadeMesas(),
				ambiente.getSituacao(),
				Timestamp.valueOf( LocalDateTime.now()),
				ambiente.getId());
	}

	@Override
	public void deleteAmbiente(long id){
		jdbcTemplate.update("DELETE from ambiente WHERE id = ? ", id);
	}

	@Override
	public void updateSituacaoAmbiente(long id, boolean situacao){
		jdbcTemplate.update("UPDATE ambiente SET situacao = ? WHERE id = ?", situacao, id);
	}

	@Override
	public Page<Ambiente> listAmbientesByFilters( String nome, Long franquiaId, PageRequest pageable )
	{
		if(pageable == null) pageable = new PageRequest(0, 10);

		String rowCountSql = "SELECT count(1) AS row_count FROM ambiente " ;

		int total =
				jdbcTemplate.queryForObject(
						rowCountSql,
						new Object[]{}, (rs, rowNum) -> rs.getInt(1)
				);

		String selectAndFrom = "SELECT * " +
				"FROM ambiente ";

		String where =  "WHERE nome LIKE  '%" + nome + "%' ";

		where += franquiaId != null ?	"AND franquia_id = " + franquiaId + "  " : "";


		String pagination = "LIMIT " + pageable.getPageSize() + " " +
				"OFFSET " + pageable.getOffset() + ";";

		String querySql = selectAndFrom + where + pagination;

		List<Ambiente> ambientes = jdbcTemplate.query(querySql,new RowMapper<Ambiente>(){
			public Ambiente mapRow( ResultSet rs, int row) throws SQLException
			{
				Ambiente e=new Ambiente();
				e.setId(rs.getLong(1));
				e.setNome(rs.getString(5));
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

	@Override
	public List<AmbienteImagem> findAmbienteImagemByAmbienteId( long ambienteId)
	{
		String querySql = "SELECT * FROM ambiente_imagem WHERE ambiente_id = " + ambienteId;

		List<AmbienteImagem> ambienteImagens = jdbcTemplate.query(querySql, new BeanPropertyRowMapper(AmbienteImagem.class));

		return ambienteImagens;
	}

	@Override
	public void insertAmbienteImagem( AmbienteImagem ambienteImagem )
	{
		jdbcTemplate.update(
				"INSERT INTO ambiente_imagem " +
						"(ambiente_id, " +
						"anexo_uuid, " +
						"nome_arquivo, " +
						"created) VALUES (?, ?, ?, ?)",
						ambienteImagem.getAmbiente().getId(),
						ambienteImagem.getAnexoUuid(),
						ambienteImagem.getNomeArquivo(),
						Timestamp.valueOf( LocalDateTime.now()) );
	}

	@Override
	public void updateAmbienteImagem( AmbienteImagem ambienteImagem )
	{
		jdbcTemplate.update("UPDATE ambiente " +
								"SET " +
								"ambiente_id = ?, " +
								"anexo_uuid = ?, " +
								"nome_arquivo = ?, " +
								"updated = ? " +
								"WHERE id = ?",
				ambienteImagem.getAmbiente().getId(),
				ambienteImagem.getAnexoUuid(),
				ambienteImagem.getNomeArquivo(),
				Timestamp.valueOf( LocalDateTime.now()),
				ambienteImagem.getId());
	}

	@Override
	public void deleteAmbienteImagem( long id)
	{
		jdbcTemplate.update("DELETE from ambiente_imagem WHERE id = ? ", id);
	}


}
