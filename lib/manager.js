const Employee = require('./employee');

// Manager class is an extension on the Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    // Commenting this out as it was not defined per the assignment requirements
    // Get the office number of a manager
    // getOfficeNumber() {
    //     return this.github;
    // }

    // Get a manager role
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager; 