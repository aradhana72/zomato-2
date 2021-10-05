// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    colors: {
      zomato: {
        50: '#ffe5e7',
        100: '#fabac0',
        200: '#f18f96',
        300: '#e9626d',
        400: '#e23744',
        500: '#c81d2a',
        600: '#9d1520',
        700: '#700d16',
        800: '#46060c',
        900: '#1e0002',
      }
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
