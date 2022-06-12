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
            "add new department",
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

            case "add new department":

                 addnewdepartment();

                break;

            
            case "add new role":

                addnewrole();
    
                 break;


            
            case "add new employee":
                
                addnewemployee();

                break;



            
            case "update existing employee's role":

               updateemployee();
               
               break;
            

        

        }
    });

}


function viewalldepartments() {
    var query = "SELECT department.name AS Department, department.id AS Id FROM maindatabase.department ORDER BY department.id asc";
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

  function addnewdepartment() {
    inquirer
      .prompt([
        {
          name: "departmentname",
          type: "input",
          message: "enter the department's name",
        },
      ])
      .then(function (answer) {
        var query = "INSERT INTO department (name) VALUE (?)";
        db.query(query, answer.departmentname, function (err, res) {
          if (err) throw err;
          console.log("Success");
          prqu();
        });
      });
  }

  function addnewrole() {
    inquirer
      .prompt([
        {
          name: "title",
          type: "input",
          message: "Enter the role's title",
        },
        {
          name: "salary",
          type: "input",
          message: "enter the role's salary",
        },
        {
          name: "department",
          type: "input",
          message:
            "Enter the department ID for this role, make sure the Department ID already exists",
          
        },
      ])
      .then(function (answer) {
        var query =
          "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)";
        db.query(
          query,
          [answer.title, answer.salary, answer.department],
          function (err, res) {
            if (err) throw err;
              console.log("Success");
              prqu();
            }
        )}
      )}

      function addnewemployee() {
        inquirer
          .prompt([
            {
              name: "name",
              type: "input",
              message: "Enter the employee's first name",
            },
            {
              name: "lastname",
              type: "input",
              message: "Enter the employee's last name",
            },
            {
              name: "roleid",
              type: "input",
              message: "enter the employee's role id",
            },
            {
              name: "managerid",
              type: "input",
              message: "enter the employee's manager's id",
            },
          ])
          .then(function (answer) {
            var query =
              "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
            db.query(
    
              query,
              
              [answer.name, answer.lastname, answer.roleid, answer.managerid],
    
              function (err, res) {
                if (err) throw err;
                  console.log("success");
                  prqu();
              }
    
            );
          });
      }
    
      function updateemployee() {
        inquirer
          .prompt([
            {
              name: "employeeid",
              type: "input",
              message: "enter the id of the employee you would like to update",
            },
            {
              name: "newrole",
              type: "input",
              message: "enter the name of the employee's new role",
            },
            {
              name: "salary",
              type: "input",
              message: "enter salary for this position",
            },
            {
              name: "roleid",
              type: "input",
              message: "enter the department number ID",
            },
          ])
          .then(function(answer) {
            var query = "UPDATE roles SET title = ?, salary = ?, department_id = ? WHERE id = ?";
    
    
            /////////////////////////////////////
                db.query(query, [answer.newrole, answer.salary, answer.roleid, parseInt(answer.employeeid)], function(err, res) {
                  if (err) throw (err);
    
    
                  console.log("Success");
                  prqu();
                  })
              }
      )}
    
      const grfc = `
      ░█▀▀░█▄█░█▀█░█░░░█▀█░█░█░█▀▀░█▀▀░░░█▄█░█▀█░█▀█░█▀█░█▀█░█▀█░█▀▀░█▄█░█▀▀░█▀█░▀█▀░░░█▀▀░█░█░█▀▀░▀█▀░█▀▀░█▄█
      ░█▀▀░█░█░█▀▀░█░░░█░█░░█░░█▀▀░█▀▀░░░█░█░█▀█░█░█░█▀█░█░█░█▀█░█░█░█░█░█▀▀░█░█░░█░░░░▀▀█░░█░░▀▀█░░█░░█▀▀░█░█
      ░▀▀▀░▀░▀░▀░░░▀▀▀░▀▀▀░░▀░░▀▀▀░▀▀▀░░░▀░▀░▀░▀░▀░▀░▀░▀░▀░▀░▀░▀░▀▀▀░▀░▀░▀▀▀░▀░▀░░▀░░░░▀▀▀░░▀░░▀▀▀░░▀░░▀▀▀░▀░▀     
    
    
      
    `



graphic()
prqu()