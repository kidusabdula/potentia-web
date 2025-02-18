/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}', 
      './pages/**/*.{js,ts,jsx,tsx}', 
      './components/**/*.{js,ts,jsx,tsx}', 
      './utils/**/*.{js,ts,jsx,tsx}', 
      'node_modules/@shadcn/ui/dist/**/*.js', 
    ],
    theme: {
      extend: {
        colors: {
          primary: '#FFD700',
          secondary: '#1E1E1E', 
          accent: '#00FFAA', 
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'], 
          heading: ['Poppins', 'sans-serif'],
        },
        screens: {
          xs: '480px', 
          sm: '640px', 
          md: '768px', 
          lg: '1024px', 
          xl: '1280px', 
          '2xl': '1536px', 
        },
      },
    },
    plugins: [
    //   import('@tailwindcss/forms'),
    //   import('@tailwindcss/typography'),
    //   import('@tailwindcss/aspect-ratio'),
    //   import('tailwindcss-animate'), 
    ],
  };
  