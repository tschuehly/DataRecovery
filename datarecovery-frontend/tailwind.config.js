module.exports = {
  mode: "jit",
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container:{
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px"
      },
      center: true,
      padding: '2rem',
    },
    extend: {
      colors:{
        'gray-main' : 'rgb(29 29 29)',
        'silver' : 'rgb(197 197 197)'
      },
      backgroundImage: theme => ({
        'img-hdd': " url('/assets/header.png')",
        'img-flash': "url('/assets/flash2.JPG')"
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
