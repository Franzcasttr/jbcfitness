/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        '4xl': [
          '-6px -6px 4px rgba(167, 127, 252, 0.4)',
          '6px 6px 4px rgba(167, 127, 252, 0.4)',
        ],
      },
    },
  },
  plugins: [],
};
