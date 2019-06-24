package br.com.projeto.portal.domain.dao.usuario;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.domain.entity.usuario.Usuario;
import br.com.projeto.portal.domain.repository.IUsuarioRepository;
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
@Qualifier("usuarioDao")
public class UsuarioDAO implements IUsuarioRepository
{
	@Autowired
	JdbcTemplate jdbcTemplate;

	@Override
	public Usuario findUsuarioById(long id)
	{
		String sql = "SELECT * FROM usuario WHERE id = ?";

		Usuario usuario = (Usuario) jdbcTemplate.queryForObject(sql,
				new Object[] { id }, new BeanPropertyRowMapper(Usuario.class));

		return usuario;
	}

	@Override
	public void insertUsuario( Usuario usuario )
	{
		jdbcTemplate.update(
				"INSERT INTO usuario " +
						"(nome, " +
						"email, " +
						"senha, " +
						"telefone, " +
						"cpf, " +
						"perfil_usuario, " +
						"situacao, " +
						"anexo_uuid, " +
						"nome_arquivo, " +
						"created) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
				usuario.getNome(),
				usuario.getEmail(),
				usuario.getSenha(),
				usuario.getTelefone(),
				usuario.getCpf(),
				usuario.getPerfilUsuario().ordinal(),
				usuario.getSituacao(),
				usuario.getAnexoUuid(),
				usuario.getNomeArquivo(),
				Timestamp.valueOf(LocalDateTime.now()) );
	}

	@Override
	public void updateUsuario( Usuario usuario )
	{
		jdbcTemplate.update("UPDATE usuario " +
						"SET " +
						"nome = ?, " +
						"email = ?, " +
						"senha = ?, " +
						"telefone = ?, " +
						"cpf = ?, " +
						"perfil_usuario = ?, " +
						"situacao = ?, " +
						"anexo_uuid = ?, " +
						"nome_arquivo = ?, " +
						"updated = ? " +
						"WHERE id = ?",
				usuario.getNome(),
				usuario.getEmail(),
				usuario.getSenha(),
				usuario.getTelefone(),
				usuario.getCpf(),
				usuario.getPerfilUsuario().ordinal(),
				usuario.getSituacao(),
				usuario.getAnexoUuid(),
				usuario.getNomeArquivo(),
				Timestamp.valueOf(LocalDateTime.now()),
				usuario.getId());
	}

	@Override
	public void deleteUsuario(long id){
		jdbcTemplate.update("DELETE from usuario WHERE id = ? ", id);
	}

	@Override
	public void updateSituacaoUsuario(long id, boolean situacao){
		jdbcTemplate.update("UPDATE usuario SET situacao = ? WHERE id = ?", situacao, id);
	}

	@Override
	public Page<Usuario> listUsuariosByFilters( String nome, Boolean situacao, String email, PageRequest pageable )
	{
		if(pageable == null) pageable = new PageRequest(0, 10);

		String rowCountSql = "SELECT count(1) AS row_count FROM usuario " ;

		int total =
				jdbcTemplate.queryForObject(
						rowCountSql,
						new Object[]{}, (rs, rowNum) -> rs.getInt(1)
				);

		String selectAndFrom = "SELECT * " +
							   "FROM usuario ";

		String where =  "WHERE nome LIKE  '%" + nome + "%' AND "+
						"email LIKE  '%" + email + "%' ";

		where += situacao != null ?	"AND situacao = " + situacao + "  " : "";

		String pagination = "LIMIT " + pageable.getPageSize() + " " +
							"OFFSET " + pageable.getOffset() + ";";

		String querySql = selectAndFrom + where + pagination;

		List<Usuario> usuarios = jdbcTemplate.query(querySql,new RowMapper<Usuario>(){
			public Usuario mapRow( ResultSet rs, int row) throws SQLException {
				Usuario e=new Usuario();
				e.setId(rs.getLong(1));
				e.setNome(rs.getString(2));
				e.setEmail(rs.getString(3));
				e.setSituacao(rs.getBoolean(8));
				return e;
			}
		});
		return new PageImpl<>(usuarios, pageable, total);
	}
}
