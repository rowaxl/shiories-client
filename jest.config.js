module.exports = {
  preset: "ts-jest",

  testEnvironment: "node",

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

  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],

  testPathIgnorePatterns: [
    "/node_modules/"
  ],

  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.tsx?$": "ts-jest"
  },

  setupFiles: ['./jest.setup.ts'],

  globals: {
    "ts-jest": {
      "tsConfig": "tsconfig.json"
    }
  }
};
