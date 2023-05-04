/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["circular-std"],
        primaryBold: ["circular-std-bold"],
      },
      colors: {
        primary: "#000000",
        secondary: "#616161",
        "action-primary": "#3772FF",
        "action-secondary": "#353945",
        "action-error": "#EF466F",
        "action-success": "#45B26B",
      },
    },
  },
  plugins: [],
};
