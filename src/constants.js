export const COLORS = {
  white: "0deg 0% 100%",
  black: "0deg 0% 4%",
};

export const WEIGHTS = {
  regular: 400,
};

export const FAMILIES = {
  serif:
    "Iowan Old Style, Apple Garamond, Baskerville, Times New Roman,  Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji,  Segoe UI Emoji, Segoe UI Symbol, serif",
  sansSerif:
    "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif",
  logo: "Akrobat",
};

const BREAKPOINTS = {
  phone: 600,
  smallTablet: 767,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndUp: `(min-width: ${BREAKPOINTS.phone / 16}em)`,
  smallTabletAndUp: `(min-width: ${BREAKPOINTS.smallTablet / 16}em)`,
  tabletAndUp: `(min-width: ${BREAKPOINTS.tablet / 16}em)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptop / 16}em)`,
};
