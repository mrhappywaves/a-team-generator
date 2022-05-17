// Employee class and it's constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Get the name of the employee
    getName() {
        return this.name;
    }

    // Get the ID of the employee
    getId() {
        return this.id;
    }

    // Get the email of the employee
    getEmail() {
        return this.email;
    }

    // Get an employee role
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;