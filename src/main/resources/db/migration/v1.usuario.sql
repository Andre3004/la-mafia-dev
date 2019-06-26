CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE usuario(
	id serial NOT NULL PRIMARY KEY,
	nome varchar(144) NOT NULL,
	email varchar(144) NOT NULL,
	senha varchar(144) NOT NULL,
	telefone varchar(144) NOT NULL,
	cpf varchar(144) NOT NULL,
	perfil_usuario int NOT NULL,
	situacao boolean NOT NULL,
	anexo_uuid varchar(144),
	nome_arquivo varchar(144),
	created TIMESTAMP NOT NULL,
	updated TIMESTAMP
);

CREATE TABLE franquia (
	id serial NOT NULL PRIMARY KEY,
	nome varchar(144) NOT NULL,
	cnpj varchar(144) NOT NULL,
	endereco varchar(144) NOT NULL,
	cidade varchar(144) NOT NULL,
	anexo_uuid varchar(144),
	nome_arquivo varchar(144),
	situacao boolean NOT NULL,
	created TIMESTAMP NOT NULL,
	updated TIMESTAMP
);

CREATE TABLE arquivo (
	id serial PRIMARY KEY,
  created TIMESTAMP NOT NULL,
  updated TIMESTAMP,
  mime_type character varying(255),
  nome_original character varying(255) NOT NULL,
  uuid character varying(255) NOT NULL
);


SET search_path = public, pg_catalog;
