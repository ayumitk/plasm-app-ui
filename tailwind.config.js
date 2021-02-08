const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: 'media', // or false or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.teal,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      blue: {
        50: '#F5F8FB',
        100: '#DBEAFE',
        200: '#BFDBFE',
        300: '#72A5D8',
        400: '#4789CD',
        500: '#1B6DC1',
        600: '#1860AD',
        700: '#165398',
        800: '#144684',
        900: '#11396F',
      },
      gray: {
        50: '#F8FAFC',
        100: '#DFE7EF',
        200: '#C6D3E1',
        300: '#AEC0D4',
        400: '#95ACC6',
        500: '#7C99B9',
        600: '#607894',
        700: '#435870',
        800: '#27374C',
        900: '#0A1627',
      },
      darkGray:{
        50:'#F8F9FA',
        100:'#F1F4F6',
        200:'#E2E6EA',
        300:'#CFD5DB',
        400:'#98A3AF',
        500:'#687480',
        600:'#364453',
        700:'#323b4a',
        800:'#272E39',
        900:'#1E232B'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
