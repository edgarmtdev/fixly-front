module.exports = {
  content: [
    "./pages/**/*.{js,jsx,}",
    "./components/**/*.{js,jsx}",
    "./layouts/**/*.{js,jsx}",
    "./modules/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      phone: "300px",
      phoneL: "420px",
      tabletS: "720px",
      tablet: "800px",
      tabletL: "920px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        primary: {
          100: "#E6ECEF",
          200: "#738AAA",
          300: "#546C8C",
          400: "#3E5067",
        },
        primary_variant: {
          100: "#B8BDCC",
          200: "#959CB2",
          300: "#7D86A1",
          400: "#717B98",
        },
        moztaza: {
          100: "#FFE3B5",
          200: "#FFD591",
          300: "#FFCE81",
          400: "#FFC364",
          500: "#CD8A20",
        },
        secondary_green: {
          100: "#CDF1E1",
          200: "#AFEED2",
          300: "#94E3C0",
          400: "#75DEAF",
          500: "#4FBB8B",
        },
        secondary_red: {
          100: "#FFCCCF",
          200: "#FFA5AA",
          300: "#FF7981",
          400: "#FD4F59",
        },
      },
    },
  },
  plugins: [],
};
