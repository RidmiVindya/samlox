/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'samlox-dark': '#0B0C10',
        'samlox-gold': '#FCA311',
        'samlox-gold-light': '#FFB84D',
      },
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

