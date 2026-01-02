/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/lib/**/*.{js,jsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1200px",
      },
    },

    extend: {
      /* =========================
         FONTS
      ========================= */
      fontFamily: {
        proxima: ["Proxima Nova", "Poppins", "Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      /* =========================
         COLORS
      ========================= */
      colors: {
        primary: "#13144D",
        secondary: "#22C763",
        azure: "#F4F8FF",
        dark: "#13144D",
        text: "#30373E",
      },

      /* =========================
         SHADOWS
      ========================= */
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },

      /* =========================
         CUSTOM BREAKPOINTS
         (THIS FIXES fixed-xs, fixed-lg, lm, etc)
      ========================= */
      screens: {
        "fixed-xs": "375px",
        "fixed-sm": "480px",
        "fixed-md": "768px",
        "fixed-lg": "1024px",
        lm: "1100px",
      },
    },
  },

  plugins: [],
};
