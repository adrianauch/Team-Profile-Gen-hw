// Require in employee
const Employee = require("Profiles / Employee.js");

// Class for Manager- office number will be added in additon to name, emaill, id
class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }

  getOfficeNum() {
    return this.officeNum;
  }
  getRole() {
    return "Manager";
  }
}

// export
module.export = Manager;
