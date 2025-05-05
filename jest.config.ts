import { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      { tsconfig: "./tsconfig.app.json", useESM: true },
    ],
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/styleMock.js",
  },
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.test.{ts,tsx}",
    "!src/setupTests.ts",
    "!src/mocks/**/*.{ts,tsx}",
    "!src/{main,App}.tsx",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "html"],
};

export default config;
