/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        luckiest: ['Luckiest Guy', 'cursive'],
        magra: ['Magra', 'sans-serif'],
      },

      backgroundImage: {
        'about-bg': "url('/src/assets/AboutPage/aboutBG.png')",
      },
      
      
    },
  },
  plugins: [],
}

