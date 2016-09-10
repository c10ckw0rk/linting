
module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
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
    'comma-dangle': 0,
    'no-restricted-syntax': [0],
    'object-curly-spacing': [2, 'never'],
    'no-multiple-empty-lines': [2, {max: 2, maxEOF: 100}],
    'padded-blocks': [0, 'always'],
    'object-shorthand': 0,
    'func-names': 0,
    'wrap-iife': [2, 'inside'],
    'spaced-comment': 0,
    'no-param-reassign': 0,
    'max-len': [0, 100, 0],
    'no-multi-spaces': 0,
    'no-console': 0,
    strict: [2, 'function'],
    'prefer-template': 0,
    'arrow-body-style': 0,
    'no-new': 0,
    'no-underscore-dangle': ['error', {allowAfterThis: true}],
    'react/jsx-indent': [2, 2],
    indent: [2, 2]
  }
};
