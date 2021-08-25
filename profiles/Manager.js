// Require in employee
const Employeefile = require("../profiles/Employee");

// Class for Manager- office number will be added in additon to name, emaill, id
class Manager extends Employeefile {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }

  getOfficeNumber() {
    return this.officeNum;
  }
  getRole() {
    return "Manager";
  }
}

// export
module.exports = Manager;
