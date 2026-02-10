/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lando-lime': '#D2FF00',
        'carbon': '#0a0a0a',
      },
      fontFamily: {
        'speed': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}