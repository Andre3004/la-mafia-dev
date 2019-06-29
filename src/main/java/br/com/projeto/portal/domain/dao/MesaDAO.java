package br.com.projeto.portal.domain.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.domain.entity.mesa.Mesa;
import br.com.projeto.portal.domain.repository.IMesaRepository;
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
@Qualifier("mesaDao")
public class MesaDAO implements IMesaRepository
{
	@Autowired
	JdbcTemplate jdbcTemplate;

	@Autowired
	AmbienteDAO ambienteDAO;

	@Override
	public Mesa findMesaByNumeroMesa( long numeroMesa)
	{
		String sql = "SELECT * FROM mesa WHERE numero_mesa = ?";

		Mesa mesa = (Mesa) jdbcTemplate.queryForObject(sql,
				new Object[] { numeroMesa }, new BeanPropertyRowMapper(Mesa.class));

		mesa.setAmbiente( ambienteDAO.findAmbienteById( mesa.getAmbienteId() ) );
		return mesa;
	}

	@Override
	public void insertMesa( Mesa mesa )
	{
		jdbcTemplate.update(
				"INSERT INTO mesa " +
						"(ambiente_id, " +
						"quantidade_lugares, " +
						"situacao, " +
						"created) VALUES (?, ?, ?, ?)",
				mesa.getAmbiente().getId(),
				mesa.getQuantidadeLugaresMesa(),
				mesa.getSituacao(),
				Timestamp.valueOf( LocalDateTime.now()) );
	}

	@Override
	public void updateMesa( Mesa mesa )
	{
		jdbcTemplate.update("UPDATE mesa " +
						"SET " +
						"ambiente_id = ?, " +
						"quantidade_lugares = ?, " +
						"situacao = ?, " +
						"updated = ? " +
						"WHERE numero_mesa = ?",
				mesa.getAmbiente().getId(),
				mesa.getQuantidadeLugaresMesa(),
				mesa.getSituacao(),
				Timestamp.valueOf( LocalDateTime.now()),
				mesa.getNumeroMesa());
	}

	@Override
	public void deleteMesa(long numeroMesa){
		jdbcTemplate.update("DELETE from mesa WHERE numero_mesa = ? ", numeroMesa);
	}

	@Override
	public void updateSituacaoMesa(long numeroMesa, boolean situacao){
		jdbcTemplate.update("UPDATE mesa SET situacao = ? WHERE numero_mesa = ?", situacao, numeroMesa);
	}

	@Override
	public Page<Mesa> listMesasByFilters( Long numeroMesa, Long ambienteId, PageRequest pageable )
	{
		if(pageable == null) pageable = new PageRequest(0, 10);

		String rowCountSql = "SELECT count(1) AS row_count FROM mesa " ;

		int total =
				jdbcTemplate.queryForObject(
						rowCountSql,
						new Object[]{}, (rs, rowNum) -> rs.getInt(1)
				);

		String selectAndFrom = "SELECT * " +
				"FROM mesa ";

		String where =  "";

		where += numeroMesa != null && ambienteId != null ?	"WHERE numero_mesa = "+numeroMesa+" AND ambiente_id = "+ambienteId+ " " : "";
		where += numeroMesa != null && ambienteId == null ?	"WHERE numero_mesa = "+numeroMesa+" " : "";
		where += numeroMesa == null && ambienteId != null ?	"WHERE ambiente_id = "+ambienteId+ " " : "";

		String pagination = "LIMIT " + pageable.getPageSize() + " " +
				"OFFSET " + pageable.getOffset() + ";";

		String querySql = selectAndFrom + where + pagination;

		List<Mesa> mesas = jdbcTemplate.query(querySql,new RowMapper<Mesa>(){
			public Mesa mapRow( ResultSet rs, int row) throws SQLException
			{
				Mesa e=new Mesa();
				e.setNumeroMesa(rs.getLong("numero_mesa"));
				e.setAmbiente( ambienteDAO.findAmbienteById( rs.getLong("ambiente_id") ));
				e.setSituacao( rs.getBoolean( "situacao" ) );
				return e;
			}
		});
		return new PageImpl<>(mesas, pageable, total);
	}

	@Override
	public List<Mesa> findMesaByAmbienteId( long ambienteId )
	{
		String querySql = "SELECT * FROM mesa WHERE ambiente_id = " + ambienteId;

		List<Mesa> mesas = jdbcTemplate.query(querySql, new BeanPropertyRowMapper(Mesa.class));

		mesas.forEach( mesa -> {
			mesa.setAmbiente(ambienteDAO.findAmbienteById( ambienteId ));
		});

		return mesas;
	}
}
