module.exports = {
  clearMocks: false,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: 'node',
  moduleNameMapper: {
    "@functions/(.*)": "<rootDir>/src/functions/$1",
    "@libs/(.*)": "<rootDir>/src/libs/$1"
  },
  testEnvironment: "node",
  testMatch: ['**/?(*.)+(test).ts?(x)'],
};