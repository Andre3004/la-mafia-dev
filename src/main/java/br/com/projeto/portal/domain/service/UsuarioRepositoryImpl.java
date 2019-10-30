package br.com.projeto.portal.domain.service;


import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.TypedQuery;

import br.com.projeto.portal.domain.dao.UsuarioDAO;
import br.com.projeto.portal.domain.entity.usuario.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class UsuarioRepositoryImpl implements UserDetailsService
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/
	/**
	 *
	 */
	private final UsuarioDAO usuarioDAO;

	@Autowired
	public UsuarioRepositoryImpl( UsuarioDAO usuarioDAO )
	{
		this.usuarioDAO = usuarioDAO;
	}

	/*-------------------------------------------------------------------
	 *				 		     BEHAVIORS
	 *-------------------------------------------------------------------*/
	/*
	 * (non-Javadoc)
	 * @see org.springframework.security.core.userdetails.UserDetailsService#loadUserByUsername(java.lang.String)
	 */
	@Override
	public UserDetails loadUserByUsername( String email ) throws UsernameNotFoundException
	{
		try
		{
			Usuario usuario = usuarioDAO.findUsuarioByEmail( email );
			return (UserDetails) usuario;
		}
		catch ( NoResultException e )
		{
			throw new UsernameNotFoundException( "This email '" + email + "' was not found" );
		}
	}
}
