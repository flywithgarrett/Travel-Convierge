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
        midnight: {
          DEFAULT: "#0a0a12",
          light: "#12121e",
          lighter: "#1a1a2a",
        },
        foreground: "#e5e5e5",
        emerald: {
          electric: "#39FF14",
        },
      },
      fontFamily: {
        serif: ['"EB Garamond"', "Georgia", "serif"],
        sans: ["Inter", "var(--font-geist)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
export default config;
