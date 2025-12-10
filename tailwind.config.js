/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      colors: {
        ink: '#0d1321',
        dusk: '#1d2d44',
        foam: '#eef2ff',
        blush: '#f9d8d6',
        mint: '#b9f5d8',
      },
      boxShadow: {
        brand: '0 20px 45px -30px rgba(13, 19, 33, 0.65)',
      },
    },
  },
  plugins: [],
}
