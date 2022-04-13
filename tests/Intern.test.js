const { Intern } = require("../lib/classes");

describe("Employee Class", () => {
  describe("Initialization", () => {
    it("Should create an object with a name, id, email, and school", () => {
      const intern = new Intern("Andrew", 1, "ab@gmail.com", "UC Berkeley");

      expect(intern.name).toEqual("Andrew");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("ab@gmail.com");
      expect(intern.school).toEqual("UC Berkeley");
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
