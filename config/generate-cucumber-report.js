const report = require('cucumber-html-reporter');

const options = {
  theme: "bootstrap",
  jsonFile: "reports/cucumber-report.json",
  output: "reports/cucumber-report.html",
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "Platform": "Azure DevOps",
    "Executed": "CI Pipeline"
  }
};

report.generate(options);