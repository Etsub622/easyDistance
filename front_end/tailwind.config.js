/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}", 
      "./index.html", 
  ],
  theme: {
     fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      epilogue: ['Epilogue'],
      langar:['Langar']
      },
      fontSize: {
        '48': '48px',
        '28': '20px',
        '30':'24px',
        '36': '36px',
        '70': '70px',
      },
    extend: {
      
 colors: {
        customColor: ['#43C5A4', '#515B6F', '#12C698', '#6FC2AD'],
        customColor1: ['#26705D', '#0ACF83', '#DAF3ED', '#02241C'],
        cardBackground: ['#F5F8F7','#662D00'],
        
      },
       boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
         'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.5)',
            'custom-green': '0 8px 16px rgba(67, 197, 164, 0.6), 0 4px 8px rgba(67, 197, 164, 0.4)',
      }
    },
  },
  plugins: [],
}

