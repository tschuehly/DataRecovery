module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container:{
      center: true,
      padding: '2rem'
    },
    extend: {
      backgroundImage: theme => ({
        'img-hdd': "url('/assets/hdd.jpg')"
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
