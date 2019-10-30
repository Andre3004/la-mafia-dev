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

import br.com.projeto.portal.application.security.ContextHolder;
import br.com.projeto.portal.domain.dao.fornecedor.FornecedorDAO;
import br.com.projeto.portal.domain.entity.contasApagar.ContasAPagar;
import br.com.projeto.portal.domain.entity.franquia.Franquia;

@Repository
@Qualifier("ContasAPagarDAO")
public class ContasAPagarDAO
{
	@Autowired
	JdbcTemplate jdbcTemplate;

	@Autowired
	FornecedorDAO fornecedorDAO;

	@Autowired
	FormaPagamentoDAO formaPagamentoDAO;

	@Autowired
	FranquiaDAO franquiaDAO;

	private static ZoneId fusoHorarioDeSaoPaulo = ZoneId.of( "America/Sao_Paulo" );

	public List<ContasAPagar> findContasAPagar( String modelo, String serie, String numNota, Long fornecedorId )
	{
		String querySql = "SELECT * FROM contas_a_pagar WHERE modelo = '" + modelo + "' AND  serie = '" + serie + "' AND  franquia_id = '" + ContextHolder.getAuthenticatedUser().getFranquia().getCodigo() + "' AND numero_nota = '" + numNota + "' AND fornecedor_id = " + fornecedorId + " ;" ;

		List<ContasAPagar> contasApagar = jdbcTemplate.query(querySql, new BeanPropertyRowMapper(ContasAPagar.class));

		for ( ContasAPagar contasAPagar : contasApagar )
		{
			contasAPagar.setFormaPagamento( formaPagamentoDAO.findFormaPagamentoById( contasAPagar.getFormaPagamentoId() ) );
			contasAPagar.setFornecedor( fornecedorDAO.findFornecedorById( contasAPagar.getFornecedorId() ) );
			contasAPagar.setFranquia( franquiaDAO.findFranquiaById( contasAPagar.getFranquiaId() ) );
		}

		return contasApagar;
	}

	public ContasAPagar findContaAPagar( String modelo, String serie, String numNota, Long fornecedorId, Integer numeroParcela )
	{
		String querySql = "SELECT * FROM contas_a_pagar WHERE modelo = ? AND serie = ? AND numero_parcela = ? AND franquia_id = ? AND numero_nota = ? AND fornecedor_id = ?";


		ContasAPagar contasAPagar = (ContasAPagar) jdbcTemplate.queryForObject(querySql,
				new Object[] { modelo,serie,numeroParcela,ContextHolder.getAuthenticatedUser().getFranquia().getCodigo(), numNota,fornecedorId }, new BeanPropertyRowMapper(ContasAPagar.class));

		contasAPagar.setFormaPagamento( formaPagamentoDAO.findFormaPagamentoById( contasAPagar.getFormaPagamentoId() ) );
		contasAPagar.setFornecedor( fornecedorDAO.findFornecedorById( contasAPagar.getFornecedorId() ) );
		contasAPagar.setFranquia( franquiaDAO.findFranquiaById( contasAPagar.getFranquiaId() ) );

		return contasAPagar;
	}

	public void insertContaAPagar( ContasAPagar contasAPagar )
	{
		jdbcTemplate.update(
				"INSERT INTO contas_a_pagar " +
						"(modelo, " +
						"serie, " +
						"numero_nota, " +
						"numero_parcela, " +
						"fornecedor_id, " +
						"data_emissao, " +
						"data_vencimento, " +
						"situacao_liquidez, "+
						"desconto, "+
					    "juros, "+
						"multa, "+
						"forma_pagamento_id, "+
						"valor_parcela, " +
						"franquia_id, " +
						"situacao, " +
						"is_avulso, " +
						"created) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
				contasAPagar.getModelo(),
				contasAPagar.getSerie(),
				contasAPagar.getNumeroNota(),
				contasAPagar.getNumeroParcela(),
				contasAPagar.getFornecedor().getCodigo(),
				Timestamp.valueOf(contasAPagar.getDataEmissao().atTime( 0,0,0 )),
				Timestamp.valueOf(contasAPagar.getDataVencimento().atTime( 0,0,0 )),
				contasAPagar.getSituacaoLiquidez(),
				contasAPagar.getDesconto(),
				contasAPagar.getJuros(),
				contasAPagar.getMulta(),
				contasAPagar.getFormaPagamento().getCodigo(),
				contasAPagar.getValorParcela(),
				contasAPagar.getFranquia().getCodigo(),
				true,
				contasAPagar.getIsAvulso(),
				Timestamp.valueOf( LocalDateTime.now(this.fusoHorarioDeSaoPaulo)));
	}

	public void updateContaAPagar( ContasAPagar contasAPagar )
	{
		jdbcTemplate.update(
				"UPDATE contas_a_pagar SET " +
						"desconto = ?, "+
						"juros = ?, "+
						"multa = ?, "+
						"updated = ? " +
						"WHERE modelo = ? AND " +
						"serie = ? AND " +
						"numero_nota = ? AND " +
						"numero_parcela = ? AND " +
						"fornecedor_id = ? ",
				contasAPagar.getDesconto(),
				contasAPagar.getJuros(),
				contasAPagar.getMulta(),
				Timestamp.valueOf( LocalDateTime.now(this.fusoHorarioDeSaoPaulo)),

				contasAPagar.getModelo(),
				contasAPagar.getSerie(),
				contasAPagar.getNumeroNota(),
				contasAPagar.getNumeroParcela(),
				contasAPagar.getFornecedor().getCodigo());
	}

	public void updateSituacaoContaAPagar( ContasAPagar contasAPagar,Boolean situacao )
	{
		jdbcTemplate.update(
				"UPDATE contas_a_pagar SET " +
						"situacao = ? "+
						"WHERE modelo = ? AND " +
						"serie = ? AND " +
						"numero_nota = ? AND " +
						"numero_parcela = ? AND " +
						"franquia_id = ? AND " +
						"fornecedor_id = ? ",
				situacao,

				contasAPagar.getModelo(),
				contasAPagar.getSerie(),
				contasAPagar.getNumeroNota(),
				contasAPagar.getNumeroParcela(),
				contasAPagar.getFranquia().getCodigo(),
				contasAPagar.getFornecedor().getCodigo()
		);
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


		String where =  "WHERE  franquia_id = "+ ContextHolder.getAuthenticatedUser().getFranquia().getCodigo() +" AND modelo LIKE  '%" + modelo + "%' AND "+
				"serie LIKE  '%" + serie + "%' AND " + "numero_nota LIKE  '%" + numNota + "%' ";

		where += fornecedorId != null ?  "AND fornecedor_id = " + fornecedorId + " ": "";

		String pagination = "LIMIT " + pageable.getPageSize() + " " +
				"OFFSET " + pageable.getOffset() + ";";

		String querySql = selectAndFrom + where + pagination;

		List<ContasAPagar> contasAPagar = jdbcTemplate.query(querySql,new RowMapper<ContasAPagar>(){
			public ContasAPagar mapRow( ResultSet rs, int row) throws SQLException
			{
				ContasAPagar c = new ContasAPagar();
				c.setModelo(rs.getString("modelo"));
				c.setSerie(rs.getString("serie"));
				c.setNumeroNota(rs.getString("numero_nota"));
				c.setFornecedor(fornecedorDAO.findFornecedorById(rs.getLong("fornecedor_id")));
				c.setFranquia(franquiaDAO.findFranquiaById(rs.getLong("franquia_id")));
				c.setNumeroParcela(rs.getInt("numero_parcela"));
				c.setSituacao( rs.getBoolean( "situacao" ) );
				c.setIsAvulso( rs.getBoolean( "is_avulso" ) );
				c.setSituacaoLiquidez( rs.getBoolean( "situacao_liquidez" ) );
				return c;
			}
		});
		return new PageImpl<>(contasAPagar, pageable, total);
	}

	public void makePaymentContaAPagar( ContasAPagar contasAPagar, Boolean situacaoLiquidez )
	{
		String querySql = "UPDATE contas_a_pagar " +
     					  "SET situacao_liquidez = ?, data_pagamento = ?, valor_pago = ? " +
						  "WHERE modelo = ? AND serie = ? AND numero_parcela = ? AND franquia_id = ? AND numero_nota = ? AND fornecedor_id = ?";

		jdbcTemplate.update(querySql,   situacaoLiquidez,
										Timestamp.valueOf(contasAPagar.getDataPagamento()),
				                        contasAPagar.getValorPago(),
									    contasAPagar.getModelo(),
										contasAPagar.getSerie(),
										contasAPagar.getNumeroParcela(),
										contasAPagar.getFranquiaId(),
										contasAPagar.getNumeroNota(),
										contasAPagar.getFornecedorId());
	}
}
