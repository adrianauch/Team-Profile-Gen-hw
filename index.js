// HTML Generator:
const HTML = require("./src/Team-Generator");

// node modules
const fs = require("fs");
var inquirer = require("inquirer");

// // team profiles:
const Manager = require("./profiles/Manager");
const Engineer = require("./profiles/Engineer");
const Intern = require("./profiles/Intern");
const Employee = require("./profiles/Employee");

// empty Array for team
const teamMembers = [];

// //command line prompts

// Manager Prompts
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Who is the Manager of this team?",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter the Manager's ID.",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Manager's email?",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter the Manger's office number.",
        name: "officeNum",
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamMembers.push(manager);
      console.log(manager);
    });
};

//Adding Employee
const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Please select the employees role:",
        choices: ["Engineer", "Intern"],
        name: "role",
      },
      {
        type: "input",
        message: "Please enter the name of the employee.",
        name: "name",
      },
      {
        type: "input",
        message: "What is the employee's email?",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter the employes ID Number.",
        name: "id",
      },
      {
        // Question should only populate when user selects engineer as the employee role.

        type: "input",
        message: "Please enter the employee's github username.",
        name: "github",
        when: (input) => input.role === "Engineer",
      },
      {
        // Question should only populate when user selects intern as the employee role.
        type: "input",
        message: "Please enter in the interns current school.",
        name: "school",
        when: (input) => input.role === "Intern",
      },
      {
        type: "choice",
        message: "would you like to add anymore team memebers?",
        name: "additionalEmployee",
      },
    ])
    .then((employeeData) => {
      let { name, id, email, role, github, school, additionalEmployee } =
        employeeData;
      let employee;
      if (role === "Engineer") {
        // pass agurments for engineer
        employee = new Engineer(name, id, email, github);
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }
      teamMembers.push(employee);
      console.log(employeeData.additionalEmployee);
      if (employeeData.additionalEmployee === "yes") {
        return addEmployee(teamMembers);
      } else {
        console.log("Thank you for your input");
      }
    });
};

// generate HTML Page - review last HW
const writeFile = (data) => {
  fs.writeFile("./src/index.html", data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(
        "Success! Your team profile has been generated. Please look for the index.html file in the src folder."
      );
    }
  });
};

addManager()
  .then(addEmployee)
  .then((teamMembers) => {
    return generateHTML(teamMembers);
  })
  .then((HTML) => {
    return fs.writeFile(HTML);
  })
  .catch((err) => {
    console.log(err);
  });
