CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    burger_name VARCHAR(255),
    devoured BOOLEAN
);