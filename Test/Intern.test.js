// Require intern js
const Intern = require("../profiles/Intern");

// Test to create new intern object
test("creates a new intern object", () => {
  const intern = new Intern("Benny", 3, "b@gmail.com", "CU Boulder");

  expect(intern.name).toBe("Benny");
  expect(intern.id).toBe(3);
  expect(intern.email).toBe("b@gmail.com");
  expect(intern.school).toBe("CU Boulder");
});

test("pulls school info", () => {
  const intern = new Intern(
    "Benny",
    3,
    "b@gmail.com",
    " university of CU Boulder"
  );

  expect(intern.getSchool()).toContain("university");
});

test("Role should be intern", () => {
  const intern = new Intern("Benny", 3, "b@gmail.com", "CU Boulder");
  expect(intern.getRole()).toEqual("Intern");
});
