
CREATE database grupo5;
use grupo5;

CREATE TABLE modelos (
	`id_modelo` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(100) NOT NULL
);

CREATE TABLE zapatillas (
	`id_zapatilla` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_modelo` INT NOT NULL UNIQUE,
    `precio` FLOAT NOT NULL,
    `descripcion` VARCHAR(500) NOT NULL,
    `categoria` VARCHAR(100) NOT NULL,
    `foto` VARCHAR(100) NOT NULL,
    `descuento` FLOAT,

    FOREIGN KEY (id_modelo) REFERENCES modelos (id_modelo)
    
);
CREATE TABLE usuarios(
	`id_usuario` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(100) NOT NULL,
    `apellido` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `password` VARCHAR(100) NOT NULL UNIQUE,
    `imagen` VARCHAR(100) NOT NULL,
    `rol` VARCHAR(15)
); 





















