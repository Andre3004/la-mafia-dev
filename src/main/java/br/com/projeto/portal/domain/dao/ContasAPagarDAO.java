package br.com.projeto.portal.domain.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import br.com.projeto.portal.domain.dao.fornecedor.FornecedorDAO;
import br.com.projeto.portal.domain.entity.contasApagar.ContasAPagar;

@Repository
@Qualifier("ContasAPagarDAO")
public class ContasAPagarDAO
{
	@Autowired
	JdbcTemplate jdbcTemplate;

	@Autowired
	FornecedorDAO fornecedorDAO;

	private static ZoneId fusoHorarioDeSaoPaulo = ZoneId.of( "America/Sao_Paulo" );

	public List<ContasAPagar> findContasAPagar( String modelo, String serie, String numNota, Long fornecedorId )
	{
		String querySql = "SELECT * FROM contas_a_pagar WHERE modelo = '" + modelo + "' AND  serie = '" + serie + "' AND numero_nota = '" + numNota + "' AND fornecedor_id = " + fornecedorId + " ;" ;

		List<ContasAPagar> contasApagar = jdbcTemplate.query(querySql, new BeanPropertyRowMapper(ContasAPagar.class));

		return contasApagar;
	}

	public void insertContaAPagar( ContasAPagar contasAPagar )
	{
		jdbcTemplate.update(
				"INSERT INTO contas_a_pagar " +
						"(modelo, " +
						"serie, " +
						"numero_nota, " +
						"fornecedor_id, " +
						"franquia_id, " +
						"numero_parcela, " +
						"data_vencimento, " +
						"data_emissao, " +
						"valor_parcela, " +
						"situacao, " +
						"created) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
				contasAPagar.getModelo(),
				contasAPagar.getSerie(),
				contasAPagar.getNumeroNota(),
				contasAPagar.getFornecedor().getCodigo(),
				contasAPagar.getFranquia().getCodigo(),
				contasAPagar.getNumeroParcela(),
				Timestamp.valueOf(contasAPagar.getDataVencimento().atTime( 0,0,0 )),
				Timestamp.valueOf(contasAPagar.getDataEmissao().atTime( 0,0,0 )),
				contasAPagar.getValorParcela(),
				true,
				Timestamp.valueOf( LocalDateTime.now(this.fusoHorarioDeSaoPaulo)));
	}

	public Page<ContasAPagar> listContasAPagarByFilters( String modelo, String serie, String numNota, Long fornecedorId, PageRequest pageable )
	{
		if(pageable == null) pageable = new PageRequest(0, 100);

		if(modelo != null)
			modelo = modelo.replaceAll( "'", "''" );
		if(serie != null)
			serie = serie.replaceAll( "'", "''" );
		if(numNota != null)
			numNota = numNota.replaceAll( "'", "''" );

		String rowCountSql = "SELECT count(1) AS row_count FROM contas_a_pagar " ;

		Long total =
				jdbcTemplate.queryForObject(
						rowCountSql,
						new Object[]{}, (rs, rowNum) -> rs.getLong(1)
				);

		String selectAndFrom = "SELECT * " +
				"FROM contas_a_pagar ";


		String where =  "WHERE modelo LIKE  '%" + modelo + "%' AND "+
				"serie LIKE  '%" + serie + "%' AND " + "numero_nota LIKE  '%" + numNota + "%' ";

		where += fornecedorId != null ?  "AND fornecedor_id = " + fornecedorId + " ": "";

		String pagination = "LIMIT " + pageable.getPageSize() + " " +
				"OFFSET " + pageable.getOffset() + ";";

		String querySql = selectAndFrom + where + pagination;

		List<ContasAPagar> contasAPagar = jdbcTemplate.query(querySql,new RowMapper<ContasAPagar>(){
			public ContasAPagar mapRow( ResultSet rs, int row) throws SQLException
			{
				ContasAPagar c = new ContasAPagar();
				c.setNumeroParcela(rs.getInt("numero_parcela"));
				c.setModelo(rs.getString("modelo"));
				c.setSerie(rs.getString("serie"));
				c.setNumeroNota(rs.getString("numero_nota"));
				c.setFornecedor(fornecedorDAO.findFornecedorById(rs.getLong("fornecedor_id")));
				c.setSituacao( rs.getBoolean( "situacao" ) );
				return c;
			}
		});
		return new PageImpl<>(contasAPagar, pageable, total);
	}
}
