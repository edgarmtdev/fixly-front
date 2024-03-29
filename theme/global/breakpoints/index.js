const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  mobileXL: "550px",
  tablet: "768px",
  tabletL: "820px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const BREAKPOINTS_DEVICES = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileXL: `(min-width: ${size.mobileXL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export default BREAKPOINTS_DEVICES;
