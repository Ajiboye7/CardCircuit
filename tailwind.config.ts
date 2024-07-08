import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        buttonBlue: '#3555F5',
        customBg: ' #030B11',
        linkBg: '#808B961A'

      },
      
    },
  },
  plugins: [],
};
export default config;
