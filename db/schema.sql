DROP DATABASE IF EXISTS eat_da_burger_db;
CREATE DATABASE eat_da_burger_db;
USE eat_da_burger_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(100) NOT NULL, 
    devoured BOOLEAN DEFAULT false, 
    PRIMARY KEY(id)
);