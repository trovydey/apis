CREATE DATABASE db_links;

USE db_links;

-- TABLE USER
-- all pasword wil be encrypted using SHA1
CREATE TABLE users (
  id INT(11) NOT NULL,
  username VARCHAR(16) NOT NULL,
  password VARCHAR(60) NOT NULL,
  fullname VARCHAR(100) NOT NULL
);

ALTER TABLE users
  ADD PRIMARY KEY (id);

ALTER TABLE users
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;

INSERT INTO users (id, username, password, fullname) 
  VALUES (1, 'john', 'password1', 'John Carter');

SELECT * FROM users;

-- LINKS TABLE
CREATE TABLE links (
  id INT(11) NOT NULL,
  title VARCHAR(150) NOT NULL,
  url VARCHAR(255) NOT NULL,
  description TEXT,
  user_id INT(11),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
);

ALTER TABLE links
  ADD PRIMARY KEY (id);

ALTER TABLE links
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE links;

CREATE TABLE colaborador (
  id INT(11) NOT NULL,
  nombre1 VARCHAR(30) NOT NULL,
  nombre2 VARCHAR(30) ,
  apellidop VARCHAR(30) NOT NULL,
  apellidom VARCHAR(30) NOT NULL,
  fecha_ingreso Date ,
  cargo_actual VARCHAR(50) NOT NULL,
  area VARCHAR (25) ,
  user_id INT(11)
  
);
ALTER TABLE colaborador
  ADD PRIMARY KEY (id);

ALTER TABLE colaborador
ADD FOREIGN KEY (user_id) REFERENCES users(id);


CREATE TABLE datos_personales (
  id INT(11) NOT NULL,
  fecha_nacimiento Date ,
  nacionalidad VARCHAR(10) NOT NULL,
  sexo VARCHAR(10) ,
  telefono BIGINT(11) NOT NULL,
  movil BIGINT(11) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  hijos INT(2),
  edad1 INT(2),
  edad2 INT(2),
  edad3 INT(2),
  edad4 INT(2),
  edad5 INT(2),
  estado_civil VARCHAR(10) NOT NULL,
  conyugue VARCHAR(100),
  documento_identidad VARCHAR(10) NOT NULL,
  rfc VARCHAR(13) NOT NULL,
  curp VARCHAR(18) NOT NULL,
  licenci_conducir VARCHAR(2),
  veiculo VARCHAR(2),
  vivienda VARCHAR(2),
  calle VARCHAR(50) NOT NULL,
  numext VARCHAR(10) NOT NULL,
  numint VARCHAR(10),
  colonia VARCHAR(20),
  municipio VARCHAR(20) NOT NULL,
  cp VARCHAR(10)
  user_id INT(11)
  
);
ALTER TABLE datos_personales
  ADD PRIMARY KEY (id);

ALTER TABLE datos_personales
ADD FOREIGN KEY (user_id) REFERENCES users(id);



CREATE TABLE datos_medicos (
  id INT(11) NOT NULL,
  nss BIGINT(11) NOT NULL,
  pension  VARCHAR(2) NOT NULL,
  fonacot VARCHAR(2) NOT NULL,
  infinavid VARCHAR(2) NOT NULL,
  ncredito VARCHAR(30),
  sgm VARCHAR(10),
  compania VARCHAR(13) ,
  enfermedad1 VARCHAR(50),
  medicamento1 VARCHAR(100),
  dosis1 VARCHAR(50),
  enfermedad2 VARCHAR(50),
  medicamento2 VARCHAR(100),
  dosis2 VARCHAR(50),
  enfermedad3 VARCHAR(50),
  medicamento3 VARCHAR(100),
  dosis3 VARCHAR(50),
  alergia VARCHAR(2),
  cual VARCHAR(50),
  sangre VARCHAR(10),
  contacto1 VARCHAR(30),
  telefono1 BIGINT(11),
  parentesco1 VARCHAR(30),
  contacto2 VARCHAR(30),
  telefono2 BIGINT(11),
  parentesco2 VARCHAR(30),
  contacto3 VARCHAR(30),
  telefono3 BIGINT(11),
  parentesco3 VARCHAR(30),
  vacuna VARCHAR(20),
  vacuna1 date,
  vacuna2 date,
  user_id INT(11)
  
);
ALTER TABLE datos_medicos
  ADD PRIMARY KEY (id);

ALTER TABLE datos_medicos
ADD FOREIGN KEY (user_id) REFERENCES users(id);



CREATE TABLE  academicos(
  id INT(11) NOT NULL,
  estudios VARCHAR(15) NOT NULL,
  escolaridad VARCHAR(15) NOT NULL,
  otro VARCHAR(25),
  soc VARCHAR(15) NOT NULL,
  institucion VARCHAR(25) NOT NULL,
  carrera VARCHAR(30) NOT NULL,
  cedula VARCHAR(2) NOT NULl,
  numero BIGINT(12),
  user_id INT(11)NOT NULl
  
);
ALTER TABLE academicos
  ADD PRIMARY KEY (id);

ALTER TABLE academicos
ADD FOREIGN KEY (user_id) REFERENCES users(id);


CREATE TABLE  bancarios(
  id INT(11) NOT NULL,
  clave BIGINT(18) NOT NULL,
  cuenta BIGINT(12) NOT NULL,
  banco VARCHAR(12) NOT NULL,
  user_id INT(11)NOT NULL
  
);
ALTER TABLE bancarios
  ADD PRIMARY KEY (id);

ALTER TABLE bancarios
ADD FOREIGN KEY (user_id) REFERENCES users(id);

