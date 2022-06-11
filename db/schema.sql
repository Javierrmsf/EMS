DROP DATABASE IF EXISTS maindatabase;
CREATE DATABASE maindatabase;
USE maindatabase;

CREATE TABLE department (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) NOT NULL

);


CREATE TABLE roles (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
salary DECIMAL,
department_id INT,
FOREIGN KEY (department_id) REFERENCES department(id)

);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY(role_id) REFERENCES roles(id),
    FOREIGN KEY(manager_id) REFERENCES employee(id)
);