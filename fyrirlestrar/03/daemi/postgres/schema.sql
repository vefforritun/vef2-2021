CREATE USER vef2user WITH ENCRYPTED PASSWORD '123';
GRANT ALL PRIVILEGES ON DATABASE vef2 TO vef2user;

CREATE TABLE IF NOT EXISTS people(
  id serial primary key,
  name varchar(64) not null unique,
  text text not null,
  registered boolean not null default false,
  date timestamp with time zone not null
    default current_timestamp
);
