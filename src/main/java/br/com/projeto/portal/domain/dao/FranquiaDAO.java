package br.com.projeto.portal.domain.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.domain.dao.cidade.CidadeDAO;
import br.com.projeto.portal.domain.dao.estado.EstadoDAO;
import br.com.projeto.portal.domain.dao.pais.PaisDAO;
import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.domain.repository.IFranquiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import java.time.ZoneId;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
@Qualifier("franquiaDao")
public class FranquiaDAO implements IFranquiaRepository
{
	@Autowired
	JdbcTemplate jdbcTemplate;

    private static ZoneId fusoHorarioDeSaoPaulo = ZoneId.of("America/Sao_Paulo");

	@Autowired
	CidadeDAO cidadeDAO;

	@Autowired
	EstadoDAO estadoDAO;

	@Autowired
	PaisDAO paisDAO;

	@Override
	public Franquia findFranquiaById(long id)
	{
		String sql = "SELECT * FROM franquia WHERE codigo = ?";

		Franquia franquia = (Franquia) jdbcTemplate.queryForObject(sql,
				new Object[] { id }, new BeanPropertyRowMapper(Franquia.class));

		franquia.setEstado( estadoDAO.findEstadoById(franquia.getEstadoId()) );
		franquia.setCidade( cidadeDAO.findCidadeById( franquia.getCidadeId()) );
		franquia.setPais( paisDAO.findPaisById( franquia.getPaisId()) );
		return franquia;
	}

	@Override
	public void insertFranquia( Franquia franquia )
	{
		jdbcTemplate.update(
				"INSERT INTO franquia " +
						"(franquia, " +
						"cnpj, " +
						"endereco, " +
						"anexo_uuid, " +
						"nome_arquivo, " +
						"situacao, " +
						"numero, " +
						"complemento, " +
						"bairro, " +
						"cep, " +
						"cidade_id, " +
						"estado_id, " +
						"pais_id, " +
						"telefone, " +
						"created) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
				franquia.getFranquia(),
				franquia.getCnpj(),
				franquia.getEndereco(),
				franquia.getAnexoUuid(),
				franquia.getNomeArquivo(),
				franquia.getSituacao(),
				franquia.getNumero(),
				franquia.getComplemento(),
				franquia.getBairro(),
				franquia.getCep(),
				franquia.getCidade().getIdCidade(),
				franquia.getEstado().getIdEstado(),
				franquia.getPais().getIdPais(),
				franquia.getTelefone(),
				Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)) );
	}

	@Override
	public void updateFranquia( Franquia franquia )
	{
		jdbcTemplate.update("UPDATE franquia " +
						"SET " +
						"franquia = ?, " +
						"cnpj = ?, " +
						"endereco = ?, " +
						"anexo_uuid = ?, " +
						"nome_arquivo = ?, " +
						"situacao = ?, " +
						"numero  = ?, " +
						"complemento  = ?, " +
						"bairro  = ?, " +
						"cep  = ?, " +
						"cidade_id  = ?, " +
						"estado_id  = ?, " +
						"pais_id  = ?, " +
						"telefone = ?, " +
						"updated = ? " +
						"WHERE codigo = ?",
				franquia.getFranquia(),
				franquia.getCnpj(),
				franquia.getEndereco(),
				franquia.getAnexoUuid(),
				franquia.getNomeArquivo(),
				franquia.getSituacao(),
				franquia.getNumero(),
				franquia.getComplemento(),
				franquia.getBairro(),
				franquia.getCep(),
				franquia.getCidade().getIdCidade(),
				franquia.getEstado().getIdEstado(),
				franquia.getPais().getIdPais(),
				franquia.getTelefone(),
				Timestamp.valueOf(LocalDateTime.now(this.fusoHorarioDeSaoPaulo)),
				franquia.getCodigo());
	}

	@Override
	public void deleteFranquia(long id){
		jdbcTemplate.update("DELETE from franquia WHERE codigo = ? ", id);
	}

	@Override
	public void updateSituacaoFranquia(long id, boolean situacao){
		jdbcTemplate.update("UPDATE franquia SET situacao = ? WHERE codigo = ?", situacao, id);
	}

	@Override
	public Page<Franquia> listFranquiasByFilters( String nome, String cnpj, PageRequest pageable )
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

		String where =  "WHERE franquia LIKE  '%" + nome + "%' AND "+
				"cnpj LIKE  '%" + cnpj + "%' ";


		String pagination = "LIMIT " + pageable.getPageSize() + " " +
							 "OFFSET " + pageable.getOffset() + ";";

		String querySql = selectAndFrom + where + pagination;

		List<Franquia> franquias = jdbcTemplate.query(querySql,new RowMapper<Franquia>(){
			public Franquia mapRow( ResultSet rs, int row) throws SQLException {
				Franquia e=new Franquia();
				e.setCodigo(rs.getLong("codigo"));
				e.setFranquia(rs.getString("franquia"));
				e.setCnpj(rs.getString("cnpj"));
				e.setCidade(cidadeDAO.findCidadeById( rs.getInt("cidade_id") ));
				e.setSituacao( rs.getBoolean( "situacao" ) );
				return e;
			}
		});
		return new PageImpl<>(franquias, pageable, total);
	}
}
