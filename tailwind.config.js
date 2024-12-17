/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      gilroy: ['Gilroy', 'sans-serif'],
    },
    extend: {
      colors: {
        scrollbarTrack: '#333',
        scrollbarThumb: '#555',
      },
      scrollbar: ['rounded'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
],
}

