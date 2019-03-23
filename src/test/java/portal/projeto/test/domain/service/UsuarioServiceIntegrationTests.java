package portal.projeto.test.domain.service;

import portal.projeto.test.domain.AbstractIntegrationTest;

import br.com.projeto.portal.domain.service.UsuarioService;
import static org.junit.Assert.*;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;


/**
 *
 */
public class UsuarioServiceIntegrationTests extends AbstractIntegrationTest
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	/**
	 *
	 */
	@Autowired
	private UsuarioService usuarioService;
	/*-------------------------------------------------------------------
	 *				 		     TESTS
	 *-------------------------------------------------------------------*/


	@Test
	@Sql({
			"/dataset/usuario/usuario.sql",
	})
//	@WithUserDetails("admin@admin.com")
	public void insertUsuarioMustPass()
	{
		Assert.assertTrue( this.usuarioService.findUsuarioById( 1000 ).getNome().equals( "André" ) );
	}

	@Test( expected = IllegalArgumentException.class )
	@Sql({
			"/dataset/usuario/usuario.sql",
	})
//	@WithUserDetails("admin@admin.com")
	public void insertUsuarioMustFail()
	{

		Assert.fail();
	}
}