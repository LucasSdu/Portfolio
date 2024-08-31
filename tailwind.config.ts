import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        orange: "#151310",
        beige: "#FFFFFF",
        white100: "#EDE9E6",
        rot: "#FD3D00"
      },
      fontFamily: {
        pixel: ['Pixel', 'sans-serif'],
        inter : ['Inter', 'sans-serif'],
        aalto: ['Aalto', 'sans-serif'],
        feoni : ['Feoni', 'sans serif'],
        feoniMedium : ['FeoniMedium', 'sans serif']
      },
      width: {
        '128': '32rem',
        '160': '40rem',
      },
      height: {
        '128': '32rem',
        '160': '40rem',
      },
    },
  },
  plugins: [],
};
export default config;
