/* =========================================================================
 * Importing modules
 * ========================================================================= */

const Employee = require('./Employee');

/* =========================================================================
 * Sub-class constructor
 * ========================================================================= */
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        if (typeof github !== 'string' || !github.trim().length || github.trim().includes(' ')) {
            throw new Error('Engineer\'s github username should be a non-empty string without spaces.');
        };

        this.github = github;
    };

    /* =====================================================================
     * Sub-class methods
     * ===================================================================== */

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
};

/* =========================================================================
 * Exports
 * ========================================================================= */

module.exports = Engineer;