/* =========================================================================
 * Importing modules
 * ========================================================================= */

const fs = require('fs'); // file system

const pageStyling = `body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}

main {
    background-color: var(--clr-secondary);
    padding: 3rem;
}

a {
    text-decoration: none;
    cursor: pointer;
}

a:hover,
a:focus-visible {
    opacity: 70%;
}

header,
footer {
    width: 100%;
    background-color: var(--clr-primary);
}

.header-footer {
    flex-direction: row;
}

h1 {
    font-size: clamp(1.75rem, 3vw, 3rem);
    padding: .625em 1.5em .625em 0;
    color: var(--clr-heading-fonts);
}

.nav__list,
#navlist
{
    display:flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    justify-content: space-between;
    padding: .125em 0;
}

.nav__item,
.nav__item a {
    color: var(--clr-heading-fonts);
    font-weight: 700;
    margin: 0 .3125em;
    text-transform: uppercase;
}

.decorative {
    width: 100%;
    min-height: 8px;
    background-color: var(--clr-accent);
}

.container {
    width: clamp(7ch, 80%, 88ch);
    margin: 0 auto;
}

.flex {
    display: flex;
}

.flex__r {
    flex-direction: row;
}

.flex__wrap {
    flex-wrap: wrap;
}

.align__i-center {
    align-items: center;
}

.justif-sb {
    justify-content: space-between;
}

.card {
    background-color: var(--clr-tertiary);
    width: clamp(fit-content, 20%, 40ch);
    border: 1px solid black;
    margin: .5em;
    border-radius: .75rem;
    overflow: hidden;
    flex-grow: 1;
    box-shadow: .125rem .125rem var(--clr-primary);
}

.employee__title {
    background-color: var(--clr-primary);
    color: var(--clr-heading-fonts);
    margin: 0;
    padding: .375em 1em;
}

.employee__attributes {
    padding: .5em;
    margin: .375em 1em;
}

.caption {
    color: var(--clr-heading-fonts);
    margin: 0 auto;
    padding: 2em 1em 1em 0;
}

@media screen and (max-width:700px) {
    .nav__list,
    #navlist,
    .header-footer {
        flex-direction: column;
    }

    h1 {
        padding: .4em;
    }
}`;

/* =========================================================================
 * Global Scope Variables
 * ========================================================================= */


/* =========================================================================
 * Function Definitions
 * ========================================================================= */

const writeCSS = (name, theme, color) => {
    // console.log('writeCSS funct called')

    let clrPrimary = '#333';
    let clrSecondary = '#4a4a4a';
    let clrTertiary = '#999';
    let clrHeadingFonts = '#fff';
    let clrAccent = '#dc0000';

    if (theme === 'light') {
        clrPrimary = '#999';
        clrSecondary = '#ggg';
        clrTertiary = '#fff';
        clrHeadingFonts = '#000';
    };

    switch (color) {
        case 'Red':
            clrAccent = '#dc0000';
            break;
        case 'Orange':
            clrAccent = '#dc6700';
            break;
        case 'Yellow':
            clrAccent = '#ffff00';
            break;
        case 'Green':
            clrAccent = '#00dc00';
            break;
        case 'Blue':
            clrAccent = '#0000dc';
            break;
        case 'Purple':
            clrAccent = '#a000b8';
            break;
        case 'Black and White':
            clrAccent = '#000000';
            break;
    };

    const rootCSS = `
    :root {
        --clr-primary: ${clrPrimary};
        --clr-secondary: ${clrSecondary};
        --clr-tertiary: ${clrTertiary};
        --clr-heading-fonts: ${clrHeadingFonts};
        --clr-body-fonts: #000;
        --clr-accent: ${clrAccent};
        font-size: 16px;
    }`;

    allStyling = `${rootStyling}
    ${pageStyling}
    `;

    fs.writeFile(`./src/${name}_style.css`, allStyling, err => {
        if (err) {
            throw (err);
        } else {
            console.log(`New file "${name}_team.html" created!`);
            process.exit();
        };
    });
};

/* =========================================================================
 * Exports
 * ========================================================================= */

module.exports = writeCSS;