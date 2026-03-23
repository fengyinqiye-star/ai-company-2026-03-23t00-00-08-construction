import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B6F47",
          dark: "#6B5235",
          light: "#A8906C",
        },
        secondary: {
          DEFAULT: "#D4C5A9",
          light: "#EDE6D6",
        },
        background: "#FAF8F5",
        surface: "#FFFFFF",
        accent: "#5B8C5A",
        cta: {
          DEFAULT: "#C67B3C",
          hover: "#B06A30",
        },
        text: {
          primary: "#3C2F1E",
          secondary: "#7A6B5A",
        },
        border: "#D1C4B0",
        error: "#D94F4F",
        success: "#4CAF50",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Noto Serif JP", "serif"],
        sans: ["var(--font-sans)", "Noto Sans JP", "sans-serif"],
      },
      fontSize: {
        "heading-1": ["2.5rem", { lineHeight: "1.4", fontWeight: "700" }],
        "heading-2": ["2rem", { lineHeight: "1.4", fontWeight: "700" }],
        "heading-3": ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.8", fontWeight: "400" }],
        caption: ["0.875rem", { lineHeight: "1.6", fontWeight: "400" }],
      },
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        section: "5rem",
        "section-mobile": "3rem",
      },
    },
  },
  plugins: [],
};

export default config;
