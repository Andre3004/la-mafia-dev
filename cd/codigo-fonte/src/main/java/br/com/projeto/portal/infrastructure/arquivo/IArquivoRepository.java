package br.com.projeto.portal.infrastructure.arquivo;

import java.util.Optional;

import org.directwebremoting.io.FileTransfer;

public interface IArquivoRepository
{
	Optional<Arquivo> findByUuid( String uuid );

	Arquivo insert( FileTransfer fileTransfer );

	Arquivo update( String uuid, FileTransfer fileTransfer );

	void delete( String uuid );
}