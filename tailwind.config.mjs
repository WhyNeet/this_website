const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk Variable", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        "secondary-background": "hsl(var(--secondary-background))",
        tertiary: "hsl(var(--tertiary))",
        background: "hsl(var(--background))",
        text: "hsl(var(--text))",
      },
    },
  },
  plugins: [],
};
