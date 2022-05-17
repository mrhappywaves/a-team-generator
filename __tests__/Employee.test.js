const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('Should return an Employee object containing a name, id, email when called with the "new" keyword', () => {
            // Arrange
            const name = 'Max';
            const id = 1;
            const email = 'smacks@yahoo.com';

            // Act
            const employee = new Employee(name, id, email);

            // Assert
            expect(employee.name).toEqual(name);
            expect(employee.id).toEqual(id);
            expect(employee.email).toEqual(email);
        });

    }); 

    describe('getName()', () => {
        it('Should return a name of an employee', () => {
            // Arrange
            const employee = new Employee('Max', 1, 'smacks@yahoo.com');

            // Act
            const name = employee.getName();

            // Assert
            expect(name).toEqual('Max');
        });
    });

    describe('getId()', () => {
        it('Should return ID of the employee', () => {
            // Arrange
            const employee = new Employee('Max', 1, 'smacks@yahoo.com');

            // Act
            const id = employee.getId();

            // Assert
            expect(id).toEqual(1);
        });
    });

    describe('getEmail()', () => {
        it('Should return the email of the employee', () => {
            // Arrange
            const employee = new Employee('Max', 1, 'smacks@yahoo.com');

            // Act
            const email = employee.getEmail();

            // Assert
            expect(email).toEqual('smacks@yahoo.com');
        });
    });

    describe('getRole()', () => {
        it('Should return "Employee" when getRole() of employee is called', () => {
            // Arrange
            const employee = new Employee('Max', 1, 'smacks@yahoo.com');

            // Act
            const role = employee.getRole();

            // Assert
            expect(role).toEqual('Employee');
        });
    });
});