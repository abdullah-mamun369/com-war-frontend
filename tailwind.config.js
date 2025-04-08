/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#010E33",
        secondary: "#62D4F9",
        accent: "#F5A623",
        background: "#ffffff",
        text: "#333333",
      },
      backgroundImage: {
        "footer-gradient":
          "radial-gradient(ellipse at 50% 110%, rgba(9, 90, 140, 1) -20%, rgba(2, 17, 45, 1) 60%)",
        "owner-gradient":
          "radial-gradient(ellipse at 50% 50%, rgba(9, 90, 140, 1) -70%, rgba(2, 17, 45, 1) 100%)",
      },
    },
  },
  plugins: [],
};
