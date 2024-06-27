/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  mode:"jit",
  content: ["./*.{html,js}"],
  theme: {

    screens:{
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
     container:{
      center:true,/*  mx auto deya lagbe na */
      padding: '1rem'
     },
    
    extend: {
      fontFamily:{
        poppins: " 'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif"
      },

      colors:{
        'primary': '#FD3D57'
      }
    },
  },

  variants:{
    extend:{
      display: ['group-hover'], /* display n visibility by default group e thake na */
      visibility:['group-hover']
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

