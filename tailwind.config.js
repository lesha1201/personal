/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      // Plain
      current: 'currentColor',
      transparent: 'transparent',
      inherit: 'inherit',
      black: 'rgb(var(--color-black) / <alpha-value>)',
      white: 'rgb(var(--color-white) / <alpha-value>)',

      // Semantic
      base: {
        bg: 'rgb(var(--color-base-bg) / <alpha-value>)',
        border: 'rgb(var(--color-base-border) / <alpha-value>)',
        'text-strong': 'rgb(var(--color-base-text-strong) / <alpha-value>)',
        'text-weak': 'rgb(var(--color-base-text-weak) / <alpha-value>)',
        surface: 'rgb(var(--color-base-surface) / <alpha-value>)',
        'surface-text-strong':
          'rgb(var(--color-base-surface-text-strong) / <alpha-value>)',
        'surface-text-weak':
          'rgb(var(--color-base-surface-text-weak) / <alpha-value>)',
      },
      primary: {
        text: 'rgb(var(--color-primary-text) / <alpha-value>)',
        border: 'rgb(var(--color-primary-border) / <alpha-value>)',
        surface: 'rgb(var(--color-primary-surface) / <alpha-value>)',
        'surface-text-strong':
          'rgb(var(--color-primary-surface-text-strong) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
