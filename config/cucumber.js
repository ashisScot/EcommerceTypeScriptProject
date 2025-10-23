// cucumber.js
module.exports = {
  default: {
    paths: ['features/*.feature'],
    require: [
      'step-definitions/**/*.ts',
      'hooks/**/*.ts' // If you have hooks
    ],
    requireModule: ['ts-node/register'],
    format: ['allure-cucumberjs/reporter'],
    formatOptions: {
      outputDir: 'allure-results',
    },

   // tags: '@smoke or @regression' // Example for running specific tags
  }
};