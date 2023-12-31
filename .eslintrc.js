/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:unicorn/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  plugins: ['simple-import-sort', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    'import/no-cycle': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/namespace': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Node.js builtins prefixed with `node:`.
          ['^node:'],
          // Packages.
          ['^@?\\w'],
          // 1. Root alias.
          // 2. `src` alias.
          // 3. Relative imports.
          ['^~/', '^@/', '^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',

    'unicorn/no-null': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/consistent-destructuring': 'off',
    'unicorn/prefer-number-properties': ['error', { checkInfinity: false }],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          ref: false,
          props: false,
          args: false,
          param: false,
          params: false,
          fn: false,
          vars: false,
        },
      },
    ],
    'unicorn/no-negated-condition': 'off',
    'unicorn/no-array-callback-reference': 'off',

    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'function-expression',
      },
    ],

    '@typescript-eslint/ban-types': [
      'error',
      {
        types: { '{}': false },
        extendDefaults: true,
      },
    ],
  },
};
