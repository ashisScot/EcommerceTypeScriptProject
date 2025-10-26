// cucumber.js
module.exports = {
  default: {
    paths: ['features/*.feature'],
    require: [
      'step-definitions/**/*.ts',
      'hooks/**/*.ts' // If you have hooks
    ],
    requireModule: ['ts-node/register','allure-cucumberjs'],
    format: [
      '@cucumber/pretty-formatter',
      "json:reports/cucumber-report.json",
      "html:reports/cucumber-report.html",
      "allure-cucumberjs/reporter",
      
    ],
    formatOptions: {
      resultsDir:"allure-results"
    },
    publishQuiet: true

   // tags: '@smoke or @regression' // Example for running specific tags
  }
};