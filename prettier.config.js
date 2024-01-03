/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'avoid',
  trailingComma: 'all',
  semi: true,
  useTabs: false,
  tabWidth: 2,
  bracketSpacing: true,
  singleQuote: true,
  bracketSameLine: false,
  printWidth: 80,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['tv'],
  proseWrap: 'always',
};
