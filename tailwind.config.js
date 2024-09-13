/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
        colors: {
          primary: '#49129C',
          secondary: {
            DEFAULT: '#B40086',
            100: '#C51297',
            200: '#831266',
          },
          tertiary: '#EF2967'
        },
        fontFamily: {
          'work-black' : ['WorkSans-Black', 'sans-serif'],
          'work-ligth' : ['WorkSans-Light', 'sans-serif'],
          'work-medium': ['WorkSans-Medium', 'sans-serif'],
          'work-regular': ['WorkSans-Regular', 'sans-serif'],
          'work-bold': ['WorkSans-Bold', 'sans-serif'],
        }
    },
  },
  plugins: [],
}

