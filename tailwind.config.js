/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        montserrat: ['var(--font-montserrat)'],
      },
      colors: {
        'aeg-gold': '#C4A77D',
        'aeg-dark': '#1A1A1A',
        'aeg-light': '#F8F7F4',
      },
    },
  },
  plugins: [],
} 