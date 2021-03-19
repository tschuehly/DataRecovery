module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container:{
      center: true,
      padding: '2rem'
    },
    extend: {
      colors:{
        'primary' : 'rgb(0 106 17)'
      },
      backgroundImage: theme => ({
        'img-hdd': "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('/assets/hdd.jpg')",
        'img-flash': "url('/assets/flash.JPG')"
      })
    },
  },
  variants: {
    mixBlendMode: ['responsive'],
    backgroundBlendMode: ['responsive'],
    isolation: ['responsive'],
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-blend-mode'),
],
};
