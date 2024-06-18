import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      laptop: { max: "1281px" },
      "laptop-md": { max: "1125px" },
      "laptop-sm": { max: "1024px" },
      tablet: { max: "850px" },
      "tablet-md": { max: "768px" },
      "tablet-sm": { max: "640px" },
      mobile: { max: "510px" },
      "mobile-lg": { max: "425px" },
      "mobile-md": { max: "375px" },
      "mobile-sm": { max: "320px" },
    },
    extend: {
      colors: {
        primary: "#654220",
        secondary: "#207E69",
        accent: "#F5B129",
        text: "#EDEBE8",
        bg: "#0E0D0B",
        "sec-bg": "#191816",
        gold: "#FFD700",
        "high-bg": "#1F150C",
      },
      spacing: {
        "page-margin-x": "var(--page-margin-x)",
        "section-pad-y": "var(--section-pad-y)",
        "section-inbetween-lg": "var(--section-inbetween-lg)",
        "section-inbetween-md": "var(--section-inbetween-md)",
      },
      fontSize: {
        logo: "var(--logo-font-size)",
        menu: "var(--menu-font-size)",
        button: "var(--button-font-size)",
        "section-title": "var(--section-title-font-size)",
        "section-description": "var(--section-description-font-size)",
      },
    },
  },
  plugins: [],
};
export default config;
