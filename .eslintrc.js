module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['cypress', 'prettier'],
  extends: ['airbnb', 'plugin:cypress/recommended', 'prettier'],
  env: {
    browser: true,
    es6: true,
    'cypress/globals': true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': 'error',
    'import/named': 0,
    'comma-dangle': 0,
    'import/prefer-default-export': 0,
    'node/no-unsupported-features/es-syntax': 0,
    'implicit-arrow-linebreak': 0,
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': 0,
    'object-curly-newline': 0
  }
};
