/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        secondary: {
          light: '#FFF170',
          DEFAULT: '#FFB800',
          dark: '#A97C07'
        },

      },
    },
  },
  plugins: [],
}

