module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor : { 
          fill: '#D9D9EB',
          btncolor : '#2F2F2F',
      },
      textColor: { 
        maincolor: '#9CA4AF',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
