/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   roboto: ['Roboto', 'sans-serif']
      // },
      colors: {
        darkPrimary: "#333",
        darkSecondary: "#444",
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.5)', opacity: '0.7' },
        },
        rainbow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        pulseDot: 'pulseDot 1.5s infinite',
        rainbow: 'rainbow 3s ease-in-out infinite',
      },
      backgroundSize: {
        '400%': '400%',
      },
    },
  },
  plugins: [],
}

