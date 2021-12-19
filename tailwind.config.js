module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1440px'
    },
    colors: {
      white: '#fff',
      darkBlue: '#070724',
      gray: '#3834F',
      lightGray: '#D8D8D8',
      lightBlue: '#419EB8',
      mustard: '#EDA249',
      purple: '#6F2ED6',
      darkOrange: '#D14C32',
      hotRed: '#D83A34',
      orange: '#CD5120',
      teal: '#1EC2A4',
      blue: '#2D68F0'
    },
    fontFamily: {
      'Antonio': ['Antonio'],
      'Spartan': ['Spartan']
    },
    fontSize: {
      '2xl': '5rem',
      'xl': '2.5rem',
      'lg': '1.75rem',
      'md': '0.875rem',
      'sm': '0.75rem',
      'xs': '0.688rem'
    },
    lineHeight: {
      'loose': '6.438rem',
      'relaxed': '3.25rem',
      'fit': '2.264rem',
      'normal': '1.563rem'
    },
    letterSpacing: {
      'tight': '-0.094rem',
      'normal': '0rem',
      'loose': '0.063rem',
      'looser': '0.163rem'
    },
    extend: {
      height: {
        1.5: '0.188rem',
        4.5: '1.063rem',
        18: '4.25rem',
        21: '5.313rem',
        39: '9.938rem',
      },
      gap: {
        8.5: '2.063rem'
      },
      margin: {
        5.5: '1.375rem',
        6.5: '1.688rem',
        13: '3.188rem'
      },
      padding: {
        42: '10.313rem'
      },
      inset: {
        17: '4.313rem'
      },
      width: {
        85: '21.875rem'
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['last'],
      padding: ['last']
    },
  },
  plugins: [],
}
