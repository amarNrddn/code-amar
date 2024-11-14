/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'instagram-gradient': 'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
      },
      colors: {
        darkPrimary: "#333",
        'neutral-700': '#4A5568',
        darkSecondary: "#444",
      },
      scale: {
        '103': '1.03',  // skala kustom 1.07
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

