/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontSize: {
        "12": "12px",
        "13": "13px",
        "14": "14px",
        "15": "15px",
        "16": "16px",
        "18": "18px",
        "20": "20px",
        "22": "22px"
      },
      animation: {
        "marquee": "marquee 10s linear infinite"
      },
      zIndex: {
        "1": 1,
        "3": 3,
        "9": 9,
        "99": 99,
        "111": 111,
        "9999": 9999
      },
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
        '600': '600ms',
        '1500': '1500ms'
      },
      transitionDelay: {
        '350': '350ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '800': '800ms',
      },
      boxShadow: {
        'custom': '0 20px 15px 0 rgba(23, 23, 23, .05)'
      },
      fontFamily: {
        "spaceGrotesk": 'Space Grotesk, sans-serif'
      },
      backgroundPosition: {
        '0-0': '0 0'
      },
      transitionTimingFunction: {
        'ease': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      }
    },
    screens: {
      'xsm': '576px',
      'md': '768px',
      'mdx': '992px',
      'lgx': '1200px',
      'xxl': '1400px',
      '2xl': '1600px'
    },
  },
  plugins: [],
}