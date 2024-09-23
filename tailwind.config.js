/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'nav-black': '#0b0f19',
        'background-black': '#101725',
        'darkGray': '#1A1A1A',
        'lightGray': '#B0B0B0',
        'highlightRed': '#FF3D5A',
      },
      fontFamily: {
        'abril-fatface': ['Abril Fatface', 'display'], // Imported from https://fonts.bunny.net/css?family=abril-fatface:400|rubik:600,800i,900i
        'rubik': ['Rubik', 'sans-serif'], // Imported from https://fonts.bunny.net/css?family=abril-fatface:400|rubik:600,800i,900i
      }
    },
  },
  plugins: [],
}
