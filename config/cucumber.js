// cucumber.js
module.exports = {
  default: {
    paths: ['features/*.feature'],
    require: [
      'step-definitions/**/*.ts',
      'hooks/**/*.ts' // If you have hooks
    ],
    requireModule: ['ts-node/register'],
    format: [
      '@cucumber/pretty-formatter',
      "json:allure-results/cucumber-report.json"
    ],
    formatOptions: {
      outputDir: 'allure-results',
    },
    publishQuiet: true

   // tags: '@smoke or @regression' // Example for running specific tags
  }
};