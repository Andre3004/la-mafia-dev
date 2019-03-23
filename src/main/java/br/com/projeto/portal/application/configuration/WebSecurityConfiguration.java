package br.com.projeto.portal.application.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;

import br.com.projeto.portal.application.security.AuthenticationFailureHandler;
import br.com.projeto.portal.application.security.AuthenticationSuccessHandler;

/**
 * @author rodrigo
 */
@Configuration
@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter
{
	/*-------------------------------------------------------------------
     * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
	/**
	 *
	 */
	@Autowired
	private AuthenticationFailureHandler authenticationFailureHandler;
	/**
	 *
	 */
	@Autowired
	private AuthenticationSuccessHandler authenticationSuccessHandler;

	/*-------------------------------------------------------------------
	 * 		 					 OVERRIDES
	 *-------------------------------------------------------------------*/

	/**
	 *
	 */
	@Override
	protected void configure( HttpSecurity httpSecurity ) throws Exception
	{
		httpSecurity.csrf().disable();
		httpSecurity.headers().frameOptions().disable();

		httpSecurity
				.authorizeRequests().antMatchers( "/**" ).permitAll()
				.anyRequest()
				.authenticated()
				.and()
				.formLogin()
				.usernameParameter( "email" )
				.passwordParameter( "password" )
				.loginPage( "/authentication" )
				.loginProcessingUrl( "/authenticate" )
				.failureHandler( this.authenticationFailureHandler )
				.successHandler( this.authenticationSuccessHandler )
				.permitAll()
				.and()
				.logout()
				.logoutUrl( "/logout" ).logoutSuccessUrl( "/" );

//		httpSecurity
//				.authorizeRequests()
//				.anyRequest()
//				.authenticated()
//				.and()
//				.formLogin()
//				.usernameParameter( "email" )
//				.passwordParameter( "senha" )
//				.loginPage( "/authentication" )
//				.loginProcessingUrl( "/authenticate" )
//				.failureHandler( this.authenticationFailureHandler )
//				.successHandler( this.authenticationSuccessHandler )
//				.permitAll()
//				.and()
//				.logout()
//				.logoutUrl( "/logout" );
	}

	/**
	 * Override this method to configure {@link WebSecurity}. For example, if you wish to
	 * ignore certain requests.
	 */
	@Override
	public void configure( WebSecurity web ) throws Exception
	{
		web.ignoring().antMatchers("/**/favicon.ico", "/static/**", "/modules/**", "/webjars/**", "/broker/**/*.js", "/bundles/**" );
	}
	
	/**
	 * 
	 */
	@Bean
	public UserDetailsService userDetailsService() {
	    return super.userDetailsService();
	}
}