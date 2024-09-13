/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
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

