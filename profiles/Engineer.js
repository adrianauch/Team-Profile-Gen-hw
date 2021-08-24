// Import from the employee.js to pull name, id and email
const Employee = require("Profiles / Employee.js");

// class for Engineer- added github user name.
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  //  return github input
  getGit() {
    return this.github;
  }
  //   Role to specify engineer
  getRole() {
    return "Engineer";
  }
}

// export
module.exports = Engineer;
