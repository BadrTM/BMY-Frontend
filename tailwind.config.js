/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{vue,js,jsx,tsx,html}'],
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './public/**/*.html'
  ],
  safelist: [
    // {pattern: /.+/},
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
