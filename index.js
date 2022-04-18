/* =========================================================================
 * Importing modules
 * ========================================================================= */

const Employee = require('./lib/Employee'); // class constructor
const Manager = require('./lib/Manager'); // sub-class constructor for Employee class
const Engineer = require('./lib/Engineer'); // sub-class constructor for Employee class
const Intern = require('./lib/Intern'); // sub-class constructor for Employee class
const writeHTML = require('./lib/writeHTML'); // wil make our Team Profile page
const writeCSS = require('./lib/writeCSS'); // I wanted to add dynamic styling
const inquirer = require('inquirer'); // used for prompting user through the command line
const fs = require('fs'); // file system

/* =========================================================================
 * Global Scope Variable Declarations
 * ========================================================================= */

const teamArr = []; // team array | stores each team member object

let theme = 'light';

let accentColor = 'red';

const mainMenuInitial = [
    {
        type: 'list',
        name: 'menu',
        message: 'Welcome to Team Profile Page Generator V1.0.0! What would you like to do?',
        choices: ['Build New Team', 'Choose appearance options for output page', 'Exit & generate profile page.']
    },
];

const appearanceMenu = [
    {
        type: 'list',
        name: 'theme',
        message: 'Light or Dark mode?',
        choices: ['Light', 'Dark']
    },
    {
        type: 'list',
        name: 'color',
        message: 'Choose an accent color for the page:',
        choices: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Black and White']
    }
];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the team manager\'s name?' 
    },
    {
        type: 'input',
        name: 'idNum',
        message: 'What is the team manager\'s id number?' 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the team manager\'s email address?' 
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'What is the team manager\'s office number?' 
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is this engineer\'s name?' 
    },
    {
        type: 'input',
        name: 'idNum',
        message: 'What is this engineer\'s id number?' 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is this engineer\'s email address?' 
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is this engineer\'s github username?' 
    },
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is this inter\'s name?' 
    },
    {
        type: 'input',
        name: 'idNum',
        message: 'What is this inter\'s id number?' 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is this intern\'s email address?' 
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school is this intern attending?' 
    },
];

const mainMenu = [
    {
        type: 'list',
        name: 'menu',
        message: 'Your new team page construction is underway. What would you like to do next?',
        choices: ['Add another team member', 'Choose appearance options for output page', 'Exit & generate profile page.']
    },
];

const addTeamMember = [
    {
        type: 'list',
        name: 'empType',
        message: 'What is this team member\'s role?',
        choices: ['Engineer', 'Intern']
    },
];

/* =========================================================================
 * function Declarations
 * ========================================================================= */

const appStart = () => { // the main menu is slightly different on the first load of the application
    inquirer.prompt([...mainMenuInitial]) // ask questions
    .then((res) => {
        //console.log(res)

        // switch statement launches conditional logic execution for the menu interaction
        switch (res.menu) {
            case 'Build New Team': // goes into starting a new project by asking questions about the manager
                newProject();
                break;
            case 'Choose appearance options for output page': // asks new questions to choose some color & appearance options
                changeAppearance();
                break;
            case 'Exit & generate profile page.': // stop asking questions and make the team page
                console.log('You did not enter any information, so a page was not generated.');
                process.exit();
                break;
            default: // not sure if possible since user will have multiple choice, but we should know if this event is triggered
                throw new Error('User submitted invalid command');
        };
    });
};

const goToMainMenu = () => { // regular main menu
    inquirer.prompt([...mainMenu]) // ask questions
    .then((res) => {
        //console.log(res)

        // switch statement launches conditional logic execution for the menu interaction
        switch (res.menu) {
            case 'Add another team member': // begins process of adding either an "Engineer" or "Intern" to the team array
                newTeamMember();
                break;
            case 'Choose appearance options for output page': // asks new questions to choose some color & appearance options
                changeAppearance(res);
                break;
            case 'Exit & generate profile page.': // stop asking questions and make the team page
                console.log([theme, accentColor, teamArr]);
                writeCSS(teamArr[0].name[0], theme, accentColor);
                writeHTML(teamArr);
                //process.exit();
                break;
            default: // not sure if possible since user will have multiple choice, but we should know if this event is triggered
                throw new Error('User submitted invalid command');
        };
    });
};

const newProject = () => { // start with asking about the manager of the team
    inquirer.prompt([...managerQuestions])
    .then((res) => {
        // use prompt responses to create new object of the type:
        // "Manager" sib-class of the class "employee"
        const manager = new Manager(res.name, Number(res.idNum), res.email, Number(res.officeNum));
        teamArr.push(manager); // add new object to the array of team members
        goToMainMenu(); // return to the main menu
    });
};

const newTeamMember = () => { // start with asking about the manager of the team
    inquirer.prompt([...addTeamMember])
    .then((res) => {
        // use prompt responses to create new object of the type:
        // "Manager" sib-class of the class "employee"
        if (res.empType === 'Engineer') {
            newEngineer();
        } else {
            newIntern();
        };
    });
};

const newEngineer = () => { // start with asking about the manager of the team
    inquirer.prompt([...engineerQuestions])
    .then((res) => {
        // use prompt responses to create new object of the type:
        // "Manager" sib-class of the class "employee"
        const engineer = new Engineer(res.name, Number(res.idNum), res.email, res.github);
        teamArr.push(engineer); // add new object to the array of team members
        goToMainMenu(); // return to the main menu
    });
};

const newIntern = () => { // start with asking about the manager of the team
    inquirer.prompt([...internQuestions])
    .then((res) => {
        // use prompt responses to create new object of the type:
        // "Manager" sib-class of the class "employee"
        const intern = new Intern(res.name, Number(res.idNum), res.email, res.school);
        teamArr.push(intern); // add new object to the array of team members
        goToMainMenu(); // return to the main menu
    });
};

const changeAppearance = () => {
    inquirer.prompt([...appearanceMenu])
    .then((res) => {
        // use prompt responses to create new object of the type:
        // "Manager" sib-class of the class "employee"
        theme = res.theme;
        accentColor = res.color;
        goToMainMenu(); // return to the main menu
    });
};

/* =========================================================================
 * Function Calls
 * ========================================================================= */

appStart()

/* =========================================================================
 * Exports
 * ========================================================================= */
