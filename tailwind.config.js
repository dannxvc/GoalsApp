/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '3rem',
        main:'4rem',
      }
    },
  },
  plugins: [
    require('tailwindcss-neumorphism')
  ],
}
