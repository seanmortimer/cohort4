module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    // 'plugin:react-hooks',
    'airbnb',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
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
    'jest-dom',
  ],
  rules: {
    'linebreak-style': ['error','windows'],
    'implicit-arrow-linebreak': 0,
    'class-methods-use-this': 0,
    'no-plusplus': ["off", { "allowForLoopAfterthoughts": true }],
    'object-curly-newline': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    "react/jsx-one-expression-per-line": [0, { allow: "single-child" }],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
  },
};
