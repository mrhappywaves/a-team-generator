const Employee = require('./employee');

// Engineer class is an extension on the Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    // Get the github profile of an engineer
    getGitHub() {
        return this.github;
    }

    // Get an engineer role
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer; 