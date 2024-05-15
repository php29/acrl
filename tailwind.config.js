/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: {
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
  theme: {
    extend: {
      screens: {
        'mobile': '366px',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-red': '#B7040B',
        'main': '#393939',
      },
      backgroundImage: {
        'bg-pattern': "url('/assets/images/bg-pattern.png')",
      }
    },
  },
  plugins: [],
}