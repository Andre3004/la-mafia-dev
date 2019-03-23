/**
 *
 */
package br.com.projeto.portal.application.restful;

import br.com.eits.common.application.i18n.ResourceBundleMessageSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Locale;
import java.util.Properties;

/**
 * @author rodrigo
 */
@RestController
public class DefaultResource
{
	/*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
	/**
	 *
	 */
	@Autowired
	private ResourceBundleMessageSource messageSource;

	/*-------------------------------------------------------------------
	 * 		 					RESOURCES
	 *-------------------------------------------------------------------*/

	/**
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = "/bundles", method = RequestMethod.GET)
	public Properties listMessageBundles( Locale locale )
	{
		return this.messageSource.getProperties( locale );
	}
}
