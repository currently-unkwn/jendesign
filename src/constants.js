export const COLORS = {
  white: "0deg 0% 100%",
  black: "0deg 0% 4%",
  blackLighter: "0deg 2% 11%",
  primary: "0deg 19% 75%",
  primaryLightest: "0deg 54% 97%",

  secondary: "0deg 19% 53%",
  secondaryDarkest: "0deg 33% 11%",

  tertiary: "300deg 13% 43%",
  text: "36deg 100% 96%",
  textDarker: "36deg 95% 83%",
  gray: "40deg 2% 66%",
  grayLight: "55deg 14% 83%",
  grayLight02: "80deg 18% 97%",
};

export const WEIGHTS = {
  light: 300,
  regular: 400,
  medium: 500,
};

export const FAMILIES = {
  serif:
    "Iowan Old Style, Apple Garamond, Baskerville, Times New Roman,  Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji,  Segoe UI Emoji, Segoe UI Symbol, serif",
  sansSerif:
    "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif",
  logo: "Figtree",
};

const BREAKPOINTS = {
  smallTablet: 550,
  tablet: 767,
  laptop: 1100,
  desktop: 1500,
};

export const QUERIES = {
  smallTabletAndUp: `(min-width: ${BREAKPOINTS.smallTablet / 16}em)`,
  tabletAndUp: `(min-width: ${BREAKPOINTS.tablet / 16}em)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptop / 16}em)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktop / 16}em)`,
};
