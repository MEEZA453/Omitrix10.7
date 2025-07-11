/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',       // for pages router
    './app/**/*.{js,ts,jsx,tsx}',         // if you're using App Router
    './components/**/*.{js,ts,jsx,tsx}',  // for components
  ],
  theme: {
    extend: {
      fontFamily: {
        sofia: ['"Sofia Sans Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
