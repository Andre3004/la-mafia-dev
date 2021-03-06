package br.com.projeto.portal.infrastructure.arquivo;


import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.nio.file.Paths;

import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.Setter;

import org.directwebremoting.annotations.DataTransferObject;
import org.directwebremoting.io.FileTransfer;

import br.com.eits.common.infrastructure.file.MimeType;


@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "Arquivo")
public class Arquivo extends AbstractEntity
{

	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/
	/**
	 *
	 */
	private Long id;
	private String uuid;
	private String nomeOriginal;

	/**
	 *
	 */
	private FileTransfer fileTransfer;
	private String rootPath;

	/**
	 *
	 */
	private String mimeType;

	/*-------------------------------------------------------------------
	 *				 		     BEHAVIORS
	 *-------------------------------------------------------------------*/

	/**
	 *
	 * @return
	 */
	public FileTransfer toFileTransfer()
	{
		try
		{
			return new FileTransfer(
					nomeOriginal,
					mimeType != null ? mimeType : MimeType.BIN.value, new FileInputStream( Paths.get( rootPath, uuid ).toFile() ) );
		}
		catch ( FileNotFoundException e )
		{
			throw new IllegalStateException("O arquivo \"" + nomeOriginal
					+ "\" requisitado não existe no sistema de arquivos.", e );
		}
	}

	@Override
	public String toString()
	{
		return "Arquivo{" +
				"uuid='" + uuid + '\'' +
				", nomeOriginal='" + nomeOriginal + '\'' +
				", fileTransfer=" + fileTransfer +
				", rootPath='" + rootPath + '\'' +
				", mimeType='" + mimeType + '\'' +
				", id=" + id +
				", created=" + created +
				", updated=" + updated +
				'}';
	}
}