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
          900: '#0a0d14',
          800: '#111827',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        cyan: { 400: '#22d3ee' },
        blue: { 500: '#3b82f6' },
        emerald: { 400: '#34d399' },
        silver: '#94a3b8',
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
