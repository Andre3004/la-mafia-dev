/**
 *
 */
package br.com.projeto.portal.domain.service;

import br.com.projeto.portal.domain.repository.IUsuarioRepository;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.portal.domain.entity.usuario.Usuario;

/**
 * @author 
 */
@Service
@RemoteProxy
@Transactional
public class UsuarioService
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	@Autowired
	private IUsuarioRepository usuarioRepository;
	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/


	/**
	 * Método para inserir um usuário
	 * @param usuario
	 * @return
	 */
	public Usuario insertUsuario(Usuario usuario)
	{
		return this.usuarioRepository.save( usuario );
	}

	/**
	 * Método para atualizar um usuário
	 * @param usuario
	 * @return
	 */
	public Usuario updateUsuario(Usuario usuario)
	{
		return this.usuarioRepository.save( this.usuarioRepository.save( usuario ) );
	}

	/**
	 * Método para exlcuir um usuário
	 * @param id
	 */
	public void deleteUsuario(long id)
	{
		this.usuarioRepository.delete( id );
		this.usuarioRepository.flush();
	}

	/**
	 * Método para buscar um usuário pelo id
	 * @param id
	 * @return
	 */
	public Usuario findUsuarioById(long id)
	{
		return this.usuarioRepository.findOne( id );
	}
}
