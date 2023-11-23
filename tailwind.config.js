/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "steps-bg": "url(./src/assets/images/bg-sidebar-desktop.svg)",
      },
    },
  },
  plugins: [],
};
