import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        link: { 400: "#E3472F", 500: "#D63820" },
        "tag-design": "#00E2AD",
        "tag-ux": "#00BBFF",
        "tag-opinion": "#4271D6",
        "tag-case": "#F4973C",
        "tag-literature": "#CDDB2F",
        grays: {
          50: "#F0F0F0",
          100: "#F4F4F1",
          200: "#E6E6E6",
          300: "#CBCBCB",
          600: "#888888",
          700: "#3D3D3D",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "2xs": "0.625rem",
      },
    },
  },

  plugins: [],
  safelist: [
    "bg-tag-design",
    "bg-tag-ux",
    "bg-tag-opinion",
    "bg-tag-case",
    "bg-tag-literature",
    "text-2xs",
  ],
};
export default config;
