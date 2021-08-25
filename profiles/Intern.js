// Require in employee
const Employeefile = require("../profiles/Employee");

// Class for Intern- school will be added in additon to name, emaill, id
class Intern extends Employeefile {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
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
