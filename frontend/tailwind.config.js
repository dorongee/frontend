/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        pretendard: 'var(--font-pretendard)',
      },
    },
    colors: {
      dorong: {
        black: 'var(--dorong-black)',
        white: 'var(--dorong-white',
        error: 'var(--dorong-error)',
        positive: 'var(--dorong-positive)',

        primary: {
          dark: 'var(--dorong-primary-dark)',
          main: 'var(--dorong-primary)',
          light: 'var(--dorong-primary-light)',
        },

        gray: {
          0: 'var(--dorong-gray-0)',
          1: 'var(--dorong-gray-1)',
          2: 'var(--dorong-gray-2)',
          3: 'var(--dorong-gray-3)',
          4: 'var(--dorong-gray-4)',
          5: 'var(--dorong-gray-5)',
          6: 'var(--dorong-gray-6)',
          7: 'var(--dorong-gray-7)',
          8: 'var(--dorong-gray-8)',
        },
      },
    },
  },
  plugins: [],
};
