// Main HTML for code
// HTML Generator require:
const generateHTML = require("./src/Team-Generator");

// node modules:
const fs = require("fs");
var inquirer = require("inquirer");

// // team profiles:
const Manager = require("./profiles/Manager");
const Engineer = require("./profiles/Engineer");
const Intern = require("./profiles/Intern");
const Employee = require("./profiles/Employee");

// empty Array for user input about team.
const teamMembers = [];

// //command line prompts:

// start of manager prompts
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the manager of this team?",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email.",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number",
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNum } = managerInput;
      const manager = new Manager(name, id, email, officeNum);
      // push  data to array
      teamMembers.push(manager);
      console.log(manager);
    });
};

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please choose your employee's role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What's the name of the employee?",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the employee's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the employee's email.",
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the employee's github username.",
        when: (input) => input.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the intern's school",
        when: (input) => input.role === "Intern",
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((employeeData) => {
      // data for employee types

      let { name, id, email, role, github, school, confirmAddEmployee } =
        employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);

        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);

        console.log(employee);
      }
      // push data to array
      teamMembers.push(employee);

      if (confirmAddEmployee) {
        return addEmployee(teamMembers);
      } else {
        return teamMembers;
      }
    });
};

// function to generate HTML page file using file system
const writeFile = (data) => {
  fs.writeFile("./html/index.html", data, (err) => {
    // if there is an error it will console log
    if (err) {
      console.log(err);
      return;
      // when html has been created
    } else {
      console.log(
        "Success! Your Team has been created plese go to the html folder to view your index.html"
      );
    }
  });
};
// run functions.
addManager()
  .then(addEmployee)
  .then((teamMembers) => {
    return generateHTML(teamMembers);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
