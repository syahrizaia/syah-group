import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a0f1d',
          800: '#111827',
        },
        gold: {
          500: '#d4af37',
          600: '#aa8c2c',
        },
        silver: '#c0c0c0',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-syne)'],
      },
    },
  },
  plugins: [],
};

export default config;