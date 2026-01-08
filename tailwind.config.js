/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': {
          50: '#FFFEF9',
          100: '#F7F3ED',
          200: '#EDE8E0',
          300: '#E3DDD3',
        },
        'warm': {
          brown: '#2B2622',
          grey: '#6B6560',
          tan: '#B8916C',
          bronze: '#8B6F47',
        }
      },
      fontFamily: {
        'logo': ['"Great Vibes"', 'cursive'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}