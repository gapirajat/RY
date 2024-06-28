/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '300%': '600%',
      },
        boxShadow: {
          '3xl': '3px 3px 0px 0px rgba(0, 0, 0, 1)',
        },
        animation: {
          gradient: 'animatedgradient 10s ease infinite alternate',
        },
        backgroundImage: {
          'grid-pattern': `repeating-linear-gradient(
                              white,
                              white 10px,
                              #d1d5db 10px,
                              #d1d5db 11px,
                              white 11px
                           ),
                           repeating-linear-gradient(
                              90deg,
                              white,
                              white 10px,
                              #d1d5db 10px,
                              #d1d5db 11px,
                              white 11px
                           )`
        }
    },
  },
  plugins: [],
};
