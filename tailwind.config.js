/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-top': 'radial-gradient(at center top, #a8341d, #100503)',
      },
    },
  },
  plugins: [],
};
