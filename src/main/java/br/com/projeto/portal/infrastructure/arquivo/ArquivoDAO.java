package br.com.projeto.portal.infrastructure.arquivo;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
@Qualifier("ArquivoDAO")
public class ArquivoDAO
{

	@Autowired
	JdbcTemplate jdbcTemplate;

	
	public Arquivo findArquivoById(long id)
	{
		String sql = "SELECT * FROM arquivo WHERE id = ?";

		Arquivo arquivo = (Arquivo) jdbcTemplate.queryForObject(sql,
				new Object[] { id }, new BeanPropertyRowMapper(Arquivo.class));

		return arquivo;
	}

	public Arquivo findArquivoByUuid(String uuid)
	{
		String sql = "SELECT * FROM arquivo WHERE uuid = ?";

		Arquivo arquivo = (Arquivo) jdbcTemplate.queryForObject(sql,
				new Object[] { uuid }, new BeanPropertyRowMapper(Arquivo.class));

		return arquivo;
	}

	
	public void insertArquivo( Arquivo arquivo )
	{
		jdbcTemplate.update(
				"INSERT INTO arquivo " +
						"(mime_type, " +
						"nome_original, " +
						"uuid, " +
						"created) VALUES (?, ?, ?, ?)",
				arquivo.getMimeType(),
				arquivo.getNomeOriginal(),
				arquivo.getUuid(),
				Timestamp.valueOf( LocalDateTime.now() ) );
	}

	public Long getLastId(){
		return jdbcTemplate.queryForObject(
				"SELECT MAX(ID) FROM arquivo;", Long.class);
	}


	public void updateArquivo( Arquivo arquivo )
	{
		jdbcTemplate.update("UPDATE arquivo " +
						"SET " +
						"mime_type = ?, " +
						"nome_original = ?, " +
						"uuid = ?, " +
						"updated = ? " +
						"WHERE id = ?",
				arquivo.getMimeType(),
				arquivo.getNomeOriginal(),
				arquivo.getUuid(),
				Timestamp.valueOf(LocalDateTime.now()),
				arquivo.getId());
	}

	public void deleteArquivo(long id){
		jdbcTemplate.update("DELETE from arquivo WHERE id = ? ", id);
	}
}
