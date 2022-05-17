const { writeFileSync } = require(`fs`);

//Define the filename to write the markdown to.
const htmlPage = './dist/index.html';

const generatePage = (teamCards) => {
    let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.rtl.min.css"
        integrity="sha384-dc2NSrAXbAkjrdm9IYrX10fQq9SDG6Vjz7nQVKdKcJl3pC+k37e7qJR5MVSCS+wR" crossorigin="anonymous">
    <title>The Office</title>
</head>

<body class="bg-light bg-gradient">

    <header>
        <nav class="navbar bg-dark bg-gradient">
        <h1 class="p-5 text-center text-light">The Office</h1>
        </nav>
    </header>

    <main class="container">

        <section id="employeeSection" class="row justify-content-center d-flex">
        ${teamCards}
        </section>

    </main> 

</body>
</html>`

    return html;
}

const getDetails = (employee) => {
    switch (employee.getRole()) {
        case 'Manager':
            return `Office number: ${employee.officeNumber}`;
        case 'Engineer':
            return `GitHub: <a href="https://github.com/${employee.github}" target="_blank" class="link-info">${employee.github}</a>`;
        case 'Intern':
            return `School: ${employee.school}`;
    }
}

const generateTeamCards = (teamArray) => {
    const teamHtmlArr = [];
    teamArray.forEach((employee) => {
        teamHtmlArr.push(`<div class="card p-0 m-3 border border-dark shadow" style="max-width: 18rem;">
        <div class="card-header bg-dark text-light">
            <h4 class="card-title">${employee.name}</h4>
            <h5 class="card-text">${employee.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item m-2">ID: ${employee.getId()}</li>
            <li class="list-group-item m-2">Email: <a href="mailto: ${employee.getEmail()}"
                class="card-link">${employee.getEmail()}</a></li>
            <li class="list-group-item m-2">${getDetails(employee)}</li>
        </ul>
 </div>
 `);
    });
    return teamHtmlArr.join('\n');
}

const visualizer = (teamArray) => {
    const teamCards = generateTeamCards(teamArray);
    return writeFileSync(htmlPage, generatePage(teamCards));
}

module.exports = visualizer;