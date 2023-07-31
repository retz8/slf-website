/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      maxWidth: {
        figma: "1000px",
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
