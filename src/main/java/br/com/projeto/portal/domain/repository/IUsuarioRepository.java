/**
 *
 */
package br.com.projeto.portal.domain.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.projeto.portal.domain.entity.usuario.Usuario;

/**
 * @author Gabriel Putrick
 */
public interface IUsuarioRepository extends JpaRepository<Usuario, Long>
{
	
}
