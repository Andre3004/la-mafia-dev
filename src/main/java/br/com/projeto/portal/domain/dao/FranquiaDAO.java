package br.com.projeto.portal.domain.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.domain.repository.IFranquiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
@Qualifier("franquiaDao")
public class FranquiaDAO implements IFranquiaRepository
{
	@Autowired
	JdbcTemplate jdbcTemplate;

	@Override
	public Franquia findFranquiaById(long id)
	{
		String sql = "SELECT * FROM franquia WHERE id = ?";

		Franquia franquia = (Franquia) jdbcTemplate.queryForObject(sql,
				new Object[] { id }, new BeanPropertyRowMapper(Franquia.class));

		return franquia;
	}

	@Override
	public void insertFranquia( Franquia franquia )
	{
		jdbcTemplate.update(
				"INSERT INTO franquia " +
						"(nome, " +
						"cnpj, " +
						"endereco, " +
						"cidade, " +
						"anexo_uuid, " +
						"nome_arquivo, " +
						"codigo, " +
						"situacao, " +
						"created) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
				franquia.getNome(),
				franquia.getCnpj(),
				franquia.getEndereco(),
				franquia.getCidade(),
				franquia.getAnexoUuid(),
				franquia.getNomeArquivo(),
				franquia.getCodigo(),
				franquia.getSituacao(),
				Timestamp.valueOf(LocalDateTime.now()) );
	}

	@Override
	public void updateFranquia( Franquia franquia )
	{
		jdbcTemplate.update("UPDATE franquia " +
						"SET " +
						"nome = ?, " +
						"cnpj = ?, " +
						"endereco = ?, " +
						"cidade = ?, " +
						"anexo_uuid = ?, " +
						"nome_arquivo = ?, " +
						"codigo = ?, " +
						"situacao = ?, " +
						"updated = ? " +
						"WHERE id = ?",
				franquia.getNome(),
				franquia.getCnpj(),
				franquia.getEndereco(),
				franquia.getCidade(),
				franquia.getAnexoUuid(),
				franquia.getNomeArquivo(),
				franquia.getCodigo(),
				franquia.getSituacao(),
				Timestamp.valueOf(LocalDateTime.now()),
				franquia.getId());
	}

	@Override
	public void deleteFranquia(long id){
		jdbcTemplate.update("DELETE from franquia WHERE id = ? ", id);
	}

	@Override
	public void updateSituacaoFranquia(long id, boolean situacao){
		jdbcTemplate.update("UPDATE franquia SET situacao = ? WHERE id = ?", situacao, id);
	}

	@Override
	public Page<Franquia> listFranquiasByFilters( String nome, String cnpj, String cidade, PageRequest pageable )
	{
		if(pageable == null) pageable = new PageRequest(0, 10);

		String rowCountSql = "SELECT count(1) AS row_count FROM franquia " ;

		int total =
				jdbcTemplate.queryForObject(
						rowCountSql,
						new Object[]{}, (rs, rowNum) -> rs.getInt(1)
				);

		String selectAndFrom = "SELECT * " +
				"FROM franquia ";

		String where =  "WHERE nome LIKE  '%" + nome + "%' AND "+
				"cnpj LIKE  '%" + cnpj + "%' AND "
				+"cidade LIKE  '%" + cidade + "%' ";


		String pagination = "LIMIT " + pageable.getPageSize() + " " +
							 "OFFSET " + pageable.getOffset() + ";";

		String querySql = selectAndFrom + where + pagination;

		List<Franquia> franquias = jdbcTemplate.query(querySql,new RowMapper<Franquia>(){
			public Franquia mapRow( ResultSet rs, int row) throws SQLException {
				Franquia e=new Franquia();
				e.setId(rs.getLong("id"));
				e.setNome(rs.getString("nome"));
				e.setCnpj(rs.getString("cnpj"));
				e.setCidade(rs.getString("cidade"));
				e.setSituacao( rs.getBoolean( "situacao" ) );
				return e;
			}
		});
		return new PageImpl<>(franquias, pageable, total);
	}
}
