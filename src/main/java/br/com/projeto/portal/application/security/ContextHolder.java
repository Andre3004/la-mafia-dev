package br.com.projeto.portal.application.security;

import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.domain.entity.usuario.PerfilUsuario;
import br.com.projeto.portal.domain.entity.usuario.Usuario;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.Assert;

public class ContextHolder
{
	/*-------------------------------------------------------------------
     * 		 						BEHAVIORS
	 *-------------------------------------------------------------------*/

	/**
	 * @return
	 */
	public static Usuario getAuthenticatedUser()
	{
		final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

		if ( authentication != null && authentication.getPrincipal() instanceof Usuario )
		{
			return (Usuario) authentication.getPrincipal();
		}

		throw new AuthenticationCredentialsNotFoundException( "O usuário não está autenticado" );

//		Usuario usuario = new Usuario();
//		Franquia franquia = new Franquia();
//
//		franquia.setCodigo( 1L );
//
//		usuario.setCodigo( 11L );
//		usuario.setUsuario( "André" );
//		usuario.setPerfilUsuario( PerfilUsuario.FRANQUIADO );
//		usuario.setFranquia( franquia );
//
//		return usuario;
	}

	/**
	 * @return
	 */
	public static boolean isAuthenticated()
	{
		final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

		return authentication != null && authentication.getPrincipal() != null && !authentication.getPrincipal().equals("anonymousUser");
	}
}
