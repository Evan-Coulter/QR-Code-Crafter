/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryDark": "#696D7D",
        "primaryLight": "#68B0AB",
        "secondary": "#8FC0A9",
        "secondaryLight": "#C8D5B9",
        "offWhite": "#ECECEC"
      },
      fontFamily: {
        jetBrainsMono: ['JetBrains Mono', 'monospace']
      },
      content: {
        logo: "url('./assets/logo.svg')",
        githubLogo: "url('./assets/github_logo.svg')"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}