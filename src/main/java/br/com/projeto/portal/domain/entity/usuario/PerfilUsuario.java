package br.com.projeto.portal.domain.entity.usuario;

import org.directwebremoting.annotations.DataTransferObject;

@DataTransferObject(type = "enum")
public enum PerfilUsuario
{
	ADMINISTRADOR,
	USUARIO;
}
