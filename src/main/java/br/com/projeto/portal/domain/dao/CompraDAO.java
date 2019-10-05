package br.com.projeto.portal.domain.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;

import br.com.projeto.portal.domain.dao.CondicaoPagamentoDAO;
import br.com.projeto.portal.domain.dao.UsuarioDAO;
import br.com.projeto.portal.domain.dao.fornecedor.FornecedorDAO;

import br.com.projeto.portal.domain.entity.compra.Compra;
import br.com.projeto.portal.domain.entity.compra.ItemCompra;
import br.com.projeto.portal.domain.entity.contasApagar.ContasAPagar;
import br.com.projeto.portal.domain.entity.produto.Produto;
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
@Qualifier("compraDAO")
public class CompraDAO {

	@Autowired
	JdbcTemplate jdbcTemplate;

	private static ZoneId fusoHorarioDeSaoPaulo = ZoneId.of("America/Sao_Paulo");


	@Autowired
	UsuarioDAO usuarioDAO;

	@Autowired
	FornecedorDAO fornecedorDAO;

	@Autowired
	CondicaoPagamentoDAO condicaoPagamentoDAO;

	@Autowired
	ProdutoDAO produtoDAO;

	@Autowired
	ContasAPagarDAO contasAPagarDAO;
	
	public void insertCompra( Compra compra )
	{
		jdbcTemplate.update(
				"INSERT INTO compra" +
						"(modelo, " +
						"serie, " +
						"numero_nota, " +
						"fornecedor_id, " +
						"usuario_id, " +
						"condicao_pagamento_id, " +
						"data_chegada, " +
						"tipo_frete, " +
						"seguro, " +
						"despesa, " +
						"frete, " +
						"situacao, " +
						"created) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
				compra.getModelo(),
				compra.getSerie(),
				compra.getNumeroNota(),
				compra.getFornecedor().getCodigo(),
				compra.getUsuario().getCodigo(),
				compra.getCondicaoPagamento().getCodigo(),
				Timestamp.valueOf(compra.getDataChegada()),
				compra.getTipoFrete().toString(),
				compra.getSeguro(),
				compra.getDespesa(),
				compra.getFrete(),
				compra.getSituacao(),
				Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)) );
	}

	
	public Compra findCompraById( String modelo, String serie, String numNota, Long fornecedorId)
	{
		String sql = "SELECT * FROM compra WHERE modelo = ? AND serie = ? AND numero_nota = ? AND fornecedor_id = ? ";

		Compra compra = (Compra) jdbcTemplate.queryForObject(sql,
				new Object[] { modelo,serie,numNota,fornecedorId }, new BeanPropertyRowMapper(Compra.class));

		compra.setFornecedor( this.fornecedorDAO.findFornecedorById( compra.getFornecedorId() ) );
		compra.setCondicaoPagamento( this.condicaoPagamentoDAO.findCondicaoPagamentoById( compra.getCondicaoPagamentoId() ) );

		compra.setItensCompra(this.findItemCompraById(modelo,serie,numNota,fornecedorId));
		compra.setContasAPagar(this.contasAPagarDAO.findContasAPagar(modelo,serie,numNota,fornecedorId));
		return compra;
	}



	public void updateSituacaoCompra( String modelo, String serie, String numNota, Long fornecedorId, boolean situacao )
	{
		jdbcTemplate.update("UPDATE compra SET situacao = ? WHERE modelo = ? AND serie = ? AND numero_nota = ? AND fornecedor_id = ?", situacao, modelo,serie,numNota,fornecedorId);
	}

	
	public Page<Compra> listComprasByFilters( String modelo, String serie, String numNota, Long fornecedorId, PageRequest pageable )
	{
		if(pageable == null) pageable = new PageRequest(0, 100);

		if(modelo != null)
			modelo = modelo.replaceAll( "'", "''" );
		if(serie != null)
			serie = serie.replaceAll( "'", "''" );
		if(numNota != null)
			numNota = numNota.replaceAll( "'", "''" );
			
		String rowCountSql = "SELECT count(1) AS row_count FROM compra " ;

		Long total =
				jdbcTemplate.queryForObject(
						rowCountSql,
						new Object[]{}, (rs, rowNum) -> rs.getLong(1)
				);

		String selectAndFrom = "SELECT * " +
				"FROM compra ";


		String where =  "WHERE modelo LIKE  '%" + modelo + "%' AND "+
				"serie LIKE  '%" + serie + "%' AND " + "numero_nota LIKE  '%" + numNota + "%' ";

		where += fornecedorId != null ?  "AND fornecedor_id = " + fornecedorId + " ": "";

		String pagination = "LIMIT " + pageable.getPageSize() + " " +
				"OFFSET " + pageable.getOffset() + ";";

		String querySql = selectAndFrom + where + pagination;

		List<Compra> compras = jdbcTemplate.query(querySql,new RowMapper<Compra>(){
			public Compra mapRow( ResultSet rs, int row) throws SQLException {
				Compra c = new Compra();
				c.setModelo(rs.getString("modelo"));
				c.setSerie(rs.getString("serie"));
				c.setNumeroNota(rs.getString("numero_nota"));
				c.setFornecedor(fornecedorDAO.findFornecedorById(rs.getInt("fornecedor_id")));
				c.setSituacao( rs.getBoolean( "situacao" ) );
				return c;
			}
		});
		return new PageImpl<>(compras, pageable, total);
	}

	public List<ItemCompra> findItemCompraById( String modelo, String serie, String numNota, Long fornecedorId )
	{
		String querySql = "SELECT * FROM item_compra WHERE modelo = '" + modelo + "' AND  serie = '" + serie + "' AND numero_nota = '" + numNota + "' AND fornecedor_id = " + fornecedorId + " ;" ;

		List<ItemCompra> itemCompras = jdbcTemplate.query(querySql, new BeanPropertyRowMapper(ItemCompra.class));

		for ( ItemCompra itemCompra : itemCompras )
		{
			Produto produto = this.produtoDAO.findProdutoById( itemCompra.getProdutoId() );
			itemCompra.setProduto( produto.getProduto() );
			itemCompra.setCodigo( produto.getCodigo() );
			itemCompra.setUnidadeComercial( produto.getUnidadeComercial() );
			itemCompra.setCurrentEstoque( produto.getCurrentEstoque() );
		}
		return itemCompras;
	}

	public void insertItemCompra( ItemCompra itemCompra )
	{
		jdbcTemplate.update(
				"INSERT INTO item_compra " +
						"(modelo, " +
						"serie, " +
						"numero_nota, " +
						"fornecedor_id, " +
						"produto_id, " +
						"quantidade, " +
						"valor_unitario, " +
						"created) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
				itemCompra.getCompra().getModelo(),
				itemCompra.getCompra().getSerie(),
				itemCompra.getCompra().getNumeroNota(),
				itemCompra.getCompra().getFornecedor().getCodigo(),
				itemCompra.getCodigo(),
				itemCompra.getQuantidade(),
				itemCompra.getValorUnitario(),
				Timestamp.valueOf( LocalDateTime.now(this.fusoHorarioDeSaoPaulo)));
	}

	public void updateItemCompra( ItemCompra itemCompra )
	{
		jdbcTemplate.update("UPDATE item_compra " +
						"SET " +
						"produto_id = ?, " +
						"quantidade = ?, " +
						"valor_unitario = ?, " +
						"WHERE modelo = ? AND serie = ? AND numero_nota = ? AND fornecedor_id = ? AND produto_id = ? ",
				itemCompra.getCompra().getModelo(),
				itemCompra.getCompra().getSerie(),
				itemCompra.getCompra().getNumeroNota(),
				itemCompra.getCompra().getFornecedor().getCodigo(),
				itemCompra.getCodigo(),
				itemCompra.getQuantidade(),
				itemCompra.getValorUnitario(),
				itemCompra.getCompra().getModelo(),
				itemCompra.getCompra().getSerie(),
				itemCompra.getCompra().getNumeroNota(),
				itemCompra.getCompra().getFornecedor().getCodigo(),
				itemCompra.getCodigo());
	}



}

