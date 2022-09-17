/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        site: {
          orange: "#FEAC5E",
          purple: "#C779D0",
          blue: "#4BC0C8",
        },
      },
      fontFamily: {
        'sf-pro': ["SF Pro Rounded"],
      }
    },
  },
  plugins: [],
}