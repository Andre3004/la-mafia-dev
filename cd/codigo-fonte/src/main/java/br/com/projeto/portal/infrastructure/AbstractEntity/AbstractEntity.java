package br.com.projeto.portal.infrastructure.AbstractEntity;

import java.io.Serializable;
import java.time.LocalDateTime;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
public abstract class AbstractEntity implements Serializable
{
	/**
	 *
	 */
	private static final long serialVersionUID = 1L;

	protected LocalDateTime created = LocalDateTime.now();
	protected LocalDateTime updated;




}
