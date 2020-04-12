package br.com.projeto.portal.infrastructure.arquivo;


import java.io.IOException;
import java.util.Optional;

import org.apache.commons.io.IOUtils;
import org.directwebremoting.annotations.RemoteProxy;
import org.directwebremoting.io.FileTransfer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

@Service
@RemoteProxy
@Transactional
public class ArquivoService
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/
	/**
	 *
	 */
	@Autowired
	private IArquivoRepository arquivoRepository;
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/
	/**
	 * Inser um arquivo e retorna um UUID
	 */
	public String insertArquivo(final FileTransfer fileTransfer)
	{
		Assert.isTrue(fileTransfer != null, "O arquivo não pode ser nulo");

		Arquivo arquivo = arquivoRepository.insert( fileTransfer );
		return arquivo.getUuid();
	}

	/**
	 * @throws IOException
	 *
	 */
	public byte[] findArquivoByUuid(String uuid)
	{
		Optional<Arquivo> opt = arquivoRepository.findByUuid( uuid );
		Arquivo arquivo = opt.orElseThrow(() -> new RuntimeException("Arquivo não encontrado"));
		try
		{
			return IOUtils.toByteArray( arquivo.toFileTransfer().getInputStream());
		} catch (Exception e)
		{
			e.printStackTrace();
		}
		return null;
	}

	/**
	 *
	 */
	public FileTransfer downloadArquivoByUuid(String uuid)
	{
		Optional<Arquivo> opt = arquivoRepository.findByUuid( uuid );
		Arquivo arquivo = opt.orElseThrow(() -> new RuntimeException("Arquivo não encontrado"));
		return arquivo.toFileTransfer();
	}

	/**
	 *
	 */
	public void deleteArquivo(String uuid)
	{
		try{
			arquivoRepository.delete( uuid );

		}
		catch ( Exception e ){
			e.printStackTrace();
		}
	}

}
