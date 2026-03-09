/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        accent: ['"Playfair Display"', 'serif'],
      },
      colors: {
        sage: {
          50: '#f4f7f0',
          100: '#e6edd9',
          200: '#cddbb5',
          300: '#aec289',
          400: '#91aa62',
          500: '#748f47',
          600: '#5a7137',
          700: '#46592c',
          800: '#394826',
          900: '#313d23',
        },
        earth: {
          50: '#faf6f1',
          100: '#f2e8da',
          200: '#e4cfb3',
          300: '#d3b089',
          400: '#c29163',
          500: '#b47848',
          600: '#9a623c',
          700: '#7e4d32',
          800: '#68402d',
          900: '#573629',
        },
        cream: '#fdf8f2',
        charcoal: '#2c2c2c',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
