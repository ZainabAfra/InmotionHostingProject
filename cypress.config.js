const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "aqdc9q",
    chromeWebSecurity: false,
    //integrationFolder: "cypress/e2e",
    specPattern: 'cypress/e2e/**/*.cy.js',
    //baseUrl: 'https://www.inmotionhosting.com/', 
    //supportFile: 'cypress/support/index.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      failOnStatusCode: false
      specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
    },
  },
});
