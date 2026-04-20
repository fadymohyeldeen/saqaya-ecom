module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.[jt]s$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(svg|png|jpg|jpeg)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['vue', 'js', 'ts', 'json'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
}
