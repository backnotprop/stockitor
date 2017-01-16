# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table stock (
  id                            bigserial not null,
  symbol                        varchar(255),
  name                          varchar(255),
  type                          varchar(255),
  exchange                      varchar(255),
  constraint pk_stock primary key (id)
);


# --- !Downs

drop table if exists stock cascade;

