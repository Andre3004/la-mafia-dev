package br.com.projeto.portal.application.security;

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
	}

	/**
	 * @return
	 */
	public static boolean isAuthenticated()
	{
		final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

		return authentication != null && authentication.getPrincipal() != null && !authentication.getPrincipal().equals("anonymousUser");
	}

	/**
	 * @param alunoId
	 * @param message
	 */
	public static void itsMe( final long alunoId, final String message )
	{
//		if ( !ContextHolder.getAuthenticatedUser().getIsAdministrador() )
//		{
//			Assert.isTrue( !(ContextHolder.getAuthenticatedUser().getId() != alunoId && ContextHolder.getAuthenticatedUser().getPerfil().equals( Perfil.ALUNO )), message );
//		}
	}

	/**
	 * @param alunoId
	 */
	public static void itsMe( final Long alunoId )
	{
		final String message = "Você não tem permissão para atualizar este registro"; // TODO Utilizar o i18n

		Assert.notNull( alunoId, message );

		itsMe( alunoId, message );
	}
}
