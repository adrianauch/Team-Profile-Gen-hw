// Require in employee
const Employee = require("Profiles / Employee.js");

// Class for Intern- school will be added in additon to name, emaill, id
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = this.school;
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

//export
module.exports = Intern;
