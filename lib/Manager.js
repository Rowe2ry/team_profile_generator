/* =========================================================================
 * Importing modules
 * ========================================================================= */

const Employee = require('./Employee');

/* =========================================================================
 * Sub-Class Constructor
 * ========================================================================= */
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        if (typeof officeNumber !== 'number' || isNaN(officeNumber) || officeNumber <=0) {
            throw new Error('All Managers require an office number greater than zero.');
        };

        this.officeNumber = officeNumber;
    };

    /* =====================================================================
     * Sub-Class Methods
     * ===================================================================== */

    getRole() {
        return 'Manager';
    }
};

/* =========================================================================
 * Exports
 * ========================================================================= */

module.exports = Manager;