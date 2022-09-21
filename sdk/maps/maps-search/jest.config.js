module.exports = {
  projects: [
    {
      runner: "jest-runner-eslint",
      displayName: "lint",
      testMatch: ["<rootDir>/src/**/*.ts", "<rootDir>/test/**/*.ts"],
    },
    {
      runner: "./jest-runner-test/index.js",
      displayName: "live-test",
      testMatch: ["<rootDir>/test/**/*.spec.ts"],
    },
  ],
};
