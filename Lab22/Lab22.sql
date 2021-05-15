Call crearMaterial(50000,`Piedra Negra`,1000,50);

CREATE PROCEDURE `registrarMaterial`
(IN `clave` INT(11), IN `descripcion` VARCHAR(40) CHARSET utf8, IN `precio` FLOAT, IN `impuesto` FLOAT) 
NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
insert into materiales values (clave,descripcion,precio, impuesto)


CREATE PROCEDURE `modificarMaterial`
(IN `pclave` INT(11), IN `pdescripcion` VARCHAR(40) CHARSET utf8, IN `pprecio` FLOAT, IN `pimpuesto` FLOAT) 
NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
update materiales set descripcion=pdescripcion, precio=pprecio,impuesto=pimpuesto
where clave=pclave

CREATE PROCEDURE `eliminarMaterial`
(IN `pclave` INT(11)) 
NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
delete materiales 
where clave=pclave


CREATE PROCEDURE `registrarMaterial`
(IN `rfc` VARCHAR(15), IN `razonsocial` VARCHAR(40) CHARSET utf8) 
NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
insert into proveedores values (clave,descripcion)


CREATE PROCEDURE `modificarProveedores`
(IN `prfc` VARCHAR(15), IN `prazonsocial` VARCHAR(40) CHARSET utf8) 
NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
update proveedores set razonsocial=prazonsocial
where rfc=prfc

CREATE PROCEDURE `eliminarProveedores`
(IN `prfc` VARCHAR(15)) 
NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
delete proveedores 
where rfc=prfc


CREATE PROCEDURE `registrarProyectos`
(IN `numero` INT(11), IN `denominacion` VARCHAR(40) CHARSET utf8) 
NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
insert into proyectos values (numero,denominacion)


CREATE PROCEDURE `modificarProyectos`
(IN `pnumero` INT(11), IN `pdenominacion` VARCHAR(40) CHARSET utf8) 
NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
update proyectos set denominacion=pdenominacion
where numero=pnumero

CREATE PROCEDURE `eliminarProyectos`
(IN `pnumero` INT(11)) 
NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
delete proyectos 
where numero=pnumero