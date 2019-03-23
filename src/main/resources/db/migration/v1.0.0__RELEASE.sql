CREATE SCHEMA IF NOT EXISTS public;
 
CREATE TABLE usuario(
	id serial NOT NULL,
	created TIMESTAMP NOT NULL,
	updated TIMESTAMP
);

SET search_path = public, pg_catalog;
