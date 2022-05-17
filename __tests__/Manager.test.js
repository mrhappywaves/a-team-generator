const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('Should return a Manager object with "Employee" parent class properties + office number', () => {
            // Arrange
            const name = 'Max';
            const id = 1;
            const email = 'smacks@yahoo.com';
            const officeNumber = '1A';

            // Act
            const manager = new Manager(name, id, email, officeNumber);

            // Assert
            expect(manager.name).toEqual(name);
            expect(manager.id).toEqual(id);
            expect(manager.email).toEqual(email);
            expect(manager.officeNumber).toEqual(officeNumber);
        });
    });

    // Commenting this out as it was not defined per the assignment requirements
    // describe('getOfficeNumber()', () => {
    //     it('Should return office number of a manager', () => {
    //         // Arrange
    //         const manager = new Manager('Max', 1, 'smacks@yahoo.com', '1A');

    //         // Act
    //         const officeNumber = manager.getOfficeNumber();

    //         // Assert
    //         expect(officeNumber).toEqual('1A');
    //     });
    // });

    describe('getRole()', () => {
        it('Should return "Manager" when manager getRole() is called', () => {
            // Arrange
            const manager = new Manager('Max', 1, 'smacks@yahoo.com', '1A');

            // Act
            const role = manager.getRole();

            // Assert
            expect(role).toEqual('Manager');
        });
    });
});
