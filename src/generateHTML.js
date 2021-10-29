function generateHTML(data) {
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
          ${empCards}
          </div>
      </section>
    </main>
  </body>
</html>
    `;
}

module.exports = generateHTML;
