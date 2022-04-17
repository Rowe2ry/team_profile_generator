/* =========================================================================
 * Importing modules
 * ========================================================================= */

const Employee = require('./Employee');

/* =========================================================================
 * Sub-Class Constructor
 * ========================================================================= */
class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name,id,email);

        if (typeof(school) !== 'string' || !school.trim().length) {
            throw new Error('Inter\'s school must be a non empty string.');
        };

        this.school = school;
    };

    /* =====================================================================
     * Sub-Class methods
     * ===================================================================== */

    getSchool() {
        return this.school;
    };

    getRole() {
        return "Intern"
    }
};

/* =========================================================================
 * Exports
 * ========================================================================= */

module.exports = Intern;