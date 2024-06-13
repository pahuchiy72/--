/** @type {import('tailwindcss').Config} */
import { wedgesTW } from '@lemonsqueezy/wedges';

export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [wedgesTW()],
  darkMode: 'class',
};
