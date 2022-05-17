const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('Should return an Intern object with "Employee" parent class properties + intern school', () => {
            // Arrange
            const name = 'Max';
            const id = 1;
            const email = 'smacks@yahoo.com';
            const school = 'Hogwarts';

            // Act
            const intern = new Intern(name, id, email, school);

            // Assert
            expect(intern.name).toEqual(name);
            expect(intern.id).toEqual(id);
            expect(intern.email).toEqual(email);
            expect(intern.school).toEqual(school);
        });
    });

    describe('getSchool()', () => {
        it('Should return the Github username of an engineer', () => {
            // Arrange
            const intern = new Intern('Max', 1, 'smacks@yahoo.com', 'Hogwarts');

            // Act
            const school = intern.getSchool();

            // Assert
            expect(school).toEqual('Hogwarts');
        });
    });

    describe('getRole()', () => {
        it('Should return "Intern" when intern getRole() is called', () => {
            // Arrange
            const intern = new Intern('Max', 1, 'smacks@yahoo.com', 'Hogwarts');

            // Act
            const role = intern.getRole();

            // Assert
            expect(role).toEqual('Intern');
        });
    });
});
