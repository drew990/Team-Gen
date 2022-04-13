const { Manager, Intern, Engineer } = require("../lib/classes");

function generateCards(team) {
  //Local Variables
  //Cards to save the html cards
  let cards = [],
    role;

  for (let i = 0; i < team.length; i++) {
    const teamArray = team[i];
    role = teamArray.getRole();
    if (role === "Manager") {
      cards.push(generateManagerCard(teamArray));
    } else if (role === "Engineer") {
      cards.push(generateEngineerCard(teamArray));
    } else if (role === "Intern") {
      cards.push(generateInternCard(teamArray));
    } else {
      console.log("Can't generate card");
    }
  }

  return cards.join(``);
}

function generateManagerCard(Manager) {
  return `
      <div class="card m-1 shadow" style="width: 18rem">
        <div class='card-header bg-primary'>
          <h3 class="card-title">${Manager.name}</h3>
          <h6 class="card-text"><i class="fa fa-coffee"></i> ${Manager.getRole()}</h6>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${
              Manager.email
            }"> ${Manager.email} </a></li>
            <li class="list-group-item">Office Number: ${
              Manager.EmployeeOfficeNum
            }</li>
          </ul>
        </div>
      </div>
      `;
}

function generateEngineerCard(Engineer) {
  return `
    <div class="card m-1 shadow" style="width: 18rem">
      <div class='card-header bg-warning'>
        <h3 class="card-title">${Engineer.name}</h3>
        <h6 class="card-text"><i class="fa fa-laptop"></i> ${Engineer.getRole()}</h6>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${Engineer.id}</li>
          <li class="list-group-item">Email: <a href="mailto: ${
            Engineer.email
          }"> ${Engineer.email} </a></li>
          <li class="list-group-item">GitHub: <a href=https://github.com/${
            Engineer.github
          }> ${Engineer.github} </a></li>
        </ul>
      </div>
    </div>
    `;
}

function generateInternCard(Intern) {
  return `
    <div class="card m-1 shadow" style="width: 18rem">
      <div class='card-header bg-success'>
        <h3 class="card-title">${Intern.name}</h3>
        <h6 class="card-text"><i class="fa fa-graduation-cap"></i> ${Intern.getRole()}</h6>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${Intern.id}</li>
          <li class="list-group-item">Email: <a href="mailto: ${
            Intern.email
          }"> ${Intern.email} </a></li>
          <li class="list-group-item">School: ${Intern.school}</li>
        </ul>
      </div>
    </div>
    `;
}

function generateTeam(team) {
  console.log(team);
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
            <title>My Team</title>
            <body>
            <div class="jumbotron jumbotron-fluid bg-Info">
              <div class="container">
                <h1 class="display-4 text-center">My Team</h1>
              </div>
            </div>
            <div class="d-flex flex-row flex-wrap justify-content-center">
            ${generateCards(team)}
            </div>
            </body>
        </head>
        </html>
    `;
}

module.exports = generateTeam;
