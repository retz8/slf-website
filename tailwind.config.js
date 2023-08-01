/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      maxWidth: {
        "screen-figma": "1440px",
      },
      colors: {
        "dark-brown": "#453938",
        "less-dark-brown": "#716157",
        "custom-white": "#fffffa",
      },
    },
  },
  plugins: [],
};
