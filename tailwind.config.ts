import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF8", // soft white background
        primary: "#222222",    // soft charcoal for text/buttons
        accent: "#C3A47E",     // muted gold for buttons/highlights
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        serif: ["var(--font-gfs-didot)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
