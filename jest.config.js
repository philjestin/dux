// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  "setupFilesAfterEnv": [
    "<rootDir>/scripts/setup-test-framework.js"
  ],
  "moduleFileExtensions": [
    "js"
  ],
  "moduleDirectories": [
    "node_modules",
    "src"
  ]
};
