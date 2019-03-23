package br.com.projeto.portal.application.security;

import br.com.projeto.portal.domain.entity.usuario.Usuario;
import br.com.projeto.portal.domain.repository.IUsuarioRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Calendar;
import java.util.logging.Logger;



public class AuthenticationSuccessHandler implements org.springframework.security.web.authentication.AuthenticationSuccessHandler
{
	/**
	 *
	 */
	private static final Logger LOG = Logger.getLogger( AuthenticationSuccessHandler.class.getName() );

	/*-------------------------------------------------------------------
	 * 		 					 ATTRIBUTES
	 *-------------------------------------------------------------------*/
	//Repositories
	/**
	 *
	 */
	@Autowired
	private IUsuarioRepository userRepository;

	/*-------------------------------------------------------------------
	 * 		 					BEHAVIORS
	 *-------------------------------------------------------------------*/

	/* (non-Javadoc)
	 * @see org.springframework.security.web.authentication.AuthenticationSuccessHandler#onAuthenticationSuccess(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, org.springframework.security.core.Authentication)
	 */
	@Override
	public void onAuthenticationSuccess( HttpServletRequest request, HttpServletResponse response, Authentication authentication ) throws IOException, ServletException
	{
		try
		{
			final Usuario usuario = this.userRepository.findOne( ContextHolder.getAuthenticatedUser().getId() );
		//	usuario.setLastLogin( Calendar.getInstance() );
			this.userRepository.save( usuario );

			//add the usuario in the response
			//usuario.setPassword( null );
			//usuario.setEndereco( null );
			response.getWriter().write( new ObjectMapper().writeValueAsString( usuario ) );
		}
		catch ( Exception e )
		{
			e.printStackTrace();
			LOG.severe( "Ocorreu um problema ao atualizar o ultimo login do usuário" );
		}
	}
}
