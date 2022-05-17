const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('Should return an Engineer object with "Employee" parent class properties + github profile', () => {
            // Arrange
            const name = 'Max';
            const id = 1;
            const email = 'smacks@yahoo.com';
            const github = 'mrhappywaves';

            // Act
            const engineer = new Engineer(name, id, email, github);

            // Assert
            expect(engineer.name).toEqual(name);
            expect(engineer.id).toEqual(id);
            expect(engineer.email).toEqual(email);
            expect(engineer.github).toEqual(github);
        });
    });

    describe('getGitHub()', () => {
        it('Should return the Github username of an engineer', () => {
            // Arrange
            const engineer = new Engineer('Max', 1, 'smacks@yahoo.com', 'mrhappywaves');

            // Act
            const github = engineer.getGitHub();

            // Assert
            expect(github).toEqual('mrhappywaves');
        });
    });

    describe('getRole()', () => {
        it('Should return "Engineer" when engineer getRole() is called', () => {
            // Arrange
            const engineer = new Engineer('Max', 1, 'smacks@yahoo.com', 'mrhappywaves');

            // Act
            const role = engineer.getRole();

            // Assert
            expect(role).toEqual('Engineer');
        });
    });
});
