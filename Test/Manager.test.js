// require manager file
const Manager = require("../profiles/Manager");

// Test to create new Manager object
test("creates a new Manager object", () => {
  const manager = new Manager("Benny", 3, "b@gmail.com", 10);

  expect(manager.name).toBe("Benny");
  expect(manager.id).toBe(3);
  expect(manager.email).toBe("b@gmail.com");
  expect(manager.officeNum).toBe(10);
});

test("pull office number", () => {
  const manager = new Manager("Benny", 3, "b@gmail.com", 10);

  expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test("Role should be intern", () => {
  const manager = new Manager("Benny", 3, "b@gmail.com", "CU Boulder");
  expect(manager.getRole()).toEqual("Manager");
});

const manager = new Manager("Benny", 3, "b@gmail.com", 10);
console.log(manager);
