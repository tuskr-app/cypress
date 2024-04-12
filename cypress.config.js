const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "junit",
  reporterOptions: {
    mochaFile: "cypress/results/TUSKR-[hash].xml",
    toConsole: true,
    attachments: true,
    outpute: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
