module.exports = (on, config) => {
    on('window:before:load', (win) => {
        win.console.log = () => {}; // Disable console.log
        win.console.warn = () => {}; // Disable console.warn
        win.console.error = () => {}; // Disable console.error
    });
};
Cypress.on('uncaught:exception', (err, runnable) => {
    console.error('Uncaught exception occurred:', err.message);
    return false;
});
// cypress/support/index.js
//require('cypress-xpath');
