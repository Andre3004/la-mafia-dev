CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE pais(
    codigo serial NOT NULL PRIMARY KEY,
    pais varchar(144) NOT NULL UNIQUE,
    sigla varchar(144) NOT NULL,
    ddi varchar(144) NOT NULL unique,
    created TIMESTAMP,
    updated TIMESTAMP,
    situacao boolean NOT NULL
);

CREATE TABLE estado(
    codigo serial NOT NULL PRIMARY KEY,
    estado varchar(144) NOT NULL UNIQUE,
    uf varchar(144) NOT NULL,
    pais_id int references pais(codigo),
    created TIMESTAMP,
    updated TIMESTAMP,
    situacao boolean NOT NULL
);

CREATE TABLE cidade(
    codigo serial NOT NULL PRIMARY KEY,
    cidade varchar(144) NOT NULL UNIQUE,
    ddd varchar(144) NOT NULL,
    estado_id int references estado(codigo) NOT NULL,
    created TIMESTAMP,
    updated TIMESTAMP,
    situacao boolean NOT NULL
);

CREATE TABLE franquia (
    codigo serial NOT NULL PRIMARY KEY,
    franquia varchar(144) UNIQUE NOT NULL,
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
    franquia_id bigint REFERENCES franquia
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
    codigo serial NOT NULL PRIMARY KEY,
    cliente varchar(144) NOT NULL,
    apelido varchar(144),
    cpf varchar(144) NOT NULL unique,
    sexo varchar(144) NOT NULL,
    telefone varchar(144),
    celular varchar(144) NOT NULL,
    email varchar(144),
    endereco varchar(144),
    cidade_id bigint REFERENCES cidade NOT NULL,
    estado_id bigint REFERENCES estado NOT NULL,
    pais_id bigint REFERENCES pais NOT NULL,
    created TIMESTAMP,
    updated TIMESTAMP,
    situacao boolean NOT NULL
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
    unidade_comercial varchar(144),
    codigo_barras varchar(144),
    grupo_produto_id bigint REFERENCES grupo_produto NOT NULL
);

CREATE TABLE forma_pagamento (
    codigo serial PRIMARY KEY,
    created TIMESTAMP NOT NULL,
    updated TIMESTAMP,
    situacao boolean NOT NULL,
    franquia_id bigint REFERENCES franquia NOT NULL,
    forma_pagamento character varying(144) NOT NULL UNIQUE
);

CREATE TABLE condicao_pagamento (
    codigo serial PRIMARY KEY,
    condicao_pagamento character varying(144) NOT NULL UNIQUE,
    franquia_id bigint REFERENCES franquia NOT NULL,
    created TIMESTAMP NOT NULL,
    updated TIMESTAMP,
    juros decimal,
    multa decimal,
    desconto decimal,
    situacao boolean NOT NULL,
    prazo boolean NOT NULL
);

CREATE TABLE fornecedor(
    codigo serial NOT NULL PRIMARY KEY,
    razaoSocial varchar(144) NOT NULL,
    cnpj varchar(144) NOT NULL unique,
    telefone varchar(144) NOT NULL,
    celular varchar(144) NOT NULL,
    endereco varchar(144) NOT NULL,
    numero varchar(144) NOT NULL,
    bairro varchar(144) NOT NULL,
    email varchar(144),
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

CREATE TABLE condicao_pagamento_parcela (
    created TIMESTAMP NOT NULL,
    updated TIMESTAMP,
    condicao_pagamento_id bigint REFERENCES condicao_pagamento NOT NULL,
    forma_pagamento_id bigint REFERENCES forma_pagamento NOT NULL,
    dias int NOT NULL,
    porcentagem decimal NOT NULL,
    parcela int NOT NULL,
    PRIMARY KEY(condicao_pagamento_id, parcela)
);

CREATE TABLE compra(
    created TIMESTAMP NOT NULL,
    updated TIMESTAMP,
    modelo character varying(144) NOT NULL,
    serie character varying(144) NOT NULL,
    numero_nota character varying(144) NOT NULL,
    fornecedor_id bigint REFERENCES fornecedor NOT NULL,
    franquia_id bigint REFERENCES franquia NOT NULL,
    usuario_id bigint REFERENCES usuario,
    condicao_pagamento_id bigint REFERENCES condicao_pagamento NOT NULL,
    data_chegada TIMESTAMP NOT NULL,
    tipo_frete character varying(144) NOT NULL,
    frete character varying(144) NOT NULL,
    seguro character varying(144) NOT NULL,
    despesa character varying(144) NOT NULL,
    situacao boolean NOT NULL,
    data_emissao TIMESTAMP NOT NULL,
    PRIMARY KEY(
        modelo,
        serie,
        numero_nota,
        fornecedor_id,
        franquia_id
    )
);

CREATE TABLE contas_a_pagar(
    created TIMESTAMP NOT NULL,
    updated TIMESTAMP,
    modelo character varying(144) NOT NULL,
    serie character varying(144) NOT NULL,
    numero_nota character varying(144) NOT NULL,
    numero_parcela int NOT NULL,
    fornecedor_id bigint REFERENCES fornecedor NOT NULL,
    franquia_id bigint REFERENCES franquia NOT NULL,
    data_emissao TIMESTAMP NOT NULL,
    --VERIFICAR ESTE CAMPO
    situacao_liquidez boolean,
    desconto decimal,
    juros decimal,
    multa decimal,
    valor_pago decimal,
    data_pagamento TIMESTAMP,
    forma_pagamento_id bigint REFERENCES forma_pagamento,
    data_vencimento TIMESTAMP NOT NULL,
    valor_parcela decimal NOT NULL,
    situacao boolean NOT NULL,
    is_avulso boolean,
    PRIMARY KEY(
        modelo,
        serie,
        numero_nota,
        numero_parcela,
        fornecedor_id,
        franquia_id
    )
);

CREATE TABLE item_compra(
    created TIMESTAMP NOT NULL,
    updated TIMESTAMP,
    modelo character varying(144) NOT NULL,
    serie character varying(144) NOT NULL,
    numero_nota character varying(144) NOT NULL,
    fornecedor_id bigint REFERENCES fornecedor NOT NULL,
    produto_id bigint REFERENCES produto NOT NULL,
    franquia_id bigint REFERENCES franquia NOT NULL,
    quantidade decimal NOT NULL,
    valor_unitario decimal NOT NULL,
    situacao boolean,
    PRIMARY KEY(
        modelo,
        serie,
        numero_nota,
        fornecedor_id,
        produto_id,
        franquia_id
    )
);

CREATE TABLE estoque(
    created TIMESTAMP NOT NULL,
    updated TIMESTAMP,
    franquia_id bigint REFERENCES franquia,
    produto_id bigint REFERENCES produto,
    fornecedor_id bigint REFERENCES fornecedor,
    data_ultima_compra TIMESTAMP,
    saldo int,
    preco_custo decimal NOT NULL,
    preco_venda decimal,
    PRIMARY KEY (franquia_id, produto_id)
);

CREATE TABLE venda(
    created TIMESTAMP NOT NULL,
    updated TIMESTAMP,
    modelo character varying(144) NOT NULL,
    serie character varying(144) NOT NULL,
    numero_nota character varying(144) NOT NULL,
    cliente_id bigint REFERENCES fornecedor NOT NULL,
    franquia_id bigint REFERENCES franquia NOT NULL,
    data_emissao TIMESTAMP NOT NULL,
    usuario_id bigint REFERENCES usuario,
    condicao_pagamento_id bigint REFERENCES condicao_pagamento NOT NULL,
    situacao boolean NOT NULL,
    PRIMARY KEY(
        modelo,
        serie,
        numero_nota,
        cliente_id,
        franquia_id
    )
);

CREATE TABLE item_venda(
    created TIMESTAMP NOT NULL,
    updated TIMESTAMP,
    modelo character varying(144) NOT NULL,
    serie character varying(144) NOT NULL,
    numero_nota character varying(144) NOT NULL,
    produto_id bigint REFERENCES produto NOT NULL,
    cliente_id bigint REFERENCES fornecedor NOT NULL,
    franquia_id bigint REFERENCES franquia NOT NULL,
    quantidade decimal NOT NULL,
    valor_venda decimal NOT NULL,
    situacao boolean,
    PRIMARY KEY(
        modelo,
        serie,
        numero_nota,
        produto_id,
        cliente_id,
        franquia_id
    )
);

CREATE TABLE contas_a_receber(
    created TIMESTAMP NOT NULL,
    updated TIMESTAMP,
    modelo character varying(144) NOT NULL,
    serie character varying(144) NOT NULL,
    numero_nota character varying(144) NOT NULL,
    numero_parcela int NOT NULL,
    cliente_id bigint REFERENCES fornecedor NOT NULL,
    franquia_id bigint REFERENCES franquia NOT NULL,
    data_emissao TIMESTAMP NOT NULL,
    situacao_liquidez boolean,
    desconto decimal,
    juros decimal,
    multa decimal,
    valor_recebido decimal,
    data_recebimento TIMESTAMP,
    forma_pagamento_id bigint REFERENCES forma_pagamento,
    data_vencimento TIMESTAMP NOT NULL,
    valor_parcela decimal NOT NULL,
    situacao boolean NOT NULL,
    is_avulso boolean,
    PRIMARY KEY(
        modelo,
        serie,
        numero_nota,
        numero_parcela,
        cliente_id,
        franquia_id
    )
);

SET
    search_path = public,
    pg_catalog;