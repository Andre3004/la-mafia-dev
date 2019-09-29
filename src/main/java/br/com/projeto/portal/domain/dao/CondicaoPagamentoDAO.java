package br.com.projeto.portal.domain.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.domain.entity.pagamento.CondicaoPagamento;
import br.com.projeto.portal.domain.entity.pagamento.CondicaoPagamentoParcela;
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
@Qualifier("condicaoPagamentoDao")
public class CondicaoPagamentoDAO
{
	@Autowired
	JdbcTemplate jdbcTemplate;

    private static ZoneId fusoHorarioDeSaoPaulo = ZoneId.of("America/Sao_Paulo");

	@Autowired
	FormaPagamentoDAO formaPagamentoDAO;

	
	public CondicaoPagamento findCondicaoPagamentoById( long id)
	{
		String sql = "SELECT * FROM condicao_pagamento WHERE codigo = ?";

		CondicaoPagamento condicaoPagamento = (CondicaoPagamento) jdbcTemplate.queryForObject(sql,
				new Object[] { id }, new BeanPropertyRowMapper(CondicaoPagamento.class));

		condicaoPagamento.setParcelas( this.findCondicaoPagamentoParcelaById( id ) );
		return condicaoPagamento;
	}

	
	public Long insertCondicaoPagamento( CondicaoPagamento condicaoPagamento )
	{
		String sqlId = "SELECT max(codigo) FROM condicao_pagamento";
		Long returnQuery = jdbcTemplate.queryForObject( sqlId, Long.class );
		Long id = returnQuery == null ? 1 : returnQuery+1;

		jdbcTemplate.update(
				"INSERT INTO condicao_pagamento " +
						"(codigo, " +
						"condicao_pagamento, " +
						"juros, " +
						"multa, " +
						"desconto, " +
						"situacao, " +
						"prazo, " +
						"created) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
				id,
				condicaoPagamento.getCondicaoPagamento(),
				condicaoPagamento.getJuros(),
				condicaoPagamento.getMulta(),
				condicaoPagamento.getDesconto(),
				condicaoPagamento.getSituacao(),
				condicaoPagamento.getPrazo(),
				Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)) );

		return id;
	}

	
	public void updateCondicaoPagamento( CondicaoPagamento condicaoPagamento, List<Long> parcelasExcluidas )
	{
		jdbcTemplate.update("UPDATE condicao_pagamento " +
						"SET " +
						"juros = ?, " +
						"condicao_pagamento = ?, " +
						"multa = ?, " +
						"desconto = ?, " +
						"situacao = ?, " +
						"prazo = ?, " +
						"updated = ? " +
						"WHERE codigo = ?",
				condicaoPagamento.getJuros(),
				condicaoPagamento.getCondicaoPagamento(),
				condicaoPagamento.getMulta(),
				condicaoPagamento.getDesconto(),
				condicaoPagamento.getSituacao(),
				condicaoPagamento.getPrazo(),
				Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)),
				condicaoPagamento.getCodigo());
	}

	
	public void deleteCondicaoPagamento(long id){
		jdbcTemplate.update("DELETE from condicao_pagamento WHERE codigo = ? ", id);
	}

	
	public void updateSituacaoCondicaoPagamento(long id, boolean situacao){
		jdbcTemplate.update("UPDATE condicao_pagamento SET situacao = ? WHERE codigo = ?", situacao, id);
	}

	public Page<CondicaoPagamento> listCondicaoPagamentosByFilters( Long codigo, String condicaoPagamento, PageRequest pageable )
	{
		if(pageable == null) pageable = new PageRequest(0, 10);

		if(condicaoPagamento != null)
			condicaoPagamento = condicaoPagamento.replaceAll( "'", "''" );

		String rowCountSql = "SELECT count(1) AS row_count FROM condicao_pagamento " ;

		int total =
				jdbcTemplate.queryForObject(
						rowCountSql,
						new Object[]{}, (rs, rowNum) -> rs.getInt(1)
				);

		String selectAndFrom = "SELECT * " +
				"FROM condicao_pagamento ";

		String where =  "WHERE condicao_pagamento LIKE  '%" + condicaoPagamento + "%' ";

		where += codigo != null ? "AND codigo = " + codigo + " " : "";

		String pagination = "LIMIT " + pageable.getPageSize() + " " +
				"OFFSET " + pageable.getOffset() + ";";

		String querySql = selectAndFrom + where + pagination;

		List<CondicaoPagamento> condicaoPagamentos = jdbcTemplate.query(querySql,new RowMapper<CondicaoPagamento>(){
			public CondicaoPagamento mapRow( ResultSet rs, int row) throws SQLException {
				CondicaoPagamento e=new CondicaoPagamento();
				e.setCodigo(rs.getLong("codigo"));
				e.setMulta(rs.getDouble("multa"));
				e.setDesconto(rs.getDouble("desconto"));
				e.setSituacao(rs.getBoolean("situacao"));
				e.setCondicaoPagamento(rs.getString("condicao_pagamento"));
				e.setParcelas( findCondicaoPagamentoParcelaById( rs.getLong("codigo") ) );
				return e;
			}
		});
		return new PageImpl<>(condicaoPagamentos, pageable, total);
	}


	/*-------------------------------------------------------------------
	*				     CONDIÇÃO DE PAGAMENTO PARCELAS
	 *-------------------------------------------------------------------*/



	public List<CondicaoPagamentoParcela> findCondicaoPagamentoParcelaById( long condicaoPagamentoId )
	{
		String querySql = "SELECT * FROM condicao_pagamento_parcela WHERE condicao_pagamento_id = " + condicaoPagamentoId +" ;";

		List<CondicaoPagamentoParcela> condicaoPagamentoParcelas = jdbcTemplate.query(querySql, new BeanPropertyRowMapper(CondicaoPagamentoParcela.class));

		condicaoPagamentoParcelas.forEach( condicaoPagamentoParcela -> {
			condicaoPagamentoParcela.setFormaPagamento( formaPagamentoDAO.findFormaPagamentoById( condicaoPagamentoParcela.getFormaPagamentoId() ) );
		});

		return condicaoPagamentoParcelas;
	}

	public void updateCondicaoPagamentoParcela( CondicaoPagamentoParcela condicaoPagamentoParcela )
	{
		jdbcTemplate.update("UPDATE condicao_pagamento_parcela " +
						"SET " +
						"forma_pagamento_id = ?, " +
						"dias = ?, " +
						"porcentagem = ?, " +
						"created = ? " +
						"WHERE parcela = ? AND condicao_pagamento_id = ?",
				condicaoPagamentoParcela.getFormaPagamento().getCodigo(),
				condicaoPagamentoParcela.getDias(),
				condicaoPagamentoParcela.getPorcentagem(),
				Timestamp.valueOf( LocalDateTime.now(this.fusoHorarioDeSaoPaulo) ),
				condicaoPagamentoParcela.getParcela(), condicaoPagamentoParcela.getCondicaoPagamento().getCodigo());
	}


	public void insertCondicaoPagamentoParcela( CondicaoPagamentoParcela condicaoPagamentoParcela )
	{
		jdbcTemplate.update(
				"INSERT INTO condicao_pagamento_parcela " +
						"(condicao_pagamento_id, " +
						"forma_pagamento_id, " +
						"dias, " +
						"porcentagem, " +
						"parcela, " +
						"created) VALUES (?, ?, ?, ?, ?, ?)",
				condicaoPagamentoParcela.getCondicaoPagamento().getCodigo(),
				condicaoPagamentoParcela.getFormaPagamento().getCodigo(),
				condicaoPagamentoParcela.getDias(),
				condicaoPagamentoParcela.getPorcentagem(),
				condicaoPagamentoParcela.getParcela(),
				Timestamp.valueOf( LocalDateTime.now(this.fusoHorarioDeSaoPaulo) ) );
	}


	public void deleteCondicaoPagamentoParcela( long condicaoPagamentoParcelaId, long condicaoPagamentoId)
	{
		jdbcTemplate.update( "DELETE from condicao_pagamento_parcela WHERE parcela = " + condicaoPagamentoParcelaId +" AND "+ " condicao_pagamento_id = " + condicaoPagamentoId +";"   );
	}
}
