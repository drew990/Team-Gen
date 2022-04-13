const { Engineer } = require("../lib/classes");

describe("Employee Class", () => {
  describe("Initialization", () => {
    it("Should create an object with a name, id, email, and github", () => {
      const engineer = new Engineer("Andrew", 1, "ab@gmail.com", "drew9902");

      expect(engineer.name).toEqual("Andrew");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("ab@gmail.com");
      expect(engineer.github).toEqual("drew9902");
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
