const Engineer = require('../lib/Engineer');

describe('Engineer Sub Class', () => {
    describe('Initialization', () => {
        it('should have all 3 employee properties as well as a GitHub username', () => {
            const developLikePolaroid = new Engineer('Kodak', 22, 'canon@nikon.com', 'Leica');

            // shuffled results below to make sure each key still follows appropriate value
            expect(developLikePolaroid.email).toEqual('canon@nikon.com');
            expect(developLikePolaroid.name).toEqual('Kodak');
            expect(developLikePolaroid.github).toEqual('Leica');
            expect(developLikePolaroid.id).toEqual(22);
        });

        it('should throw an error for invalid or missing datatypes as the GitHub username', () => {
            const trainCaptain = ()=> new Engineer('Choochie', 180, 'rail@road.edu', undefined);

            const invalid = 'Engineer\'s github username should be a non-empty string without spaces.'

            expect(trainCaptain).toThrow(invalid);
        });
    });

    describe('Engineer methods', () => {
        describe('getGithub method', () => {
            it('should return the string of the GitHub username', () => {
                const juniorDev = new Engineer ('Alan Touring', 12, 'atouring@transistor.com', 'vacuumTube');
                const gitHubName = 'vacuumTube';

                const result = juniorDev.getGithub();

                expect(result).toEqual(gitHubName);
            });
        });

        describe('getRole method', () => {
            const seniorDev = new Engineer ('Tom Brady', 45, 'tbrady@superbowl.com', 'quarterBack');
            const engineRole = 'Engineer';

            const result = seniorDev.getRole();

            expect(result).toEqual(engineRole);
        });
    });
});