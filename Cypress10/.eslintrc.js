module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: ['cypress.config.js'],
  rules: {
    'class-methods-use-this': 'off',
    'no-undef': 'warn',
    'no-plusplus': 'off',
    'no-unused-vars': 'warn',
    'import/no-extraneous-dependencies': 'warn',
  },
  globals: {
    describe: 'true',
    it: 'true',
    cy: 'true',
    Cypress: 'true',
    expect: 'true',
    beforeEach: 'true',
    before: 'true',
  },
};
