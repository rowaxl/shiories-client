module.exports = {
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "coverage",

  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],

  moduleDirectories: [
    "node_modules"
  ],

  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
    "ts",
    "tsx",
  ],

  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  testPathIgnorePatterns: [
    "/node_modules/"
  ],

  transform: { "^.+\\.jsx?$": "babel-jest" },

  setupFiles: ['./jest.setup.js']
};
