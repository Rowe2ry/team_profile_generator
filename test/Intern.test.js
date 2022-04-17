const Intern = require('../lib/Intern');

describe('Intern class', () => {
    describe('initialization', () => {
        it('should be created with 4 parameters. 3 of which are the same as employee\'s and one of which is the school', () => {
            const justStarting = new Intern('Chris Rowe', 32, 'rowe2ry@yahoo.com', 'Georgia Institute of Technology');

            expect(justStarting.school).toEqual('Georgia Institute of Technology');
            expect(justStarting.id).toEqual(32);
            expect(justStarting.email).toEqual('rowe2ry@yahoo.com');
            expect(justStarting.name).toEqual('Chris Rowe');
        });

        it('should throw an error if the school is the wrong datatype (not a string)', () => {
            const yesWentToSchool = () => new Intern('First Last', 22, 'false@true.edu', true);

            const okayWhichSchool = 'Inter\'s school must be a non empty string.';

            expect(yesWentToSchool).toThrow(okayWhichSchool);
        });

        it('should throw an error if the school is en empty string', () => {
            const leftBlank = () => new Intern('Empty String', 55, 'nocharacters@empty.gov', '');

            const isBlank = 'Inter\'s school must be a non empty string.';

            expect(leftBlank).toThrow(isBlank);
        });
    });

    describe('Intern methods', () => {
        it('should return inter\'s school property', () => {
            const justStarting = new Intern('Chris Rowe', 32, 'rowe2ry@yahoo.com', 'Georgia Institute of Technology');

            const result = justStarting.getSchool();

            expect(result).toEqual('Georgia Institute of Technology');
        });

        it('should return the \"Intern\" role instead of the \"Employee\" role.', () => {
            const justStarting = new Intern('Chris Rowe', 32, 'rowe2ry@yahoo.com', 'Georgia Institute of Technology');

            const result = justStarting.getRole();

            const intRole = 'Intern';

            expect(result).toEqual(intRole);
        });
    });
});