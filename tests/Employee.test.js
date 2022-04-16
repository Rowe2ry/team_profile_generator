const Employee = require('../lib/Employee');

describe('Employee Class', () => {
    describe('Initialization', () => {
        it('creates new employee with the values from the given parameters', () => {
            const employee = new Employee('Frank', 223, 'frank@example.com');

            expect([employee.id, employee.email, employee.name]).toEqual(223,'frank@example.com', 'Frank');
            //shuffled the order to differ from input order to ensure the expected values match the correct keys
        });

        it('throws an error if passed no arguments —— zero case scenario', () => {
            const blank = new Employee();

            expect(blank).toThrow();
        });

        it('throws and error if the name argument is missing', () => {
            const noNameError = 'Employee name should exist and be a string';

            const nameless = new Employee(undefined,15,'nameless@example.com');

            expect(nameless).toThrowError(noNameError);
        });

        it('throws and error if the name argument is not a string', () => {
            const numNameError = 'Employee name should exist and be a string';

            const hiImFiveK = new Employee(5000,15,'nameless@example.com');

            expect(hiImFiveK).toThrowError(numNameError);
        });

        it('throws and error if the ID argument is missing', () => {
            const noIdError = 'Employee ID should exist and be a number';

            const doYouHaveId = new Employee('Megan',undefined,'unidentifiable@incognito.com');

            expect(doYouHaveId).toThrowError(noIdError);
        });
        
        it('throws an error if the ID is not a number', () => {
            const stringIdError = 'Employee ID should exist and be a number';

            const almostCorrect = new Employee('Danté', '12', 'string@number.gov');

            expect(almostCorrect).toThrowError(stringIdError);
        });

        it('throws an error if the ID is not a positive number', () => {
            const negIdError = 'Employee ID must be a positive integer';

            const negativeNancy = new Employee('Nancy', -100, 'sad@depressing.net');

            expect(negativeNancy).toThrowError(negIdError);
        });

        it('throws and error if the email argument is missing', () => {
            const noEmailError = 'Employee email should exist and be a string';

            const noContact = new Employee('Henry',8,undefined);

            expect(noContact).toThrowError(noEmailError);
        });

        it('throws and error if the email argument is not a string', () => {
            const booleanEmailError = 'Employee Email should exist and be a string';

            const emailTrue = new Employee('realHuman', 1, true);

            expect(emailTrue).toThrowError(booleanEmailError);
        });
    });
    
    describe('getName method', () => {
    
    });
    
    describe('getId method', () => {
        
    });
    
    describe('getEmail method', () => {
        
    });
    
    describe('getRole method', () => {
        
    });
});
