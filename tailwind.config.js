/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#F79F1A",
        "custom-Green": "#046E1B",
        "custom-bisq": "#FFC567",
        "custom-gray": "#7F7D7D",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'font-serif': ['Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
