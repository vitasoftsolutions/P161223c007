/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#007BFF",
          "secondary": "#6C757D",
          "success": "#28A745",
          "danger": "#DC3545",
          "warning": "#FFC107",
          "info": "#17A2B8",
          "light": "#F8F9FA",
          "dark": "#343A40",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
    ],
  },
  theme: {
    extend: {
      colors: {
        erp_primary: "#007BFF",
        erp_shadow: "#EEEEEE",
        erp_secondary: "#6C757D",
        erp_success: "#28A745",
        erp_danger: "#DC3545",
        erp_warning: "#FFC107",
        erp_info: "#17A2B8",
        erp_light: "#F8F9FA",
        erp_dark: "#343A40",
        // Others
        erp_bg_main: "#EDE4D9",
        erp_blue: "blue",
        erp_menu: "#353C4B",
        erp_top_menu: "#353C4B",
        erp_menu_icons: "#ffff",
        erp_menu_text: "#ffffff",
        erp_submenu_icons: "#ffff",
        erp_submenu_text: "#ffffff",
        erp_extended_icons:"#ffff"
      },
    },
  },
  plugins: [require("daisyui")],
};
