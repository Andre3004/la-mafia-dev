/**
 *
 */
package br.com.projeto.portal.domain.service;

import java.time.LocalDateTime;

import br.com.projeto.portal.application.security.ContextHolder;
import br.com.projeto.portal.domain.dao.UsuarioDAO;
import br.com.projeto.portal.domain.entity.usuario.PerfilUsuario;
import br.com.projeto.portal.infrastructure.arquivo.Arquivo;
import br.com.projeto.portal.infrastructure.arquivo.ArquivoService;
import br.com.projeto.portal.infrastructure.arquivo.IArquivoRepository;

import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

import com.sun.org.apache.xpath.internal.operations.Bool;

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
	private UsuarioDAO usuarioDao;

	@Autowired
	private IArquivoRepository arquivoRepository;

	@Autowired
	private ArquivoService arquivoService;

	/**
	 * Password encoder
	 */
	@Autowired
	protected PasswordEncoder passwordEncoder;

	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/

	public Page<Usuario> listUsuariosByFilters( String nome, Boolean situacao, String email, PageRequest pageable )
	{
		return this.usuarioDao.listUsuariosByFilters( nome, situacao, email, pageable );
	}


	public Usuario findUsuarioById( long id )
	{
		Usuario usuario = this.usuarioDao.findUsuarioById( id );
		if ( usuario.getAnexoUuid() != null )
		{
			usuario.setAnexo( this.arquivoService.downloadArquivoByUuid( usuario.getAnexoUuid() ) );
		}

		usuario.setSenha( null );

		return usuario;
	}


	public void insertUsuario( Usuario usuario )
	{
		if ( usuario.getAnexo() != null )
		{
			this.insertArquivo( usuario );
		}

		final String encodedPassword = this.passwordEncoder.encode( usuario.getSenha() );

		usuario.setSenha( encodedPassword );

		usuario.setSituacao( true );

		this.usuarioDao.insertUsuario( usuario );
	}


	public void updateUsuario( Usuario usuario )
	{
		if ( usuario.getAnexoUuid() == null && usuario.getAnexo() != null )
		{
			this.insertArquivo( usuario );
		}

		Usuario usuarioSaved = this.usuarioDao.findUsuarioById( usuario.getCodigo() );

		if ( usuario.getSenha() == null || usuario.getSenha().isEmpty() )
		{
			usuario.setSenha( usuarioSaved.getSenha() );
		}
		else
		{
			final String encodedPassword = this.passwordEncoder.encode( usuario.getSenha() );
			usuario.setSenha( encodedPassword );
		}

		usuario.setUpdated( LocalDateTime.now() );

		this.usuarioDao.updateUsuario( usuario );
	}


	public void updateSituacaoUsuario( long id, boolean situacao )
	{
		this.usuarioDao.updateSituacaoUsuario( id, situacao );
	}


	public void deleteUsuario( long id )
	{
		Assert.isTrue( !ContextHolder.getAuthenticatedUser().getCodigo().equals( id ), "Não é possível excluir o seu usuário.");

		Usuario usuario = this.findUsuarioById( id );
		if ( usuario.getAnexoUuid() != null )
		{
			this.removeArquivo( usuario.getAnexoUuid() );
		}

		this.usuarioDao.deleteUsuario( id );
	}

	public Usuario getAuthenticatedUser()
	{
		return ContextHolder.getAuthenticatedUser();
	}

	/*-------------------------------------------------------------------
	 *				 		     ARQUIVO
	 *-------------------------------------------------------------------*/


	public void insertArquivo( Usuario usuario )
	{
		Arquivo arquivo = this.arquivoRepository.insert( usuario.getAnexo() );
		usuario.setAnexoUuid( arquivo.getUuid() );
		usuario.setNomeArquivo( arquivo.getNomeOriginal() );
	}

	public void removeArquivo( String uuid )
	{
		this.arquivoService.deleteArquivo( uuid );
	}

}
