import { Roboto } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        bold: "700",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        beige: "#e3dcd5",
      },
    },
  },
  plugins: [],
} satisfies Config;
