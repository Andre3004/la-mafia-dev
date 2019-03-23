/**
 *
 */
package br.com.projeto.portal.application.configuration;

import java.util.Locale;

import org.directwebremoting.annotations.DataTransferObject;
import org.directwebremoting.spring.DwrClassPathBeanDefinitionScanner;
import org.directwebremoting.spring.DwrSpringServlet;
import org.springframework.beans.factory.support.BeanDefinitionRegistry;
import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.web.servlet.ErrorPage;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ClassPathBeanDefinitionScanner;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.type.filter.AnnotationTypeFilter;
import org.springframework.http.HttpStatus;
import org.springframework.web.filter.ForwardedHeaderFilter;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.i18n.FixedLocaleResolver;

import br.com.eits.common.application.dwr.DwrAnnotationPostProcessor;
import br.com.projeto.portal.application.configuration.settings.DWRSettings;

/**
 * @author rodrigo
 */
@Configuration
public class WebConfiguration extends WebMvcConfigurerAdapter implements EmbeddedServletContainerCustomizer
{
	/*-------------------------------------------------------------------
     * 		 						BEANS
	 *-------------------------------------------------------------------*/
	
	/**
	 * @return
	 */
	@Bean
	public FilterRegistrationBean forwardedHeaderFilter()
	{
		FilterRegistrationBean filterRegBean = new FilterRegistrationBean();
		filterRegBean.setFilter( new ForwardedHeaderFilter() );
		filterRegBean.setOrder( Ordered.HIGHEST_PRECEDENCE );
		return filterRegBean;
	}

	//---------
	// Locale
	//---------

	/**
	 * @return
	 */
	@Bean
	public LocaleResolver localeResolver()
	{
		final FixedLocaleResolver localeResolver = new FixedLocaleResolver();
		localeResolver.setDefaultLocale( new Locale( "pt", "BR" ) );
		return localeResolver;
	}

	//---------
	// DWR
	//---------

	/**
	 * Process all spring beans with @RemoteProxy
	 *
	 * @return
	 */
	@Bean
	public DwrAnnotationPostProcessor dwrAnnotationPostProcessor( ApplicationContext applicationContext )
	{
		final BeanDefinitionRegistry beanDefinitionRegistry = (BeanDefinitionRegistry) applicationContext.getAutowireCapableBeanFactory();
		final ClassPathBeanDefinitionScanner scanner = new DwrClassPathBeanDefinitionScanner( beanDefinitionRegistry );
		scanner.addIncludeFilter( new AnnotationTypeFilter( DataTransferObject.class ) );
		scanner.scan( "br.com.projeto.portal.domain.entity.**" );
		return new DwrAnnotationPostProcessor();
	}

	/**
	 * @return
	 */
	@Bean
	public ServletRegistrationBean dwrSpringServletRegistration( DWRSettings dwrSettings )
	{
		final ServletRegistrationBean registration = new ServletRegistrationBean( new DwrSpringServlet(), "/broker/*" );
		registration.addInitParameter( "debug", String.valueOf( dwrSettings.isDebug() ) );
		registration.addInitParameter( "scriptCompressed", String.valueOf( dwrSettings.isScriptCompressed() ) );
		registration.setName( "dwrSpringServlet" );
		return registration;
	}
	
	/**
	 * 
	 */
	@Override
	public void customize(ConfigurableEmbeddedServletContainer container) {
		container.addErrorPages( new ErrorPage( HttpStatus.NOT_FOUND, "/" ) );
	}

	/*-------------------------------------------------------------------
	 * 		 						OVERRIDES
	 *-------------------------------------------------------------------*/
}