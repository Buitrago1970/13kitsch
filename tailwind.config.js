/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        128: "43rem",
      },
      colors: {
        "basic-gary": "#F2F2F2",
        "transparent-black": "rgba(0, 0, 0, 0.7)",
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 8s linear infinite',
      }
    },
  },
  plugins: [],
};
