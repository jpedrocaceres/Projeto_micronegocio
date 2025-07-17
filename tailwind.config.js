export default {
  darkMode: "class", // Essential for manual dark mode toggling
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Ensures dark mode variants are available
        primary: {
          DEFAULT: "#3B82F6",
          dark: "#2563EB",
        },
      },
    },
  },
  plugins: [],
};
