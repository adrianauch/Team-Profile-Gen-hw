// require Engineer js
const Engineer = require("../profiles/Engineer");

test("creates a new engineer object", () => {
  const engineer = new Engineer("Benny", 2, "b@gmail.com", "Bennynjets");

  expect(engineer.name).toBe("Benny");
  expect(engineer.id).toBe(2);
  expect(engineer.email).toBe("b@gmail.com");
  expect(engineer.github).toBe("Bennynjets");
});

test("pulls github info", () => {
  const engineer = new Engineer("Benny", 2, "b@gmail.com", "Bennynjets");

  expect(engineer.getGit()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

test("Role should be engineer", () => {
  const engineer = new Engineer("Benny", 2, "b@gmail.com", "Bennynjets");
  expect(engineer.getRole()).toEqual("Engineer");
});
