package br.com.projeto.portal.infrastructure.arquivo;


import java.io.File;
import java.io.FileOutputStream;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;
import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.directwebremoting.io.FileTransfer;
import org.springframework.dao.InvalidDataAccessApiUsageException;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

@Repository
public class IArquivoRepositoryImpl implements IArquivoRepository
{
	private final EntityManager entityManager;
	private final Path rootPath;

	public IArquivoRepositoryImpl( EntityManager entityManager )
	{
		this.entityManager = entityManager;
		this.rootPath = Paths.get( "C:/dev/judith/.upload");

		final File folder = this.rootPath.toFile();
		if ( !folder.exists() || !folder.isDirectory() )
		{
			if ( !folder.mkdirs() )
			{
				throw new IllegalStateException( "Não foi possível criar o diretório de armazenamento de arquivos");
			}
		}
	}

	@Override
	public Optional<Arquivo> findByUuid( String uuid )
	{
		try
		{
			return Optional.of( get( uuid ) )
					.map( arquivo ->
					{
						arquivo.setRootPath( rootPath.toString() );
						return arquivo;
					} );
		}
		catch ( Exception e )
		{
			return Optional.empty();
		}
	}

	@Override
	public Arquivo insert( FileTransfer fileTransfer )
	{
		try
		{
			String uuid = UUID.randomUUID().toString();
			Arquivo arquivo = new Arquivo();
			arquivo.setUuid( uuid );
			arquivo.setNomeOriginal( fileTransfer.getFilename() );
			arquivo.setMimeType( fileTransfer.getMimeType() );
			File file = rootPath.resolve( uuid ).toFile();
			Assert.isTrue( !file.exists(), "Um arquivo com este UUID já existe: " + uuid );
			try ( FileOutputStream fileOutputStream = new FileOutputStream( file ) )
			{
				IOUtils.copy( fileTransfer.getInputStream(), fileOutputStream );
			}
			arquivo = entityManager.merge( arquivo );
			arquivo.setRootPath( rootPath.toString() );
			return arquivo;
		}
		catch ( Exception e )
		{
			throw new IllegalStateException( "Não foi possível salvar o arquivo", e );
		}
	}

	@Override
	public Arquivo update( String uuid, FileTransfer fileTransfer )
	{
		try
		{
			File file = rootPath.resolve( uuid ).toFile();
			Assert.isTrue( file.exists(), "Um arquivo com este UUID não existe: " + uuid );
			Assert.isTrue( file.delete(), "O arquivo existente não pôde ser excluído: " + uuid );

			FileOutputStream fileOutputStream = new FileOutputStream( file );
			IOUtils.copy( fileTransfer.getInputStream(), fileOutputStream );
			Arquivo arquivo = get( uuid );
			arquivo.setNomeOriginal( fileTransfer.getFilename() );
			arquivo.setMimeType( fileTransfer.getMimeType() );
			arquivo = entityManager.merge( arquivo );

			arquivo.setRootPath( rootPath.toString() );
			return arquivo;
		}
		catch ( Exception e )
		{
			throw new IllegalStateException( "Não foi possível atualizar o arquivo", e );
		}
	}

	@Override
	public void delete( String uuid )
	{
		try
		{

			Arquivo arquivo = get( uuid );
			if (arquivo != null)
			{

				entityManager.remove( arquivo );
				File file = rootPath.resolve( uuid ).toFile();

				if( file.delete() ) (new IllegalArgumentException("Não foi possível excluir o arquivo em disco para UUID " + uuid )).printStackTrace();

			}
		}
		catch ( NoResultException | InvalidDataAccessApiUsageException e )
		{
			e.printStackTrace();
		}
	}

	private Arquivo get( String uuid )
	{
		try{

			return
					this.entityManager.createQuery( "FROM Arquivo WHERE uuid = :uuid", Arquivo.class )
							.setParameter( "uuid", uuid )
							.getSingleResult();
		}
		catch ( Exception e ){
			e.printStackTrace();
			return null;
		}
	}
}