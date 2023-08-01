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

      dropShadow: {
        "3xl": "0px 4px 20px 0px rgba(169, 169, 169, 0.25)",
        "4xl": "0px 4px 10px 0px rgba(163, 163, 163, 0.71)",
        "5xl": "0px 4px 40px rgba(0, 0, 0, 0.10)",
      },
      content: {
        hero: 'url("./src/assets/svgs/hero-block.svg")',
      },
      objectPosition: {
        "center-bottom": "center bottom",
      },
      flex: {
        5: "0 0 calc(100% / 5)",
        4: "0 0 calc(100% / 4)",
        3: "0 0 calc(100% / 3)",
        2: "0 0 calc(100% / 2)",
        1: "0 0 calc(100% / 1)",
      },
    },
  },
  plugins: [],
};
