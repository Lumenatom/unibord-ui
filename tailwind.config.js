const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        customGray: 'var(--gray)',
        customBlack: 'var(--black)',
        customLightGray: 'var(--light-gray)',
        lightBg: '#ffffff',
        darkBg: '#121212',
      },
      borderRadius:{
        base :'5px'
      }
    },
  },
  plugins: [animate],
}
// --white: #FFFFFF;
// --light-gray: #E9E9EB;
// --black: #010003;
// --dark: #333335;
// --gray: #7D7D7D;
// --light-dark: #C7C7C7;
// --blue: #3D6198;
// --dark-blue: #43506C;
// --coral: #EF484C;
// --orange: #FC652B;