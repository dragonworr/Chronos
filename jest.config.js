// import type { Config } from 'jest';

module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./jest_setup/windowMock.js'],
  testEnvironment: "jsdom",
  preset: 'ts-jest/presets/js-with-ts',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest_setup/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/jest_setup/styleMock.js',
  },
  collectCoverage: true,
  // types: ["jest","node"],
};

// attempt to convert to typescript

// const config: Config = {
//   verbose: true,
//   setupFilesAfterEnv: ['./jest_setup/windowMock.js'],
//   testEnvironment: "jsdom",
//   preset: 'ts-jest/presets/js-with-ts',
//   testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
//   moduleNameMapper: {
//     '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
//       '<rootDir>/jest_setup/fileMock.js',
//     '\\.(css|less|scss)$': '<rootDir>/jest_setup/styleMock.js',
//   },
//   collectCoverage: true,
//   // types: ["jest","node"],
// };

// export default config;