package br.com.projeto.portal.domain.entity.usuario;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;

import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;
import org.directwebremoting.annotations.DataTransferObject;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.directwebremoting.io.FileTransfer;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * 
 */
@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "Usuario")
public class Usuario extends AbstractEntity implements UserDetails
{

	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	private Long codigo;

	private String usuario;

	private String email;

	private String senha;

	private String telefone;

	private String cpf;

	private PerfilUsuario perfilUsuario;

	private Boolean situacao;

	private String anexoUuid;

	private String nomeArquivo;

	private Franquia franquia;

	//@Transient
	private FileTransfer anexo;

	private Long franquiaId;

	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/

	public Usuario(){}


	/*-------------------------------------------------------------------
	 *							BEHAVIORS
	 *-------------------------------------------------------------------*/

	/**
	 * Tratamento para quando a conta estiver excluída (é o mesmo que como se estivesse expirada)
	 */
	@Override
	@JsonIgnore
	public boolean isAccountNonExpired()
	{
		return true;
	}

	/**
	 * Tratamento para quando a conta estiver bloqueada, a data de hoje deve estar entra a data de desbloqueio e a data de bloqueio
	 */
	@Override
	@JsonIgnore
	public boolean isAccountNonLocked()
	{
		return true;
	}

	/**
	 * As credenciais estão expiradas quando o usuário foi assinalado para dever alterar a senha (alterarSenha ==true), ou a data de hoje for posterior a data de expiração da senha
	 */
	@Override
	@JsonIgnore
	public boolean isCredentialsNonExpired()
	{
		return true;
	}

	/**
	 *
	 */
	@Override
	@JsonIgnore
	public boolean isEnabled()
	{
		return true;
	}

	/*
	 * (non-Javadoc)
	 * @see
	 * org.springframework.security.core.userdetails.UserDetails#getPassword()
	 */
	@Override
	@JsonIgnore
	public String getPassword()
	{
		return this.senha;
	}

	/*
	 * (non-Javadoc)
	 * @see
	 * org.springframework.security.core.userdetails.UserDetails#getUsername()
	 */
	@Override
	@JsonIgnore
	public String getUsername()
	{
		return this.email;
	}

	/* (non-Javadoc)
	 * @see org.springframework.security.core.userdetails.UserDetails#getAuthorities()
	 */
	@Override
	@JsonIgnore
	public Collection<? extends GrantedAuthority> getAuthorities()
	{
		return new HashSet<>();

	}

}
