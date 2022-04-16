class Employee {
    constructor (name, id, email) {
        if (typeof name !== 'string' || !name.trim().length) {
            throw new Error('Employee name should exist and be a string');
        };

        if (typeof id !== 'number' || isNaN(id) || id <= 0) {
            throw new Error('Employee ID should exist and be a number');
        };
        
          if (typeof email !== 'string' || !email.trim().length) {
            throw new Error('Employee Email should exist and be a string');
        };

        this.id = id;
        this.name = name;
        this.email = email;;
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };
    
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;