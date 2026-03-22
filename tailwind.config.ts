import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        emerald: {
          electric: "#39FF14",
          glow: "#32e612",
          deep: "#2bcc10",
        },
      },
      fontFamily: {
        sans: ["Inter", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.06em",
      },
      backdropBlur: {
        glass: "24px",
      },
    },
  },
  plugins: [],
};
export default config;
