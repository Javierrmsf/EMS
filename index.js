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

function prqu() {

    inquirer

    .prompt({
        name:"first",
        type:"list",
        message: "select activity",
        choices:[
            "view all departments",
            "view all roles",
            "view all employees",
            "add new role",
            "add new employee",
            "update existing employee's role",
        ],
    })

    .then(function(answer){
        switch(answer.first){
            case "view all departments":

                viewalldepartments();

                break;
    
            case "view all roles":

                viewallroles();

                break;
            
            case "view all employees":

                viewallemployees();

                break;
            
            case "add new employee":
                
                addnewemployee();

                break;

            case "add new role":

                addnewrole();

                break;
            
            case "add new department":
            
               addnewdepartment();
               
               break;
            
            case "update existing employee's role":

               updateemployee();
               
               break;
            

        

        }
    });

}