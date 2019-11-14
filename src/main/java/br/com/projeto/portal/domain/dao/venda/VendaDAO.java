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
import br.com.projeto.portal.domain.dao.CondicaoPagamentoDAO;
import br.com.projeto.portal.domain.dao.ProdutoDAO;
import br.com.projeto.portal.domain.dao.cliente.ClienteDAO;
import br.com.projeto.portal.domain.entity.produto.Produto;
import br.com.projeto.portal.domain.entity.usuario.PerfilUsuario;
import br.com.projeto.portal.domain.entity.venda.ContasAReceber;
import br.com.projeto.portal.domain.entity.venda.ItemVenda;
import br.com.projeto.portal.domain.entity.venda.Venda;

@Repository
@Qualifier("vendaDAO")
public class VendaDAO
{
	@Autowired
	JdbcTemplate jdbcTemplate;

	private static ZoneId fusoHorarioDeSaoPaulo = ZoneId.of("America/Sao_Paulo");


	@Autowired
	private ClienteDAO clienteDAO;

	@Autowired
	CondicaoPagamentoDAO condicaoPagamentoDAO;

	@Autowired
	ContasAReceberDAO contasAReceberDAO;

	@Autowired
	ProdutoDAO produtoDAO;

	public void insertVenda( Venda venda )
	{
		jdbcTemplate.update(
				"INSERT INTO venda" +
						"(modelo, " +
						"serie, " +
						"numero_nota, " +
						"cliente_id, " +
						"usuario_id, " +
						"condicao_pagamento_id, " +
						"data_emissao, " +
						"situacao, " +
						"franquia_id, " +
						"created) VALUES (?,?,?,?,?,?,?,?,?,?)",
				venda.getModelo(),
				venda.getSerie(),
				venda.getNumeroNota(),
				venda.getCliente().getCodigo(),
				venda.getUsuario().getCodigo(),
				venda.getCondicaoPagamento().getCodigo(),
				Timestamp.valueOf(venda.getDataEmissao()),
				venda.getSituacao(),
				venda.getFranquia().getCodigo(),
				Timestamp.valueOf( LocalDateTime.now(this.fusoHorarioDeSaoPaulo)) );
	}

	public Venda findVendaById( String modelo, String serie, String numNota, Long clienteId, Long franquiaId)
	{
		String sql = "SELECT * FROM venda WHERE modelo = ? AND serie = ? AND numero_nota = ? AND cliente_id = ? AND franquia_id = ? ";

		Venda venda = (Venda) jdbcTemplate.queryForObject(sql,
				new Object[] { modelo,serie,numNota,clienteId, franquiaId }, new BeanPropertyRowMapper(Venda.class));

		venda.setCliente( this.clienteDAO.findClienteById( venda.getClienteId() ) );
		venda.setCondicaoPagamento( this.condicaoPagamentoDAO.findCondicaoPagamentoById( venda.getCondicaoPagamentoId() ) );

		venda.setItensVenda(this.findItemVendaById(modelo,serie,numNota,clienteId, franquiaId));
		venda.setContasAReceber(this.contasAReceberDAO.findContasAReceber(modelo,serie,numNota,clienteId));
		return venda;
	}

	public void updateSituacaoVenda( String modelo, String serie, String numNota, Long clienteId, Long franquiaId, boolean situacao )
	{
		jdbcTemplate.update("UPDATE venda SET situacao = ? WHERE modelo = ? AND serie = ? AND numero_nota = ? AND cliente_id = ? AND franquia_id = ? ", situacao, modelo,serie,numNota,clienteId, franquiaId);
	}

	public Page<Venda> listVendasByFilters( String modelo, String serie, String numNota, Long clienteId, PageRequest pageable )
	{
		if(pageable == null) pageable = new PageRequest(0, 100);

		if(modelo != null)
			modelo = modelo.replaceAll( "'", "''" );
		if(serie != null)
			serie = serie.replaceAll( "'", "''" );
		if(numNota != null)
			numNota = numNota.replaceAll( "'", "''" );

		String rowCountSql = "SELECT count(1) AS row_count FROM venda " ;

		Long total =
				jdbcTemplate.queryForObject(
						rowCountSql,
						new Object[]{}, (rs, rowNum) -> rs.getLong(1)
				);

		String selectAndFrom = "SELECT * " +
				"FROM venda ";


		String where =  "WHERE  franquia_id = "+ ContextHolder.getAuthenticatedUser().getFranquia().getCodigo() +" AND modelo LIKE  '%" + modelo + "%' AND "+
				"serie LIKE  '%" + serie + "%' AND " + "numero_nota LIKE  '%" + numNota + "%' ";

		where += clienteId != null ?  "AND cliente_id = " + clienteId + " ": "";

		String pagination = "LIMIT " + pageable.getPageSize() + " " +
				"OFFSET " + pageable.getOffset() + ";";

		String querySql = selectAndFrom + where + pagination;

		List<Venda> vendas = jdbcTemplate.query(querySql,new RowMapper<Venda>(){
			public Venda mapRow( ResultSet rs, int row) throws SQLException
			{
				Venda c = new Venda();
				c.setModelo(rs.getString("modelo"));
				c.setSerie(rs.getString("serie"));
				c.setNumeroNota(rs.getString("numero_nota"));
				c.setCliente(clienteDAO.findClienteById(rs.getLong("cliente_id")));
				c.setSituacao( rs.getBoolean( "situacao" ) );
				return c;
			}
		});
		return new PageImpl<>(vendas, pageable, total);
	}

	public List<ItemVenda> findItemVendaById( String modelo, String serie, String numNota, Long clienteId, Long franquiaId )
	{
		String querySql = "SELECT * FROM item_venda WHERE modelo = '" + modelo + "' AND  serie = '" + serie + "' AND numero_nota = '" + numNota + "' AND franquia_id = " + franquiaId + " AND cliente_id = " + clienteId + " ;" ;

		List<ItemVenda> itemVendas = jdbcTemplate.query(querySql, new BeanPropertyRowMapper(ItemVenda.class));

		for ( ItemVenda itemVenda : itemVendas )
		{
			Produto produto = this.produtoDAO.findProdutoById( itemVenda.getProdutoId() );
			itemVenda.setProduto( produto.getProduto() );
			itemVenda.setCodigo( produto.getCodigo() );
			itemVenda.setUnidadeComercial( produto.getUnidadeComercial() );
			if(ContextHolder.getAuthenticatedUser().getPerfilUsuario().equals( PerfilUsuario.FRANQUEADO ))
				itemVenda.setCurrentEstoque( produto.getCurrentEstoque() );
		}
		return itemVendas;
	}

	public void insertItemVenda( ItemVenda itemVenda )
	{
		jdbcTemplate.update(
				"INSERT INTO item_venda " +
						"(modelo, " +
						"serie, " +
						"numero_nota, " +
						"cliente_id, " +
						"produto_id, " +
						"quantidade, " +
						"franquia_id, " +
						"valor_venda, " +
						"created) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
				itemVenda.getModelo(),
				itemVenda.getSerie(),
				itemVenda.getNumeroNota(),
				itemVenda.getCliente().getCodigo(),
				itemVenda.getCodigo(),
				itemVenda.getQuantidade(),
				itemVenda.getFranquia().getCodigo(),
				itemVenda.getValorVenda(),
				Timestamp.valueOf( LocalDateTime.now(this.fusoHorarioDeSaoPaulo)));
	}

	public void updateSituacaoItemVenda( ItemVenda itemVenda, Boolean situacao )
	{
		jdbcTemplate.update(
				"UPDATE item_venda SET " +
						"situacao = ? "+
						"WHERE modelo = ? AND " +
						"serie = ? AND " +
						"numero_nota = ? AND " +
						"franquia_id = ? AND " +
						"cliente_id = ? ",
				situacao,

				itemVenda.getModelo(),
				itemVenda.getSerie(),
				itemVenda.getNumeroNota(),
				itemVenda.getFranquiaId(),
				itemVenda.getClienteId());
	}
}
