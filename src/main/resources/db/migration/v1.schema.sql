CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE pais(
	idPais serial NOT NULL PRIMARY KEY,
	pais varchar(144) NOT NULL UNIQUE,
	sigla varchar(144) NOT NULL,
	ddi varchar(144) NOT NULL unique,
	created TIMESTAMP,
	updated TIMESTAMP,
  situacao boolean NOT NULL
);


CREATE TABLE estado(
	idEstado serial NOT NULL PRIMARY KEY,
	estado varchar(144) NOT NULL UNIQUE,
	uf varchar(144) NOT NULL,
	idPais int  references pais(idPais),
	created TIMESTAMP,
	updated TIMESTAMP,
  situacao boolean NOT NULL
);


CREATE TABLE cidade(
	idCidade serial NOT NULL PRIMARY KEY,
	cidade varchar(144) NOT NULL UNIQUE,
	ddd varchar(144) NOT NULL,
	idEstado int  references estado(idEstado) NOT NULL,
	created TIMESTAMP,
	updated TIMESTAMP,
  situacao boolean NOT NULL
);


CREATE TABLE franquia (
	codigo serial NOT NULL PRIMARY KEY,
	franquia varchar(144) UNIQUE NOT NULL ,
	cnpj varchar(144) UNIQUE NOT NULL,
	endereco varchar(144) NOT NULL,
	anexo_uuid varchar(144),
	nome_arquivo varchar(144),
	situacao boolean NOT NULL,
	numero int,
	complemento varchar(144),
	bairro varchar(144),
	cep varchar(144),
	telefone varchar(144),
	cidade_id int REFERENCES cidade NOT NULL,
	estado_id int REFERENCES estado NOT NULL,
	pais_id int REFERENCES pais NOT NULL,
	created TIMESTAMP NOT NULL,
	updated TIMESTAMP
);



CREATE TABLE usuario(
	codigo serial NOT NULL PRIMARY KEY,
	usuario varchar(144) NOT NULL,
	email varchar(144) NOT NULL,
	senha varchar(144) NOT NULL,
	telefone varchar(144) NOT NULL,
	cpf varchar(144) UNIQUE NOT NULL,
	perfil_usuario int NOT NULL,
	situacao boolean NOT NULL,
	created TIMESTAMP NOT NULL,
	updated TIMESTAMP,
	franquia_id bigint REFERENCES franquia NOT NULL
);

CREATE TABLE arquivo (
	codigo serial PRIMARY KEY,
  created TIMESTAMP NOT NULL,
  updated TIMESTAMP,
  mime_type character varying(255),
  nome_original character varying(255) NOT NULL,
  uuid character varying(255) NOT NULL
);

CREATE TABLE grupo_produto (
	codigo serial PRIMARY KEY,
	created TIMESTAMP NOT NULL,
	updated TIMESTAMP,
	grupo_produto character varying(144) UNIQUE NOT NULL,
	anexo_uuid varchar(144),
	nome_arquivo varchar(144),
	exige_ano boolean,
	situacao boolean NOT NULL
);


CREATE TABLE ambiente (
  codigo serial PRIMARY KEY,
	created TIMESTAMP NOT NULL,
	updated TIMESTAMP,
  franquia_id bigint REFERENCES franquia NOT NULL,
	ambiente character varying(144) UNIQUE NOT NULL,
  descricao character varying(144),
	capacidade_mesas int NOT NULL,
	situacao boolean NOT NULL
);



CREATE TABLE ambiente_imagem (
  codigo serial PRIMARY KEY,
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

CREATE TABLE cliente(
	idCliente serial NOT NULL PRIMARY KEY,
	cliente varchar(144) NOT NULL,
	apelido varchar(144),
	cpf varchar(144) NOT NULL unique,
	sexo varchar(144) NOT NULL,
	telefone varchar(144) ,
	celular varchar(144) NOT NULL,
	email varchar(144) ,
	endereco varchar(144) ,
	cidade_id bigint REFERENCES cidade NOT NULL,
	estado_id bigint REFERENCES estado NOT NULL,
	pais_id bigint REFERENCES pais NOT NULL,
	created TIMESTAMP,
	updated TIMESTAMP,
	situacao boolean NOT NULL
);


CREATE TABLE fornecedor(
	idFornecedor serial NOT NULL PRIMARY KEY,
	razaoSocial varchar(144) NOT NULL,
	cnpj varchar(144) NOT NULL unique,
	telefone varchar(144) NOT NULL ,
	celular varchar(144) NOT NULL,
	endereco varchar(144) NOT NULL,
	numero varchar(144) NOT NULL,
	bairro varchar(144) NOT NULL,
	email varchar(144) ,
	cidade_id bigint REFERENCES cidade NOT NULL,
	estado_id bigint REFERENCES estado NOT NULL,
	pais_id bigint REFERENCES pais NOT NULL,
	condicao_pagamento_id bigint REFERENCES condicao_pagamento NOT NULL,
	cep varchar(144) NOT NULL,
	created TIMESTAMP,
	updated TIMESTAMP,
  situacao boolean NOT NULL,
  inscricao_estadual varchar(144)
);

CREATE TABLE produto (
	codigo serial PRIMARY KEY,
	created TIMESTAMP NOT NULL,
	updated TIMESTAMP,
	produto character varying(144) NOT NULL,
  descricao character varying(144),
  ano int,
	situacao boolean NOT NULL,
	anexo_uuid varchar(144),
	nome_arquivo varchar(144),
	estoque int,
	preco_custo decimal NOT NULL,
	preco_venda decimal,
	unidade_comercial varchar(144),
	codigo_barras varchar(144),
	grupo_produto_id bigint REFERENCES grupo_produto NOT NULL,
	fornecedor_id bigint REFERENCES fornecedor
);


CREATE TABLE grupo_produto_franquia(
  grupo_produto_id bigint REFERENCES grupo_produto NOT NULL,
  franquia_id bigint REFERENCES franquia NOT NULL,
  created TIMESTAMP NOT NULL,
	updated TIMESTAMP,
	PRIMARY KEY(grupo_produto_id, franquia_id)
);



CREATE TABLE forma_pagamento (
	codigo serial PRIMARY KEY,
	created TIMESTAMP NOT NULL,
	updated TIMESTAMP,
	situacao boolean NOT NULL,
	forma_pagamento character varying(144) NOT NULL UNIQUE
);

CREATE TABLE condicao_pagamento (
	codigo serial PRIMARY KEY,
	created TIMESTAMP NOT NULL,
	updated TIMESTAMP,
  juros decimal,
  multa decimal,
  desconto decimal,
  situacao boolean NOT NULL,
	prazo boolean NOT NULL
);

CREATE TABLE condicao_pagamento_parcela (
	codigo serial PRIMARY KEY,
	created TIMESTAMP NOT NULL,
	updated TIMESTAMP,
	condicao_pagamento_id  bigint REFERENCES condicao_pagamento NOT NULL,
  forma_pagamento_id  bigint REFERENCES forma_pagamento NOT NULL,
  dias int NOT NULL,
  porcentagem decimal NOT NULL,
  parcela int NOT NULL
);


SET search_path = public, pg_catalog;
