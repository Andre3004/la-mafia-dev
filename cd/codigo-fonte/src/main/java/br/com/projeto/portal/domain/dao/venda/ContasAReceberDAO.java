package br.com.projeto.portal.domain.dao.venda;

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
import br.com.projeto.portal.domain.dao.FormaPagamentoDAO;
import br.com.projeto.portal.domain.dao.FranquiaDAO;
import br.com.projeto.portal.domain.dao.cliente.ClienteDAO;
import br.com.projeto.portal.domain.entity.venda.ContasAReceber;
import br.com.projeto.portal.domain.entity.franquia.Franquia;

@Repository
@Qualifier("ContasAReceberDAO")
public class ContasAReceberDAO
{
	@Autowired
	JdbcTemplate jdbcTemplate;

	@Autowired
	ClienteDAO clienteDAO;

	@Autowired
	FormaPagamentoDAO formaPagamentoDAO;

	@Autowired
	FranquiaDAO franquiaDAO;

	private static ZoneId fusoHorarioDeSaoPaulo = ZoneId.of( "America/Sao_Paulo" );

	public List<ContasAReceber> findContasAReceber( String modelo, String serie, String numNota, Long clienteId )
	{
		String querySql = "SELECT * FROM contas_a_receber WHERE modelo = '" + modelo + "' AND  serie = '" + serie + "' AND  franquia_id = '" + ContextHolder.getAuthenticatedUser().getFranquia().getCodigo() + "' AND numero_nota = '" + numNota + "' AND cliente_id = " + clienteId + " ;" ;

		List<ContasAReceber> contasAreceber = jdbcTemplate.query(querySql, new BeanPropertyRowMapper(ContasAReceber.class));

		for ( ContasAReceber contasAReceber : contasAreceber )
		{
			contasAReceber.setFormaPagamento( formaPagamentoDAO.findFormaPagamentoById( contasAReceber.getFormaPagamentoId() ) );
			contasAReceber.setCliente( clienteDAO.findClienteById( contasAReceber.getClienteId() ) );
			contasAReceber.setFranquia( franquiaDAO.findFranquiaById( contasAReceber.getFranquiaId() ) );
		}

		return contasAreceber;
	}

	public ContasAReceber findContaAReceber( String modelo, String serie, String numNota, Long clienteId, Integer numeroParcela )
	{
		String querySql = "SELECT * FROM contas_a_receber WHERE modelo = ? AND serie = ? AND numero_parcela = ? AND franquia_id = ? AND numero_nota = ? AND cliente_id = ?";


		ContasAReceber contasAReceber = (ContasAReceber) jdbcTemplate.queryForObject(querySql,
				new Object[] { modelo,serie,numeroParcela,ContextHolder.getAuthenticatedUser().getFranquia().getCodigo(), numNota,clienteId }, new BeanPropertyRowMapper(ContasAReceber.class));

		contasAReceber.setFormaPagamento( formaPagamentoDAO.findFormaPagamentoById( contasAReceber.getFormaPagamentoId() ) );
		contasAReceber.setCliente( clienteDAO.findClienteById( contasAReceber.getClienteId() ) );
		contasAReceber.setFranquia( franquiaDAO.findFranquiaById( contasAReceber.getFranquiaId() ) );

		return contasAReceber;
	}

	public void insertContaAReceber( ContasAReceber contasAReceber )
	{
		jdbcTemplate.update(
				"INSERT INTO contas_a_receber " +
						"(modelo, " +
						"serie, " +
						"numero_nota, " +
						"numero_parcela, " +
						"cliente_id, " +
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
				contasAReceber.getModelo(),
				contasAReceber.getSerie(),
				contasAReceber.getNumeroNota(),
				contasAReceber.getNumeroParcela(),
				contasAReceber.getCliente().getCodigo(),
				Timestamp.valueOf(contasAReceber.getDataEmissao().atTime( 0,0,0 )),
				Timestamp.valueOf(contasAReceber.getDataVencimento().atTime( 0,0,0 )),
				contasAReceber.getSituacaoLiquidez(),
				contasAReceber.getDesconto(),
				contasAReceber.getJuros(),
				contasAReceber.getMulta(),
				contasAReceber.getFormaPagamento().getCodigo(),
				contasAReceber.getValorParcela(),
				contasAReceber.getFranquia().getCodigo(),
				true,
				contasAReceber.getIsAvulso(),
				Timestamp.valueOf( LocalDateTime.now(this.fusoHorarioDeSaoPaulo)));
	}

	public void updateContaAReceber( ContasAReceber contasAReceber )
	{
		jdbcTemplate.update(
				"UPDATE contas_a_receber SET " +
						"desconto = ?, "+
						"juros = ?, "+
						"multa = ?, "+
						"updated = ? " +
						"WHERE modelo = ? AND " +
						"serie = ? AND " +
						"numero_nota = ? AND " +
						"numero_parcela = ? AND " +
						"cliente_id = ? ",
				contasAReceber.getDesconto(),
				contasAReceber.getJuros(),
				contasAReceber.getMulta(),
				Timestamp.valueOf( LocalDateTime.now(this.fusoHorarioDeSaoPaulo)),

				contasAReceber.getModelo(),
				contasAReceber.getSerie(),
				contasAReceber.getNumeroNota(),
				contasAReceber.getNumeroParcela(),
				contasAReceber.getCliente().getCodigo());
	}

	public void updateSituacaoContaAReceber( ContasAReceber contasAReceber,Boolean situacao )
	{
		jdbcTemplate.update(
				"UPDATE contas_a_receber SET " +
						"situacao = ? "+
						"WHERE modelo = ? AND " +
						"serie = ? AND " +
						"numero_nota = ? AND " +
						"numero_parcela = ? AND " +
						"franquia_id = ? AND " +
						"cliente_id = ? ",
				situacao,

				contasAReceber.getModelo(),
				contasAReceber.getSerie(),
				contasAReceber.getNumeroNota(),
				contasAReceber.getNumeroParcela(),
				contasAReceber.getFranquia().getCodigo(),
				contasAReceber.getCliente().getCodigo()
		);
	}

	public Page<ContasAReceber> listContasAReceberByFilters( String modelo, String serie, String numNota, Long clienteId, PageRequest pageable )
	{
		if(pageable == null) pageable = new PageRequest(0, 100);

		if(modelo != null)
			modelo = modelo.replaceAll( "'", "''" );
		if(serie != null)
			serie = serie.replaceAll( "'", "''" );
		if(numNota != null)
			numNota = numNota.replaceAll( "'", "''" );

		String rowCountSql = "SELECT count(1) AS row_count FROM contas_a_receber " ;

		Long total =
				jdbcTemplate.queryForObject(
						rowCountSql,
						new Object[]{}, (rs, rowNum) -> rs.getLong(1)
				);

		String selectAndFrom = "SELECT * " +
				"FROM contas_a_receber ";


		String where =  "WHERE  franquia_id = "+ ContextHolder.getAuthenticatedUser().getFranquia().getCodigo() +" AND modelo LIKE  '%" + modelo + "%' AND "+
				"serie LIKE  '%" + serie + "%' AND " + "numero_nota LIKE  '%" + numNota + "%' ";

		where += clienteId != null ?  "AND cliente_id = " + clienteId + " ": "";

		String pagination = "ORDER BY created " +
				"LIMIT " + pageable.getPageSize() + " " +
				"OFFSET " + pageable.getOffset() + ";";

		String querySql = selectAndFrom + where + pagination;

		List<ContasAReceber> contasAReceber = jdbcTemplate.query(querySql,new RowMapper<ContasAReceber>(){
			public ContasAReceber mapRow( ResultSet rs, int row) throws SQLException
			{
				ContasAReceber c = new ContasAReceber();
				c.setModelo(rs.getString("modelo"));
				c.setSerie(rs.getString("serie"));
				c.setNumeroNota(rs.getString("numero_nota"));
				c.setCliente(clienteDAO.findClienteById(rs.getLong("cliente_id")));
				c.setFranquia(franquiaDAO.findFranquiaById(rs.getLong("franquia_id")));
				c.setNumeroParcela(rs.getInt("numero_parcela"));
				c.setSituacao( rs.getBoolean( "situacao" ) );
				c.setIsAvulso( rs.getBoolean( "is_avulso" ) );
				c.setSituacaoLiquidez( rs.getBoolean( "situacao_liquidez" ) );
				return c;
			}
		});
		return new PageImpl<>(contasAReceber, pageable, total);
	}

	public void makePaymentContaAReceber( ContasAReceber contasAReceber, Boolean situacaoLiquidez )
	{
		String querySql = "UPDATE contas_a_receber " +
				"SET situacao_liquidez = ?, data_recebimento = ?, valor_recebido = ? " +
				"WHERE modelo = ? AND serie = ? AND numero_parcela = ? AND franquia_id = ? AND numero_nota = ? AND cliente_id = ?";

		jdbcTemplate.update(querySql,   situacaoLiquidez,
				Timestamp.valueOf(contasAReceber.getDataRecebimento()),
				contasAReceber.getValorRecebido(),
				contasAReceber.getModelo(),
				contasAReceber.getSerie(),
				contasAReceber.getNumeroParcela(),
				contasAReceber.getFranquiaId(),
				contasAReceber.getNumeroNota(),
				contasAReceber.getClienteId());
	}
}
