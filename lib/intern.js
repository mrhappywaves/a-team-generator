const Employee = require('./employee');

// Intern class is an extension on the Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    // Get an intern school information
    getSchool() {
        return this.school;
    }

    // Get an intern role
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern; 