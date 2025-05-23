import type { Config } from "tailwindcss";

export default {
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
      },
      fontFamily: {
        gowunBatang: ["GowunBatang", "sans-serif", "Arial"],
        greatVibes: ["GreatVibes", "sans-serif", "Arial"],
        PTSerif: ["PT Serif", "sans-serif", "Arial"]
      }
    },
  },
  plugins: [],
} satisfies Config;
