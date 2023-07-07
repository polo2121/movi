export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          dark: "#050636",
          light: "#E9F8F9",
          normal: "#537FE7",
        },
      },
      backgroundImage: {
        movieSlideInfoBg:
          "linear-gradient(179deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.80) 100%)",
      },
      boxShadow: {
        "3xl": "0px 4px 20px 0px rgba(169, 169, 169, 0.25)",
        "4xl": "0px 4px 10px 0px rgba(163, 163, 163, 0.71)",
      },
      content: {
        hero: 'url("./src/assets/svgs/hero-block.svg")',
      },
      objectPosition: {
        "center-bottom": "center bottom",
      },
    },
  },
  plugins: [],
};
