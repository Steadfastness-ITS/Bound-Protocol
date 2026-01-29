/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hanken Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#6D5EED',
        'primary-hover': '#6033FF',
        'text-primary': '#1a1a1a',
        'text-secondary': '#4D4D4D',
        'text-muted': '#738095',
        'border-light': '#E5EAF2',
        'border-gray': '#f0f0f0',
      },
    },
  },
  plugins: [],
}

