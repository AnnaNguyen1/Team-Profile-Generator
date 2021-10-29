const generateHTML = (data) => {
  let empCardArray = [];
  for (let i = 0; data.length > i; i++) {
    const emp = data[i];
    switch ((empRole = emp.getRole())) {
      case "Manager":
        const managerCard = `<div class="col-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Manager</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${manager.name}</li>
              <li class="list-group-item">ID:${manager.id}</li>
              <li class="list-group-item">Email:${manager.email}</li>
              <li class="list-group-item">Email:${manager.officeNumber}</li>
            </ul>
          </div>
        </div>`;
        empCardArray.push(managerCard);
        break;
      case "Engineer":
        const engineerCard = `<div class="col-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Engineer</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${engineer.name}</li>
              <li class="list-group-item">ID:${engineer.id}</li>
              <li class="list-group-item">Email:${engineer.email}</li>
              <li class="list-group-item">Email:${engineer.github}</li>
            </ul>
          </div>
        </div>
          `;
        empCardArray.push(engineerCard);
        break;
      case "Intern":
        const internCard = `<div class="col-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Intern</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${intern.name}</li>
              <li class="list-group-item">ID:${intern.id}</li>
              <li class="list-group-item">Email:${intern.email}</li>
              <li class="list-group-item">Email:${intern.school}</li>
            </ul>
          </div>
        </div>`;
        empCardArray.push(internCard);
    }
  }
  return empCardArray.join("");
};

function bodyHTML(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./style.css" />
    </head>
  
    <body>
      <header>
        <h1 class="display-2">Team Profile</h1>
      </header>
  
      <main>
        <section class="container results">
          <div class="d-flex flex-wrap row justify-content-center">
          ${generateHTML(data)}
          </div>
      </section>
    </main>
  </body>
</html>
    `;
}

module.exports = bodyHTML;
