/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "steps-bg": "url(./src/assets/images/bg-sidebar-desktop.svg)",
      },
      backgroundColor: {
        body: "hsl(217, 100%, 97%)",
        "btn-next": " hsl(213, 96%, 18%)",
      },

      textColor: {
        "step-title": "hsl(229, 24%, 87%)",
        "form-label": " hsl(213, 96%, 18%)",
      },
    },
  },
  plugins: [],
};
