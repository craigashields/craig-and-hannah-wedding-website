import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        spacing: "padding",
      },
      fontFamily: {
        blackMango: ["var(--font-blackmango)"],
        augustScript: ["var(--font-august)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        primary: "var(--color-orange)",
        secondary: "var(--color-blue)",
        tertiary: "var(--color-copper)",
        accent: "var(--color-peach)",
        typography: "var(--text-color-white)",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "daisy-",
  },
};
export default config;
