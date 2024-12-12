/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00bf63",
        // dark: "#121212",
        dark: "#090909"
      },
      fontFamily: {
        // Montserrat
        'montserrat-thin': ['Montserrat-Thin'],
        'montserrat-extralight': ['Montserrat-ExtraLight'],
        'montserrat-light': ['Montserrat-Light'],
        'montserrat-regular': ['Montserrat-Regular'],
        'montserrat-medium': ['Montserrat-Medium'],
        'montserrat-semibold': ['Montserrat-SemiBold'],
        'montserrat-bold': ['Montserrat-Bold'],
        'montserrat-extrabold': ['Montserrat-ExtraBold'],
        'montserrat-black': ['Montserrat-Black'],

        // Monument
        'monument-regular': ['Monument-Regular'],
        'monument-ultrabold': ['Monument-UltraBold'],
      }
    },
  },
  plugins: [],
}

