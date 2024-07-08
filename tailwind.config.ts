import { url } from 'inspector';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        buttonBlue: '#3555F5',
        customBg: '#030B11',
        linkBg: '#808B961A',
        fontColor: '#F0F0F0',
        borderLine: ' #3555F5'
      },
      backgroundImage:{
        'hero-bg': "url('/Header Background.svg')"
      }
    },
  },
  plugins: [],
};

export default config;
