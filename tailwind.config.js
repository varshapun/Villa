/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./Dist/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
   theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... } 

      'md': '800px',
      // => @media (min-width: 800px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  }
}

 
