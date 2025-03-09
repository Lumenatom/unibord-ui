const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        primary_color: 'var(--primary-color)',
        secondary_color: 'var(--secondary-color)',
        lightBg: '#ffffff',
        darkBg: '#121212',
      }
    },
  },
  plugins: [animate],
}