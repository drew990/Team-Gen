console.log("READING");
var inquirer = require("inquirer");
const { Manager, Engineer, Intern } = require("./lib/classes");
const fs = require("fs");
const generateTeam = require("./src/generateTeam");

//Global Variables
var teamArray = [];

//Manger Questions
const MangerQuestions = [
  {
    type: "input",
    name: "EmployeesName",
    message: "What is the team manager's name?",
    validate: (name) => {
      if (name) {
        return true;
      } else {
        return "Please enter a name for the manger position";
      }
    },
  },
  {
    type: "number",
    name: "EmployeesId",
    message: "What is the team manager's ID?",
    default: 1,
  },
  {
    type: "input",
    name: "EmployeeEmail",
    message: "What is the team manager's email?",
    validate: (Email) => {
      if (Email.length === 0) {
        return "Please enter in a email";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "EmployeeOfficeNum",
    message: "What is the team manager's office number?",
    default: 1,
  },
];

//Second set of questions
const validateTeamQuestions = [
  {
    type: "list",
    name: "confirmation",
    message: "What type of team member would you like to add?",
    choices: ["None", "Engineer", "Intern"],
    default: "None",
  },
];

const EngineerQuestions = [
  {
    type: "input",
    name: "EmployeesName",
    message: "What is the engineer's name?",
    validate: (name) => {
      if (name) {
        return true;
      } else {
        return "Please enter a name for the manger position";
      }
    },
  },
  {
    type: "number",
    name: "EmployeesId",
    message: "What is the engineer's ID?",
  },
  {
    type: "input",
    name: "EmployeeEmail",
    message: "What is the engineer's email?",
    validate: (Email) => {
      if (Email.length === 0) {
        return "Please enter in a email";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "EmployeeGithub",
    message: "What is the engineer's github?",
  },
];

const InternQuestions = [
  {
    type: "input",
    name: "EmployeesName",
    message: "What is the Intern's name?",
    validate: (name) => {
      if (name) {
        return true;
      } else {
        console.log("Please enter a name for the manger position");
        return false;
      }
    },
  },
  {
    type: "number",
    name: "EmployeesId",
    message: "What is the Intern's ID?",
  },
  {
    type: "input",
    name: "EmployeeEmail",
    message: "What is the Intern's email?",
    validate: (Email) => {
      if (Email.length === 0) {
        return "Please enter in a email";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "EmployeeSchool",
    message: "What is the Intern's School?",
    validate: (School) => {
      if (School.length === 0) {
        return "Please enter in a school";
      } else {
        return true;
      }
    },
  },
];

//Ask the questions to get the correct employee
inquirer.prompt(MangerQuestions).then((answers) => {
  const manger = new Manager(
    answers.EmployeesName,
    answers.EmployeesId,
    answers.EmployeeEmail,
    answers.EmployeeOfficeNum
  );

  teamArray.push(manger);
  addEmployees();
});

function addEmployees() {
  inquirer.prompt(validateTeamQuestions).then((answers) => {
    //If Engineer, It'll call addEngineer function
    if (answers.confirmation === "Engineer") {
      addEngineer();
    }
    //If Intern, It'll call addIntern function
    else if (answers.confirmation === "Intern") {
      addIntern();
    } else {
      // console.log("Create the team!");
      writeToFile("dist/index.html", generateTeam(teamArray));
    }
  });
}

//Will create a engineer
function addEngineer() {
  inquirer.prompt(EngineerQuestions).then((answers) => {
    //If Engineer, It'll call addEngineer function
    const engineer = new Engineer(
      answers.EmployeesName,
      answers.EmployeesId,
      answers.EmployeeEmail,
      answers.EmployeeGithub
    );

    teamArray.push(engineer);
    addEmployees();
  });
}

function addIntern() {
  inquirer.prompt(InternQuestions).then((answers) => {
    //If Engineer, It'll call addEngineer function
    const intern = new Intern(
      answers.EmployeesName,
      answers.EmployeesId,
      answers.EmployeeEmail,
      answers.EmployeeSchool
    );

    teamArray.push(intern);
    addEmployees();
  });
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File saved");
    }
  });
}
