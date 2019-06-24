package br.com.projeto.portal.domain.repository;


import br.com.projeto.portal.domain.entity.usuario.Usuario;
import br.com.projeto.portal.infrastructure.arquivo.Arquivo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IUsuarioRepository
{
	public Usuario findUsuarioById(long id);

	public Page<Usuario> listUsuariosByFilters( String nome, Boolean situacao, String email, PageRequest pageable );

	public void insertUsuario( Usuario usuario );

	public void deleteUsuario(long id);

	public void updateUsuario( Usuario usuario );

	public void updateSituacaoUsuario(long id, boolean situacao);

}
