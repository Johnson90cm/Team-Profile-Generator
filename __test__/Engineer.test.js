const Engineer = require("../lib/Engineer");

test("Ability to set GitHub username using constructor function", () => {
    const github = "janedoe ";
    const employee = new Engineer("Jane", 1, "jane.doe@gmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("Jane", 1, "jane.doe@gmail.com", "janedoe");
    expect(employee.getRole()).toBe(role);
  });