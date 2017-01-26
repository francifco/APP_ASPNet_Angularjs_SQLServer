create database JCE


use JCE;

create table TBM_Provincia(
idProvincia int identity(1,1) primary key not null,
provincia nvarchar(50) not null
)

create table TBM_Profesion(
	idProfesion int identity(1,1) primary key not null,
	profesion nvarchar(100) not null
)

create table TBM_Estatus(
	idEstatus int identity(1,1) primary key not null,
	Estatus nvarchar(50) not null
)

create table TBM_Sexo(
	idSexo int identity(1,1) primary key not null,
	sexo nvarchar(20) not null
)

create table TBM_Ciudadanos(
	
	idCiudadano int identity(1,1) primary key not null,
	idProvincia int not null,
	idProfesion int not null,
	idEstatus int not null,
	idSexo int not null,
	cedula nvarchar(11) unique not null,
	nombres nvarchar(50) not null,
	apellido1 nvarchar(50) not null,
	appellido2 nvarchar(50) not null,
	fechaNac date not null,
	calle nvarchar(100) not null,
	numero numeric(18,0) not null,
	sector nvarchar(100) not null,
	foto image,

	FOREIGN KEY (idProvincia) REFERENCES TBM_Provincia(idProvincia),
	FOREIGN KEY (idProfesion) REFERENCES TBM_Profesion(idProfesion),
	FOREIGN KEY (idEstatus) REFERENCES TBM_Estatus(idEstatus),
	FOREIGN KEY (idSexo) REFERENCES TBM_Sexo(idSexo)

)


insert into TBM_Provincia(provincia)
values('Azua'), 
('Bahoruco'),  
('Barahona'), 
('Dajabón'),  
('Distrito Nacional'),  
('Duarte'),  
('Elías Piña'),
('El Seibo'), 
('Espaillat'), 
('Moca Hato Mayor'),
('Hermanas Mirabal'),
('Independencia'),  
('La Altagracia'),  
('La Romana'),  
('La Vega'), 
('María Trinidad Sánchez'), 
('Monseñor Nouel'), 
('Monte Cristi'),  
('Monte Plata'),  
('Pedernales'),  
('Peravia, Baní'),
('Puerto Plata'), 
('Samaná'),  
('Sánchez Ramírez'),  
('San Cristóbal'),  
('San José de Ocoa'),  
('San Juan'), 
('San Juan de la Maguana'),
('San Pedro de Macorís'), 
('Santiago'), 
('Sabaneta'),
('Santo Domingo Este'), 
('Distrito Nacional'),
('Santo Domingo Oeste'), 
('Este Valverde'), 
('Mao')

insert into TBM_Profesion(profesion)
values('estudiente'),
('ingeniero'),
('militar'),
('otros')

insert into TBM_Estatus(estatus)
values('soltero'),
('casado'),
('fallecido')

insert into TBM_sexo(sexo)
values('F'),
('M')

insert into TBM_Ciudadanos(idProvincia,idProfesion, idEstatus, idSexo, cedula, nombres, apellido1, appellido2, fechaNac, calle, numero, sector, foto)
values(1,1,1,1,01800695197,'Franscisco Miguel', 'Suero', 'Nin', '1988-11-03', 'Dolly #3', '1', '12 de haina',null),
(34,1,1,1,'01800695597','Moises Suero', 'Suero', 'Nin', '2003-11-03', 'Dolly #3', '1', '12 de haina', null),
(34,1,3,1,'01800695597','Jose Francisco', 'Suero', 'Nin', '1970-11-03', 'Dolly #3', '1', '12 de haina', null),
(34,1,1,1,'01800691297','Gilbert Antonio', 'Ogando', 'Batista', '1988-11-03', 'Dolly #3', '1', '13 de haina', null),
(34,1,1,2,'01802691298','Patricia Benirda', 'Suero', 'Nin', '2000-11-03', 'Dolly #3', '1', '13 de haina', null),
(34,1,1,2,'01800691299','Yenny Carolina', 'Suero', 'Nin', '1988-11-03', 'Dolly #3', '1', '13 de haina', null)



