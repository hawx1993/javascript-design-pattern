module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  collectCoverageFrom: ['src/**/*.ts','!**/*.d.ts'],
  // The directory where Jest should output its coverage files.
  coverageDirectory: './coverage/',
  // If the test path matches any of the patterns, it will be skipped.
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
}
