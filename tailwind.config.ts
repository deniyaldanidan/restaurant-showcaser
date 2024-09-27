import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      laptop: {
        max: "1281px",
      },
      "laptop-md": {
        max: "1125px",
      },
      "laptop-sm": {
        max: "1024px",
      },
      "tablet-lg": {
        max: "910px",
      },
      tablet: {
        max: "850px",
      },
      "tablet-md": {
        max: "768px",
      },
      "tablet-sm": {
        max: "640px",
      },
      mobile: {
        max: "510px",
      },
      "mobile-lg": {
        max: "425px",
      },
      "mobile-md": {
        max: "375px",
      },
      "mobile-sm": {
        max: "320px",
      },
      "mobile-xs": {
        max: "299px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        "sec-bg": "hsl(var(--sec-background))",
        "high-bg": "hsl(var(--high-background))",
        foreground: "hsl(var(--foreground))",
        "mid-sec-fg": "hsl(var(--mid-sec-foreground))",
        "high-fg": "hsl(var(--high-foreground))",
        placeholder: "hsl(var(--placeholder))",
        gold: "hsl(var(--gold))",
        danger: "hsl(var(--danger))",
        card: {
          DEFAULT: "hsl(var(--sec-background))",
          foreground: "hsl(var(--foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--high-background))",
          foreground: "hsl(var(--mid-sec-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // text: '#EDEBE8',
        // bg: '#0E0D0B',
        // chart: {
        // 	'1': 'hsl(var(--chart-1))',
        // 	'2': 'hsl(var(--chart-2))',
        // 	'3': 'hsl(var(--chart-3))',
        // 	'4': 'hsl(var(--chart-4))',
        // 	'5': 'hsl(var(--chart-5))'
        // }
      },
      spacing: {
        "page-margin-x": "var(--page-margin-x)",
        "section-pad-y": "var(--section-pad-y)",
      },
      fontSize: {
        logo: "var(--logo-font-size)",
        menu: "var(--menu-font-size)",
        button: "var(--button-font-size)",
        "section-title": "var(--section-title-font-size)",
        "section-description": "var(--section-description-font-size)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
