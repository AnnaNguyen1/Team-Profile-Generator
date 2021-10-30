const bodyHTML = (data) => {
  console.log(data);
  let empCardArray = [];
  for (let i = 0; i < data.length; i++) {
    const emp = data[i];
    switch ((empRole = emp.getRole())) {
      case "Manager":
        const managerCard = `<div class="col-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Manager</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${emp.name}</li>
              <li class="list-group-item">ID:${emp.id}</li>
              <li class="list-group-item">Email:${emp.email}</li>
              <li class="list-group-item">Office Number:${emp.officeNumber}</li>
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
              <li class="list-group-item">Name: ${emp.name}</li>
              <li class="list-group-item">ID:${emp.id}</li>
              <li class="list-group-item">Email:${emp.email}</li>
              <li class="list-group-item">Github:${emp.github}</li>
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
              <li class="list-group-item">Name: ${emp.name}</li>
              <li class="list-group-item">ID:${emp.id}</li>
              <li class="list-group-item">Email:${emp.email}</li>
              <li class="list-group-item">School:${emp.school}</li>
            </ul>
          </div>
        </div>`;
        empCardArray.push(internCard);
    }
  }
  const empCardHTML = empCardArray.join(""); // returns strning when concatenating all elements of an array
  return generateHTML(empCardHTML);
};

function generateHTML(empHTML) {
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
        <h1 class="display-2 text-center">Team Profile</h1>
      </header>
  
      <main>
        <section class="container results">
          <div class="d-flex flex-wrap row justify-content-center">
          ${bodyHTML(empHTML)}
          </div>
      </section>
    </main>
  </body>
</html>
    `;
}

module.exports = generateHTML;
