import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'royal-deep': '#06152D',
        'royal-card': '#0A1428',
        gold: '#D4AF37',
        'gold-light': '#F5D76E',
        'gold-dark': '#C5A028',
        ivory: '#F6F0E4',
        silver: '#BFC5CC',
        emerald: '#0B3D2E',
        wine: '#4A0E1B',
      },
      fontFamily: {
        royal: ['Cinzel Decorative', 'serif'],
        body: ['Inter', 'sans-serif'],
        script: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
export default config;