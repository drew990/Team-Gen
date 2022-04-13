// Employee is the parent class of getting info
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

//Child Classes below
class Manager extends Employee {
  constructor(Name, id, email, officeNumber) {
    super(Name, id, email);
    this.EmployeeOfficeNum = officeNumber;
  }

  getOfficeNumber() {
    return this.EmployeeOfficeNum;
  }

  getRole() {
    return "Manager";
  }
}
class Engineer extends Employee {
  constructor(Name, id, email, github) {
    super(Name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}
class Intern extends Employee {
  constructor(Name, id, email, school) {
    super(Name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = { Manager, Engineer, Intern, Employee };
