module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jest/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    'linebreak-style': ['error','windows'],
    'implicit-arrow-linebreak': 0,
    'class-methods-use-this': 0,
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
    'react/jsx-filename-extension':
      [1, { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    "react/jsx-one-expression-per-line": [1, { allow: "single-child" }]

  },
};
