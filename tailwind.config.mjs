import { Lato } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  daisyui: {
    themes: ["luxury"],
  },

  theme: {
    extend: {
      fontFamily:{
        Lato:["Lato","sans-serif"]
      },
      colors: {
        kuning:'#d39840',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
