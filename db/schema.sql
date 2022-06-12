DROP DATABASE IF EXISTS maindatabase;
CREATE DATABASE maindatabase;
USE maindatabase;
-------------------------------------------------------
CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL 
);

--------------------------------------------------------

CREATE TABLE roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT
 
);

--------------------------------------------------------

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT

);


USE maindatabase;

INSERT INTO department
    (name)
VALUES
    ('marketing'),
    ('engineering'),
    ('sales');
  
INSERT INTO roles
    (title, salary, department_id)
VALUES
    ('head of marketing', 30000, 1),
    ('Director of engineering', 40000, 2),
    ('Director of sales', 50000, 3);
 

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Robert', 'Jones', 1, NULL),
    ('John', 'Doe', 2, NULL),
    ('Jane', 'Robertson', 3, 1);


