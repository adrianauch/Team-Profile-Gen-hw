// pull employee code
const Employee = require("../profiles/Employee");

// Initail Test to make sure an object is created.

test("should return true", () => {
  let employee1 = new Employee("Benny", 1, "b@gmail.com");

  expect(employee1.name).toBe("Benny");
  expect(employee1.id).toBe(1);
  expect(employee1.email).toBe("b@gmail.com");
});

test("gets employee id", () => {
  let employee = new Employee("Benny", 1, "b@gmail.com");

  expect(employee.getID()).toEqual(expect.any(Number));
});

test("gets employee email", () => {
  let employee = new Employee("Benny", 1, "b@gmail.com");

  expect(employee.getEmail()).toContain(".com");
});
test("gets role from employee", () => {
  let employee = new Employee("Benny", 1, "b@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
