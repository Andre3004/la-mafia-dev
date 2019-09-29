package br.com.projeto.portal.domain.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.domain.entity.pagamento.FormaPagamento;
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
@Qualifier("formaPagamentoDao")
public class FormaPagamentoDAO{

	@Autowired
	JdbcTemplate jdbcTemplate;

    private static ZoneId fusoHorarioDeSaoPaulo = ZoneId.of("America/Sao_Paulo");

	
	public FormaPagamento findFormaPagamentoById( Long id)
	{
		String sql = "SELECT * FROM forma_pagamento WHERE codigo = ?";

		FormaPagamento formaPagamento = (FormaPagamento) jdbcTemplate.queryForObject(sql,
				new Object[] { id }, new BeanPropertyRowMapper(FormaPagamento.class));

		return formaPagamento;
	}

	
	public void insertFormaPagamento( FormaPagamento formaPagamento )
	{
		jdbcTemplate.update(
				"INSERT INTO forma_pagamento " +
						"(forma_pagamento, " +
						"situacao, " +
						"created) VALUES (?, ?, ?)",
				formaPagamento.getFormaPagamento(),
				formaPagamento.getSituacao(),
				Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)));
	}

	
	public void updateFormaPagamento( FormaPagamento formaPagamento )
	{
		jdbcTemplate.update("UPDATE forma_pagamento " +
						"SET " +
						"forma_pagamento = ?, " +
						"updated = ?, " +
						"WHERE codigo = ?",
				formaPagamento.getFormaPagamento(),
				Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)),
				formaPagamento.getCodigo());
	}

	public void updateSituacaoFormaPagamento(long id, boolean situacao){
		jdbcTemplate.update("UPDATE forma_pagamento SET situacao = ? WHERE codigo = ?", situacao, id);
	}

	
	public void deleteFormaPagamento(Long codigo){
		jdbcTemplate.update("DELETE from forma_pagamento WHERE codigo = ? ", codigo);
	}


	
	public Page<FormaPagamento> listFormaPagamentoByFilters( String formaPagamento, PageRequest pageable )
	{
		if(pageable == null) pageable = new PageRequest(0, 10);

		if(formaPagamento != null)
			formaPagamento = formaPagamento.replaceAll( "'", "''" );
			
		String rowCountSql = "SELECT count(1) AS row_count FROM forma_pagamento " ;

		int total =
				jdbcTemplate.queryForObject(
						rowCountSql,
						new Object[]{}, (rs, rowNum) -> rs.getInt(1)
				);

		String selectAndFrom = "SELECT * " +
				"FROM forma_pagamento ";

		String where =  "WHERE forma_pagamento LIKE  '%" + formaPagamento + "%' ";


		String pagination = "LIMIT " + pageable.getPageSize() + " " +
				"OFFSET " + pageable.getOffset() + ";";

		String querySql = selectAndFrom + where + pagination;

		List<FormaPagamento> formaPagamentos= jdbcTemplate.query(querySql,new RowMapper<FormaPagamento>(){
			public FormaPagamento mapRow( ResultSet rs, int row) throws SQLException {

				FormaPagamento s=new FormaPagamento();
				s.setCodigo(rs.getLong("codigo"));
				s.setFormaPagamento(rs.getString("forma_pagamento"));
				s.setSituacao(rs.getBoolean("situacao"));
				return s;
			}
		});
		return new PageImpl<>(formaPagamentos, pageable, total);
	}
}