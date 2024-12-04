import type { Config } from 'tailwindcss';

import tailwindcss_animate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bicyclette: '#ff5757',
        background: 'hsl(var(--background))',
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [tailwindcss_animate],
} satisfies Config;
