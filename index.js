/* =========================================================================
 * Importing modules
 * ========================================================================= */

const Employee = require('./lib/Employee'); // class constructor
const Manager = require('./lib/Manager'); // sub-class constructor for Employee class
const Engineer = require('./lib/Engineer'); // sub-class constructor for Employee class
const Intern = require('./lib/Intern'); // sub-class constructor for Employee class
// const writeHTML = require('./lib/writeHTML'); // wil make our Team Profile page
const inquirer = require('inquirer'); // used for prompting user through the command line
const fs = require('fs'); // file system

/* =========================================================================
 * Global Scope Variable Declarations
 * ========================================================================= */

const teamArr = []; // team array | stores each team member object

const baseQuestions = [
    {
        type: 'input',
        name: 'empName',
        message: 'What is this employee\'s name?' 
    },
    {
        type: 'input',
        name: 'empId',
        message: 'What is this employee\'s ID number?' 
    },
    {
        type: 'input',
        name: 'empEmail',
        message: 'What is this employee\'s email address?' 
    },
    {
        type: 'list',
        name: 'empRole',
        message: 'What is this employee\'s role?',
        choices: ['Employee', 'Manager', 'Engineer', 'Intern']
    },
];

const managerQuestion = [
    {
        type: 'input',
        name: 'manageOfficeNum',
        message: 'What is this manager\'s office number?' 
    },
];

const engineerQuestion = [
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'What is this Engineer\'s GitHub username?' 
    },
];

const internQuestion = [
    {
        type: 'input',
        name: 'internSchool',
        message: 'What school is this intern attending?' 
    },
];

const loopQuestion = [ // start the questions over for each new employee
    {
        type: 'confirm',
        name: 'again',
        message: 'do you have another employee to enter into the system?' 
    },
];

let currentEmployee = 0; // just a number we will add to all of our variable names as an index number

/* =========================================================================
 * function Declarations
 * ========================================================================= */

function enterEmployee() {
    console.log(`We are going to enter in information for employee number ${currentEmployee + 1}.`); //lets user know whats happening. Adds 1 to index
    // only for console print since user will probably not want to think of an
    // employee being "employee 0". Users usually count from 1
    inquirer.prompt([...baseQuestions]) // ask questions
    .then((res) => {
        //console.log(res)

        // switch statement launches conditional logic execution if the employee
        // role requires creation of a new object type in a subclass of Employee
        switch (res.empRole) {
            case 'Employee': // no sub classes needed, create the object and move one
                const employee = new Employee(res.empName, Number(res.empId), res.empEmail);
                teamArr.push(employee); // add this employee object to the team array
                anotherEmployee();
                break;
            case 'Manager': // gather info needed ot create "Manager" s.c
                managerPrompts(res);
                break;
            case 'Engineer': // gather info needed ot create "Engineer" s.c
                engineerPrompts(res);
                break;
            case 'Intern': // gather info needed ot create "Intern" s.c
                internPrompts(res);
                break;
        };
    });
};

function anotherEmployee() {
    inquirer.prompt([...loopQuestion])
    .then((boolean) => {
        if (!boolean.again) { // if false then...
            console.log(teamArr);
            // writeHTML(teamArr); // no more team members, write the HTML
        } else { // must need to add more team members....
        currentEmployee++; // increase employee index
        enterEmployee(); // start the process of employee entry over again
        };
    });
};

function managerPrompts(prev) { // for a manager
    inquirer.prompt([...managerQuestion]) // ask about the office number
    .then((res) => {
        const employee = new Manager(prev.empName, Number(prev.empId), prev.empEmail, Number(res.manageOfficeNum)); //create the object
        teamArr.push(employee); // store in the team array
        anotherEmployee(); // ask if finished
    });
};

function engineerPrompts(prev) { // for an engineer
    inquirer.prompt([...engineerQuestion]) // ask about their github
    .then((res) => {
        const employee = new Engineer(prev.empName, Number(prev.empId), prev.empEmail, res.engineerGithub); // create the object
        teamArr.push(employee); // store in the team array
        anotherEmployee(); // ask if finished
    });
};

function internPrompts(prev) { // for an Intern
    inquirer.prompt([...internQuestion]) // ask about their school
    .then((res) => {
        const employee = new Intern(prev.empName, Number(prev.empId), prev.empEmail, res.internSchool); // create the object
        teamArr.push(employee); // store in the team array
        anotherEmployee(); // ask if finished
    });
};

/* =========================================================================
 * Function Calls
 * ========================================================================= */

enterEmployee();

/* =========================================================================
 * Exports
 * ========================================================================= */
module.exports = ['teamArr'];