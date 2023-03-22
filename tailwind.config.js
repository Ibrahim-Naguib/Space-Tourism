/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#ffffff0a",
        pcolor: "#d0d6f9",
        dark: "#0b0d17",
      },
      borderColor: {
        DEFAULT: "transparent",
      },
      backgroundImage: {
        homeDesktop: "url('../public/home/background-home-desktop.jpg')",
        homeTablet: "url('../public/home/background-home-tablet.jpg')",
        homeMobile: "url('../public/home/background-home-mobile.jpg')",
        destDesktop:
          "url('../public/destination/background-destination-desktop.jpg')",
        destTablet:
          "url('../public/destination/background-destination-tablet.jpg')",
        destMobile:
          "url('../public/destination/background-destination-mobile.jpg')",
        techDesktop:
          "url('../public/technology/background-technology-desktop.jpg')",
        techTablet:
          "url('../public/technology/background-technology-tablet.jpg')",
        techMobile:
          "url('../public/technology/background-technology-mobile.jpg')",
        crewDesktop: "url('../public/crew/background-crew-desktop.jpg')",
        crewTablet: "url('../public/crew/background-crew-tablet.jpg')",
        crewMobile: "url('../public/crew/background-crew-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
