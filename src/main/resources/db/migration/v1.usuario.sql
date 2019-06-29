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
	nome varchar(144) UNIQUE NOT NULL ,
	cnpj varchar(144) UNIQUE NOT NULL,
	endereco varchar(144) NOT NULL,
	cidade varchar(144) NOT NULL,
	anexo_uuid varchar(144),
	nome_arquivo varchar(144),
	situacao boolean NOT NULL,
	created TIMESTAMP NOT NULL,
	updated TIMESTAMP,
	codigo varchar (50)
);

CREATE TABLE arquivo (
	id serial PRIMARY KEY,
  created TIMESTAMP NOT NULL,
  updated TIMESTAMP,
  mime_type character varying(255),
  nome_original character varying(255) NOT NULL,
  uuid character varying(255) NOT NULL
);

CREATE TABLE grupo_produto (
	id serial PRIMARY KEY,
	created TIMESTAMP NOT NULL,
	updated TIMESTAMP,
	franquia_id bigint REFERENCES franquia NOT NULL,
	nome character varying(144) UNIQUE NOT NULL,
	anexo_uuid varchar(144),
	nome_arquivo varchar(144),
	exige_ano boolean,
	codigo varchar (50),
	situacao boolean NOT NULL
);


CREATE TABLE produto (
	id serial PRIMARY KEY,
	created TIMESTAMP NOT NULL,
	updated TIMESTAMP,
	nome character varying(144) NOT NULL,
  descricao character varying(144),
	codigo varchar (50),
  ano int,
	situacao boolean NOT NULL,
	anexo_uuid varchar(144),
	nome_arquivo varchar(144),
	estoque int,
	preco_custo decimal NOT NULL,
	preco_venda decimal,
	grupo_produto_id bigint REFERENCES grupo_produto NOT NULL
);


CREATE TABLE ambiente (
  id serial PRIMARY KEY,
	created TIMESTAMP NOT NULL,
	updated TIMESTAMP,
  franquia_id bigint REFERENCES franquia NOT NULL,
	nome character varying(144) UNIQUE NOT NULL,
  descricao character varying(144),
	capacidade_mesas int NOT NULL,
	situacao boolean NOT NULL
);



CREATE TABLE ambiente_imagem (
  id serial PRIMARY KEY,
	created TIMESTAMP NOT NULL,
	updated TIMESTAMP,
  ambiente_id bigint REFERENCES ambiente NOT NULL,
  anexo_uuid varchar(144),
	nome_arquivo varchar(144)
);



CREATE TABLE mesa (
  numero_mesa serial PRIMARY KEY,
	created TIMESTAMP NOT NULL,
	updated TIMESTAMP,
	ambiente_id bigint REFERENCES ambiente NOT NULL,
  quantidade_lugares int NOT NULL,
	situacao boolean NOT NULL
);




SET search_path = public, pg_catalog;
