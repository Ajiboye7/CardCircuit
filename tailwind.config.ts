
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', 
      },
      width: {
        '600': '600px',
      },
      colors: {
        buttonBlue: '#3555F5',
        cardOneText: '#526FFF',
        customBg: '#030B11',
        linkBg: '#808B961A',
        fontColor: '#F0F0F0',
        borderLine: '#3555F5',
        cardThreeBg: '#304DDE',
        textBg : '#5970BF33',
        testimonialCardBg: '#808B96',
        GetStartedTextFont:'#585F81',
        FooterBackground: '#1B2F82',
        withEaseP: '#E3ECF4',
        BorderLineColour: '#36477A',
      },
      backgroundImage: {
        'hero-bg': "url('/Header Background.svg')",
        'footer-bg1':"url('/Group 9.svg')",
        'footer2' :"url('/Group 10.svg')",
        'footer-bg-combined': "url('/Group 9.svg'), url('/Group 10.svg')",
      },
      lineHeight: {
        'extra-loose': '2.5rem',
        'extra-extra-loose': '3rem',
        'sm-loose' : '1.5',
        'slightly-loose': '1.3',
      },
      fontSize: {
        'big': '10.5rem',
        'footerLinkFont':'1.3rem',
        'navLinkFont': '1.2rem',
        'featureP' : '1rem',
        'testimonyH1':'4.3rem',
        
      },
      borderRadius:{
        'borderCurve': '5rem',
        'lessCurve' : '4rem',
      },
      gap:{
        'btnGapSm' : '0.5rem',
      }
    },
  },
  plugins: [],
};

export default config;
