const Manager = require("../lib/Manager");
const { it, describe, expect } = require("@jest/globals");

describe("Manager", () => {
  it("sets officeNumber via constructor", () => {
    const officeNumber = 12346789;
    const emp = new Manager("Anna", "1234", "a@test.com", officeNumber);
    expect(emp.officeNumber).toEqual(officeNumber);
  });

  describe("getOfficeNumber", () => {
    it("retrieves office number from getOfficeNumber()", () => {
      const officeNumberVal = 12345678;
      const emp = new Manager("Anna", "1234", "a@test.com", officeNumberVal);
      expect(emp.getOfficeNumber()).toEqual(officeNumberVal);
    });
  });

  describe("getRole", () => {
    it("retrieves role from getRole()", () => {
      const roleVal = "Manager";
      const emp = new Manager("Anna", "1234", "a@test.com", 12345678);
      expect(emp.getRole()).toEqual(roleVal);
    });
  });
});
