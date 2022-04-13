const { Manager } = require("../lib/classes");

describe("Employee Class", () => {
  describe("Initialization", () => {
    it("Should create an object with a name, id, email, and office number", () => {
      const manager = new Manager("Andrew", 1, "ab@gmail.com", 1);

      expect(manager.name).toEqual("Andrew");
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual("ab@gmail.com");
      expect(manager.EmployeeOfficeNum).toEqual(1);
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
