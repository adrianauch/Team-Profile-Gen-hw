// Where we create the cards for the HTML
// create Manager card
const generateManager = function (manager) {
  return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};

// create Engineer card
const generateEngineer = function (engineer) {
  return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
};

// create Intern card
const generateIntern = function (intern) {
  return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `;
};
// function to create page based off of what form was filled out.
generateHTML = (data) => {
  const employeeCards = [];
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // manager function
    if (role === "Manager") {
      const managerCard = generateManager(employee);
      employeeCards.push(managerCard);
    }
    // if there is an engineer calls function
    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);
      employeeCards.push(engineerCard);
    }
    // Intern card
    if (role === "Intern") {
      const internCard = generateIntern(employee);
      employeeCards.push(internCard);
    }
  }
  //   joining strings
  const teamCards = employeeCards.join("");
  const generateTeam = generateTeamPg(teamCards);
  return generateTeam;
};
const genterateTeampg = function (teamCards) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossorigin="anonymous"
        />
        <title>Team Profile Generator</title>
      </head>
      <body>
        <header>
          <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text"
              >Team Profile</span
            >
          </nav>
        </header>
        <main>
          <div class="container">
            <div class="row justify-content-center" id="team-cards">
              <!--Team Cards-->
              ${teamCards}
            </div>
          </div>
        </main>
      </body>
    </html>
     `;
};

// export
module.exports = generateHTML;
