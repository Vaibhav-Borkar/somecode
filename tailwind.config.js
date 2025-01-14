// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Specify the files to scan for class names
  ],
  theme: {
    extend: {
      colors: {
        customColor: "#FF5733",
      },
    },
  },
  plugins: [],
};
