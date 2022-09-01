/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '43rem',
      },
      colors: {
        'basic-gary': '#F2F2F2',
      },
    },
  },
  plugins: [],
}
