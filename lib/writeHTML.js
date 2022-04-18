/* =========================================================================
 * Importing modules
 * ========================================================================= */

const fs = require('fs'); // file system

/* =========================================================================
 * Global Scope Variables
 * ========================================================================= */

let htmlTop = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./assets/style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
            <div class="container row">
                <nav class="flex align__i-center justif-sb header-footer">
                    <div class="heading">
                        <h1>Meet The Team</h1>
                    </div>
                    <ul id ="navlist" class="nav__list">
                        <li class="nav__item"><a href="#">Home</a></li>
                        <li class="nav__item"><a href="#">About Us</a></li>
                        <li class="nav__item"><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <div class="decorative"></div>
        
        <main>
            <div class="container row flex flex__r flex__wrap">`;

let htmlConditional = '';

let htmlBottom = ` div>
        </main>
        <div class="decorative"></div>
        <footer class="header-footer">
        <aside class="container">
            <h4 class="caption">Created by Team Profile Page Generator 2022</h4>
        </aside>
        </footer>
    </body>
    </html>`;
/* =========================================================================
 * Function Definitions
 * ========================================================================= */

const writeHTML = (arr) => {
    // console.log('writeHTML funct called')
    for (employee of arr) {
        let specialFormatting;
        if (employee.constructor.name === 'Manager') {
            // console.log('manager trigger worked');
            specialFormatting = `<li class="attribute">Office Number: ${employee.officeNumber}</li>`;
        } else if (employee.constructor.name === 'Engineer') {
            // console.log('engineer trigger worked');
            specialFormatting = `<li class="attribute">GitHub: <a href="https://www.github.com/${employee.github}">${employee.github}</a></li>`;
        } else {
            // console.log('intern trigger worked');
            specialFormatting = `<li class="attribute">School: ${employee.school}</li>`;
        };

        const codeBlock = `<article class="card">
        <section class="employee__title">
            <h2>
                ${employee.name}
            </h2>
            <h3>
                ${employee.constructor.name}
            </h3>
        </section>
        <div class="decorative"></div>
        <section class="employee__details">
            <ul class="employee__attributes">
                <li class="attribute">ID: ${employee.id}</li>
                <li class="attribute">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                ${specialFormatting}
        </section>
    </article>`;

        htmlConditional = htmlConditional.concat(codeBlock);
    };

    const wholePage = `${htmlTop}
    ${htmlConditional}
    ${htmlBottom}`;

    const writePage = () => wholePage;
    //console.log(wholePage);

    fs.writeFile(`./src/${arr[0].name}_team.html`, writePage(), err => {
        if (err) {
            throw (err);
        } else {
            console.log(`New file "${arr[0].name}_team.html" created!`);
        };
    });
};

/* =========================================================================
 * Exports
 * ========================================================================= */

module.exports = writeHTML;