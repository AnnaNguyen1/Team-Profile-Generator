const Engineer = require("../lib/Engineer");
const { describe, it, expect } = require("@jest/globals");

describe("Engineer", () => {
  it("sets github acc via contructor", () => {
    const github = "AnnaNguyen1";
    const emp = new Engineer("Anna", "1234", "a@test.com", github);
    expect(emp.github).toEqual(github);
  });

  describe("getGithub", () => {
    it("Retrieve github via github()", () => {
      const githubVal = "AnnaNguyen1";
      const emp = new Engineer("Anna", "1234", "a@test.com", githubVal);
      expect(emp.getGithub()).toEqual(githubVal);
    });
  });

  describe("getRole", () => {
    it("Retrieve role via getRole()", () => {
      const roleVal = "Engineer";
      const emp = new Engineer("Anna", "1234", "a@test.com", "AnnaNguyen1");
      expect(emp.getRole()).toEqual(roleVal);
    });
  });
});
