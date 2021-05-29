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
        'primary' : 'rgb(0 106 17)'
      },
      backgroundImage: theme => ({
        'img-hdd': "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('/assets/bg_pcb.jpg')",
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
