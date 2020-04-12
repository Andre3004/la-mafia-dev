package br.com.projeto.portal.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author rodrigo
 */
@Controller
public class NavigationController
{
	@Autowired
	private Environment environment;
	/*-------------------------------------------------------------------
	 * 		 					CONTROLLERS
	 *-------------------------------------------------------------------*/

	/**
	 *
	 */
	@RequestMapping(value = "/")
	public ModelAndView home()
	{
		return new ModelAndView( "home" );
	}

	@RequestMapping(value = "/autenticacao")
	public ModelAndView authentication()
	{
		return new ModelAndView( "index" );
	}

}
