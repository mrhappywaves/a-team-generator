// Imports the dependencies
const inquirer = require("inquirer");

// const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const visualizer = require(`./src/visualizer`);

// Create team array
const storeTeam = [];

// Function for creating a team
const createTeam = () => {
    console.log('Enter employee details:');
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the employee role?',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            name: 'name',
            message: 'What is the employees name?'
        },
        {
            name: 'id',
            message: 'What is the employees id?',
        },
        {
            name: 'email',
            message: 'What is the employees e-mail?',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log(`.  Please enter a valid email`)
                    return false;
                }
            }
        },
        {
            name: 'officeNumber',
            message: 'What is the managers office number?',
            when: (answers) => {
                if (answers.role === 'Manager') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            name: 'github',
            message: 'What is the engineers github username?',
            when: (answers) => {
                if (answers.role === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            name: 'school',
            message: 'What is the interns school?',
            when: (answers) => {
                if (answers.role === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addAnotherEmployee',
            message: 'Add another employee?',
            default: false
        }
    ])
        .then((answers) => {
            const addEmployee = answers.addAnotherEmployee;

            if (answers.role === 'Manager') {
                const { name, id, email, officeNumber } = answers;
                const employee = new Manager(name, id, email, officeNumber);
                storeTeam.push(employee);
            } else if (answers.role === 'Engineer') {
                const { name, id, email, github } = answers;
                const employee = new Engineer(name, id, email, github);
                storeTeam.push(employee);
            } else if (answers.role === 'Intern') {
                const { name, id, email, school } = answers;
                const employee = new Intern(name, id, email, school);
                storeTeam.push(employee);
            }

            if (addEmployee) {
                return createTeam(storeTeam);
            } else {
                return storeTeam;
            }
        });
};

// Initialize team function
createTeam()
    .then((team) => {
        visualizer(team);
    })
    .then(() => {
        console.log(`Successfully completed!`);
    })
    .catch((err) => console.error(err));