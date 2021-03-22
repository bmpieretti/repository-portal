module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['prettier'],
  extends: ['prettier', 'airbnb'],
  env: {
    browser: true,
    es6: true
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
    'implicit-arrow-linebreak': 0
  }
};
