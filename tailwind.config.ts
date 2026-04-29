import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist)", "sans-serif"],
        serif: ["var(--font-fraunces)", "serif"],
      },
      colors: {
        ink: "var(--ink)",
        ink2: "var(--ink2)",
        ink3: "var(--ink3)",
        surface: "var(--surface)",
        card: "var(--card)",
        border: "var(--border)",
        border2: "var(--border2)",
        accent: "var(--blue)",
      },
      maxWidth: {
        page: "900px",
      },
    },
  },
  plugins: [],
};

export default config;
