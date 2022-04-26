# crudNode
React + Node + PostgresSQL

Client Side to start client React :
commands : npm start

Server Side to start server Express :
commands : npm run dev

Below commands to run at DB (postgresql)

--SQL DDL
create table rawMaterials(
	id serial primary key,
	name varchar(255) not null,
	quantity int not null,
	"user" varchar(255) not null,
	created_date date not null
); 


create table requestsMaterial(
	id serial primary key,
	id_rawMaterials int REFERENCES rawMaterials(id),
	quantity int not null,
	"user" varchar(255) not null
); 

--insert first data 
insert into rawmaterials (name,quantity,"user",created_date) values ('Farinha de Trigo',10,'Fulano','2020-02-01');
insert into rawmaterials (name,quantity,"user",created_date) values ('Mandioca',10,'Hugo','2020-02-01');
select * from requestsMaterial;
