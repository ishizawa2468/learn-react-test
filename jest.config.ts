import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "./tsconfig.app.json" }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/styleMock.js", // Mock CSS imports
  },
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}", // カバレッジ対象のファイル
    "!src/**/*.test.{ts,tsx}", // テストファイルを除外
    "!src/setupTests.ts", // 初期設定ファイルを除外
    "!src/{main,App}.tsx", // エントリーポイントを除外
  ],
  coverageDirectory: "coverage", // カバレッジレポートの出力先
  coverageReporters: ["text", "html"], // レポート形式
};

export default config;
