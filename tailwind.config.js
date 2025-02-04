/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A56B3C',
          dark: '#7A4C2C',
        },
        secondary: {
          DEFAULT: '#807F10',
          light: '#B9BA76',
          dark: '#7DA408',
        },
      },
      animation: {
        scroll: 'scroll 1.5s infinite',
      },
    },
  },
  plugins: [],
};