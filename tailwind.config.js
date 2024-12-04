/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfaf5',
          100: '#faf0d7',
          200: '#f5dba8',
          300: '#efc676',
          400: '#e9b144',
          500: '#e49d22',
          600: '#d08c1d',
          700: '#ad711a',
          800: '#8a591a',
          900: '#6c4617',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        arabic: ['Noto Sans Arabic', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};