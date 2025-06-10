/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-primary': '#f68b1f',
        'gray-light': '#f0f0f0', // Lighter gray for backgrounds
        'gray-medium': '#e0e0e0', // Medium gray for borders/accents
        'gray-dark': '#999999', // Added: A darker gray for the navbar
        'text-dark': '#333333', // Dark text for readability
      },
      animation: {
        'gradient': 'gradient 4s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { 'box-shadow': '0 0 20px rgba(246, 139, 31, 0.3)' },
          '100%': { 'box-shadow': '0 0 30px rgba(246, 139, 31, 0.5)' }
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}