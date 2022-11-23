const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.amazon.com/",
    pageLoadTimeout:100000,
    defaultCommandTimeout:3000,
    reporter:"cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled:"mochawesome",
      mochawesomeReporterOptions:{
        reportDir:"cypress/reports/mocha-reports",
        quite: true,
        overwrite:false,
        html:true,
        json:true,
        embeddeScreenshots:true,
        code:false
      },
    retries:{
      openMode:3,
      runMode:3
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
}
});
