
const colors = require('tailwindcss/colors')

module.exports = {
  prefix: '',
  mode: 'jit',
  purge: [
    './src/**/*.{html,ts}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,

      gray: colors.blueGray,
      // brand colors
      brand: colors.yellow,
      // signal colors
      success: colors.green,
      danger: colors.red,
      warning: colors.amber,
      info: colors.teal,
    },
    spacing: {
      none: '0',
      gutter: '1.5rem',

      xxs: '0.25rem',
      xs: '0.5rem',
      s: '0.75rem',
      m: '1.75rem',
      l: '2rem',
      xl: '3rem',
      xxl: '6rem',
    },


  },
  variants: {
    extend: {},
  },
  plugins: [],
};
