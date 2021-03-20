

CREATE TABLE Materiales
(
  Clave numeric(5) not null PRIMARY KEY,
  Descripcion varchar(50),
  Costo numeric(8,2)
)


BULK INSERT a1173530.a1173530.[Materiales]
  FROM 'e:\wwwroot\rcortese\materiales.csv'
  WITH
      (
        CODEPAGE = 'ACP',
        FIELDTERMINATOR = ',',
        ROWTERMINATOR = '\n'
      )

SELECT*FROM Materiales;

CREATE TABLE Proveedores
(
  RFC char(13) not null primary key,
  RazonSocial varchar(50),
  
)

BULK INSERT a1173530.a1173530.[Proveedores]
  FROM 'e:\wwwroot\rcortese\proveedores.csv'
  WITH
      (
        CODEPAGE = 'ACP',
        FIELDTERMINATOR = ',',
        ROWTERMINATOR = '\n'
      )

SELECT*FROM Proveedores;


CREATE TABLE Proyectos
(
  Numero numeric(5) not null primary key,
  Denominacion varchar(50),
)

SELECT*FROM Proyectos;

BULK INSERT a1173530.a1173530.[Proyectos]
  FROM 'e:\wwwroot\rcortese\proyectos.csv'
  WITH
      (
        CODEPAGE = 'ACP',
        FIELDTERMINATOR = ',',
        ROWTERMINATOR = '\n'
      )

--Fecha datetime --not null primary key---!
SET DATEFORMAT dmy;
CREATE TABLE Entregan 
(
  Clave numeric(5),
  RFC char(13),
  Numero numeric(5),
  Fecha datetime not null,
  Cantidad numeric(8,2),

  FOREIGN KEY (Clave) REFERENCES Materiales(Clave),
  FOREIGN KEY (RFC) REFERENCES Proveedores(RFC),
  FOREIGN KEY (Numero) REFERENCES Proyectos(Numero)

)

SET DATEFORMAT dmy;
BULK INSERT a1173530.a1173530.[Entregan]
  FROM 'e:\wwwroot\rcortese\entregan.csv'
  WITH
      (
        CODEPAGE = 'ACP',
        FIELDTERMINATOR = ',',
        ROWTERMINATOR = '\n'
      )

SELECT*FROM Entregan;

drop table Entregan;

