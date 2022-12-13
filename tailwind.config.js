/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./Html/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        'regalblue': '#243c5a',
         'bluish'  :'#120036',
        'mytheme' : '#0d0025'
      },
    }
  },
  plugins: [],
}
