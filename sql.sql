

create table tipoxempleado(
id_te serial primary key,
descri_te varchar(200)
);

insert into tipoxempleado values(1,'Administrador'),(2,'Chef'),(3,'Cajero');

create table empleados(
id_emp serial primary key ,
nom_emp varchar(150),
ape_emp varchar(150),
correo_emp varchar(250),
psw_emp varchar(250),
id_te int references tipoxempleado

);
insert into empleados(nom_emp,ape_emp,correo_emp,psw_emp,id_te) 
values('Andy Robers','Javier Reyes','javier@tektontest.com','andy',2)

('Andy Robers','Javier Reyes','andy@tektontest.com','andy',3);





create table platos(
id_pla serial primary key,
descri text,
foto_pla text,
precio decimal(5,2)
);
insert into platos(descri,foto_pla,precio) values('Arroz con pollo','arroz_pollo.jpg',15.00),
('Chaufa','chaufa.jpg',25.00),
('Aji de Gallina','ajig.jpg',10.00),
('Sopa Casera','sopa.jpg',12.00),
('Adobo','adobo.jpg',13.00)insert into platos(descri,foto_pla,precio) values('Cau Cau','cau.jpg',18.00)

select * from orden;

create table gastos(
id serial primary key,
servicios decimal(5,2),
proveedores decimal(5,2),
personal decimal(5,2),
fecha varchar(150) default now()
);

insert into gastos(servicios,proveedores,personal) values(117.00,200.00,150.00)

create table orden(
id serial primary key,
nro_orden varchar(120),
nomcliente varchar(80),
tipopago char(1),--t ->targeta e ->efectivo
fecha varchar(150) default to_char(now() AT TIME ZONE 'UTC' - interval '5 hours','YYYY-MM-DD HH24:MI:SS'),
estado char(1) default 'c', --C ->Comanda P->Proceso ->Terminado
total decimal(5,2)
);

insert into orden(nro_orden,nomcliente,tipopago)values('Andy Javier Reyes')

select p.*
from ordenxplatos op
inner join orden o
on op.id=o.id
inner join platos p
on op.id_pla=p.id_pla
where op.id=


create table ordenxplatos(
id int references orden,
id_pla int references platos
);


insert into ordenxplatos values(1,1),(1,3)

select p.descri,p.precio, sum(p.precio) from
ordenxplatos op
inner  join platos p
on op.id_pla=p.id_pla
where op.id=1
group by p.descri,p.precio



select o.total monto,(select sum(p.total) from orden p) total,to_char(o.fecha::timestamp,'YYYY-MM-DD')
from orden o
where to_char(o.fecha::timestamp,'YYYY-MM-DD')=to_char(now() AT TIME ZONE 'UTC' - interval '5 hours','YYYY-MM-DD') 




select case
when estado='p' then 'Pendiente'
when estado='t' then 'Terminado'
else 'Comanda'
end tos
from orden

select *from gastos

select (select sum(total) from orden ) total,g.servicios,g.proveedores,g.personal from
 gastos g
 


