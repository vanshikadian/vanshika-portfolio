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
        parchment: "#F7F3EE",
        "parchment-dark": "#EDE8E1",
        "near-black": "#1C1917",
        sienna: "#BF6A4A",
        forest: "#4A6B5C",
        muted: "#78716C",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        instrument: ["var(--font-instrument)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
      fontSize: {
        "display": ["96px", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "display-sm": ["64px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-xs": ["48px", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "pull": ["40px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
