CREATE DATABASE aula_sesi;
USE aula_sesi;
CREATE TABLE aluno (
id INT NOT NULL PRIMARY KEY auto_increment
nome VARCHAR (67) NOT NULL,
serie INT NOT NULL,
turma CHAR(1)
);

SELECT * FROM aluno;