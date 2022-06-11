const mysql = require("mysql2");

const consoleTable = require("console.table");

const inquirer = require("inquirer");
////////////////////////////////////////////////////

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1266",
    database: "maindatabase"
});