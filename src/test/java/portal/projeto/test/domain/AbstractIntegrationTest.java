package portal.projeto.test.domain;

import java.util.Locale;

import br.com.projeto.portal.Application;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;



@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = {portal.projeto.test.domain.TestApplication.class, Application.class})
public abstract class AbstractIntegrationTest
{
	/*-------------------------------------------------------------------
	 *                           ATTRIBUTES
	 *-------------------------------------------------------------------*/

	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/

	/*-------------------------------------------------------------------
	 *                           BEHAVIORS
	 *-------------------------------------------------------------------*/

	/**
	 *
	 */
	@Before
	public void beforeTest()
	{
		Locale.setDefault( new Locale( "pt", "BR" ) );
	}
}
