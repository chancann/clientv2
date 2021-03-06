module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      "sm": "320px",
      "2sm": "480px",
      "md": "640px",
      "lg": "768px",
      "2lg": "860px",
      "xl": "1024px",
      "2xl": "1280px",
      "3xl": "1440px",
      "4xl": "1536px",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      // 'jost':['Jost', 'sans-serif'],
      poppins: ["Poppins", "sans-serif"],
      // 'montserrat':['Montserrat', 'sans-serif'],
      // 'inter':['Inter', 'sans-serif'],
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "translate(-3px)",
          },
          "50%": {
            transform: "translate(3px)",
          },
        },
        rolling:{
          "0%, 100%": {
            transform: "translate(-30px)",
          },
          "50%": {
            transform: "translate(30px)",
          },
        }
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        rolling: "rolling 2s ease-in-out infinite"
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("tw-elements/dist/plugin"),
  ],
};
