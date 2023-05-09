/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-yellow': '#fca311',
        'primary-gray': '#e5e5e5',
        'nav-primary-gray': 'rgba(229, 229, 229, 0.75)',
        'primary-blue': '#14213d'
      }
    }
  },
  plugins: []
};
