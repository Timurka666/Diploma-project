/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
         backgroundImage: {
          'jewelry': "url('/public/img/390.jpg')"
         }
      },
    },
    plugins: [],
  };