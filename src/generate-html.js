function generateTeam(team) {
  const createManager = (manager) => {
    return `
 
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
          <p class="card-text">${manager.getId()}</p>
          <p><a href="mailto:${manager.getEmail()}" class="card-link">${manager.getEmail()}</a></p>
          <p class="card-text">${manager.getOfficeNumber()}</p>
        </div>
      </div>
     `;
  };

  const createEngineer = (engineer) => {
    return `
   
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${engineer.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
          <p class="card-text">${engineer.getId()}</p>
          <p><a href="mailto:${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a></p>
          <p class="card-text">${engineer.getGitHub()}</p>
        </div>
      </div>
      `;
  };

  const createIntern = (intern) => {
    return `
  
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${intern.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
          <p class="card-text">${intern.getId()}</p>
          <p><a href="mailto:${intern.getEmail()}" class="card-link">${intern.getEmail()}</a></p>
          <p class="card-text">${intern.getSchool()}</p>
        </div>
      </div>`;
  };
  const html = [];
  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );

  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
  );

  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => createIntern(intern))
  );
  return html.join("");
}
// need to figure out what html goes here.
TODO: module.exports = (team) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="../src/style.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
      <link rel="stylesheet" href="./style.css">
      <title>Document</title>
  </head>
    <body>
    <header>
    <h1>Team Profile Generator</h1>
  </header>
  <main>
  <div class="row">
  <div class="d-flex flex-wrap justify-content-center">
        ${generateTeam(team)}
        </div>
        </div>
         </main>
         <footer class="container text-center py-2">
         <h5 class="text-white bg-dark ">&copy;2022 Darby Biddy </h5>
     </footer>
    </body>
    </html>
    `;
};
