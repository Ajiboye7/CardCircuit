import { url } from 'inspector';
import type { Config } from 'tailwindcss';
import { GetStarted } from './components';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '600': '600px',
      },
      colors: {
        buttonBlue: '#3555F5',
        customBg: '#030B11',
        linkBg: '#808B961A',
        fontColor: '#F0F0F0',
        borderLine: '#3555F5',
        cardThreeBg: '#304DDE',
        textBg : '#5970BF33',
        testimonialCardBg: '#808B96',
        GetStartedTextFont:'#585F81',
        FooterBackground: '#1B2F82'
      },
      backgroundImage: {
        'hero-bg': "url('/Header Background.svg')",
        'testimonial-card': 'linear-gradient(to bottom, #808B96, transparent)',
      },
      lineHeight: {
        'extra-loose': '2.5rem',
        'extra-extra-loose': '3rem',
        'sm-loose' : '1.5',
        'slightly-loose': '1.3',
      },
      fontSize: {
        'big': '9rem',
        'footerLinkFont':'1.3rem',
      },
    },
  },
  plugins: [],
};

export default config;
