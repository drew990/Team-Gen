const { Employee } = require("../lib/classes");

describe("Employee Class", () => {
  describe("Initialization", () => {
    it("Should create an object with an id, email, and name", () => {
      const employee = new Employee("Andrew", 1, "ab@gmail.com");

      expect(employee.name).toEqual("Andrew");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("ab@gmail.com");
    });
  });
});
