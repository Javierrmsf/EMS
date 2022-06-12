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

function graphic(){
    console.table(grfc);
  
  }

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


function viewalldepartments() {
    var query = "SELECT department.name AS Department, department.id AS Id FROM employees.department ORDER BY department.id asc";
   db.query(query, function (err, res) {
      console.table(res);
      prqu();
    });
  }
  
  function viewallemployees() {
    var query =
      "SELECT department.name AS department, roles.title AS jobtitle, roles.salary, employee.first_name AS name, employee.last_name AS lastname, employee.id, employee.manager_id AS reports_to_employee_with_this_id FROM department INNER JOIN roles ON roles.department_id = department.id INNER JOIN employee ON employee.role_id = roles.id";
    db.query(query, function (err, res) {
      console.table(res);
      prqu();
    });
  }
  
  function viewallroles() {
    var query =
      "SELECT roles.title, roles.id, department.name AS department, roles.salary FROM department INNER JOIN roles ON roles.department_id = department.id;";
    db.query(query, function (err, res) {
      console.table(res);
      prqu();
    });
  }










graphic()
prqu()