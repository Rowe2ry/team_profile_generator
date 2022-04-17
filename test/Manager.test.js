const Manager = require('../lib/Manager');

describe('Manager Sub Class', () => {
    describe('Initialization', () => {
        it('should have all 3 employee properties as well as an office number', () => {
            const canISpeakToTheManager = new Manager('Karen', 15, 'ksmith@example.com', 10);

            // shuffled results below to make sure each key still follows appropriate value
            expect(canISpeakToTheManager.email).toEqual('ksmith@example.com');
            expect(canISpeakToTheManager.name).toEqual('Karen');
            expect(canISpeakToTheManager.officeNumber).toEqual(10);
            expect(canISpeakToTheManager.id).toEqual(15);
        });

        it('should throw an error for invalid or missing datatypes as an office number', () => {
            const aintFirstYerLast = ()=> new Manager('Ricky', 25, 'rbobby@nascar.org', undefined);

            const wasntFirst = 'All Managers require an office number greater than zero.'

            expect(aintFirstYerLast).toThrow(wasntFirst);
        });
    });

    describe('manager methods', () => {
        describe('getRole method', () => {
            it('should return the roll of \"Manager\" instead of \"Employee\"', () => {
                const doYouManage = new Manager ('Tom Smykowski', 12, 'tsmykowski@Initech.com', 15);
                const manageRole = 'Manager';

                const result = doYouManage.getRole();

                expect(result).toEqual(manageRole);
            });
        });
    });
});