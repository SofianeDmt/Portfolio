/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/line-clamp")],
};
