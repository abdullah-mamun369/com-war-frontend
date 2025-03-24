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

        // "footer-gradient":
        //   "radial-gradient(circle at 50% -90%,  rgba(1, 84, 103, 100), rgba(1, 14, 51, 100))",
        // "radial-gradient(circle at 50% 80%, rgba(1, 14, 51, 100), #0A1F3D 80%)",
      },
    },
  },
  plugins: [],
};
