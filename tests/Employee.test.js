const { describe, it, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

// Initialisation
describe("Initialisation", () => {
  it("Return an object", () => {
    const emp = new Employee();
    expect(typeof emp === "object").toEqual(true);
  });

  //Name
  it("Set a name", () => {
    const name = "Anna";
    const emp = new Employee(name);
    expect(emp.name).toEqual(name);
  });

  //ID
  it("Set an ID", () => {
    const id = "1234";
    const emp = new Employee("Anna", id);
    expect(emp.id).toEqual(id);
  });

  //Email
  it("Set an email", () => {
    const email = "a@test.com";
    const emp = new Employee("Anna", "123", email);
    expect(emp.email).toEqual(email);
  });

  // getName()
  describe("getName", () => {
    it("Retrieve name via getName()", () => {
      const nameVal = "Anna";
      const emp = new Employee(nameVal);
      expect(emp.getName()).toEqual(nameVal);
    });
  });

  // getId()
  describe("getId", () => {
    it("Retrieve id via getId()", () => {
      const idVal = "1234";
      const emp = new Employee("Anna", idVal);
      expect(emp.getId()).toEqual(idVal);
    });
  });

  // getEmail()
  describe("getEmail", () => {
    it("Retrieve email via getEmail()", () => {
      const emailVal = "a@test.com";
      const emp = new Employee("Anna", "1234", emailVal);
      expect(emp.getEmail()).toEqual(emailVal);
    });
  });

  // getRole()
  describe("getRole", () => {
    it("Retrieve role via getRole()", () => {
      const roleVal = "Employee";
      const emp = new Employee("Anna", "1234", "a@test.com", roleVal);
      expect(emp.getRole()).toEqual(roleVal);
    });
  });
});
