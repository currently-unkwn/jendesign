import { createGlobalStyle } from "styled-components/macro";
import { COLORS, FAMILIES } from "../../constants";
import { QUERIES } from "../../constants";

const GlobalStyles = createGlobalStyle`


/** FONTS */

/* cormorant-regular - latin */
@font-face {
  font-display: fallback; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Cormorant';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/cormorant-v21-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

/* roboto-regular - cyrillic_latin */
@font-face {
  font-display: fallback; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/roboto-v30-cyrillic_latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* roboto-500 - cyrillic_latin */
@font-face {
  font-display: fallback; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url('/fonts/roboto-v30-cyrillic_latin-500.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* roboto-700 - cyrillic_latin */
@font-face {
  font-display: fallback; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/roboto-v30-cyrillic_latin-700.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}



/* DESIGN TOKENS */

html {
  --color-white: hsl(${COLORS.white});
  --color-black: hsl(${COLORS.black});

  --color-primary: 0deg 19% 75%; /** 	#cbb2b2 */
  --color-secondary: ;
  --color-tertiary: 0deg 17% 50%; /** #956a6a */
  --color-text: 36deg 100% 96%; /** #fff7eb */

  --font-family-serif: ${FAMILIES.serif};
  --font-family-sans-serif: ${FAMILIES.sansSerif};
  --font-family-logo: ${FAMILIES.logo};

  --ease-out: cubic-bezier(0.215, 0.61, 0.355, 1);
  --ease-in: cubic-bezier(0.75, 0, 1, 1);
  --ease-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);
  --ease: cubic-bezier(0.44, 0.21, 0, 1);

  --dynamic-bg-color: yellow;
  --projects-color: indigo; 

  --header-height: 100px;
  --body-scroll: 15px;

  --gutter: 32px;

  /* @media ${QUERIES.tabletAndUp} {
    --gutter: 32px;
  } */
}

/** GLOBAL STYLES */

/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
  padding: 0;
}


  :focus-visible {
    outline-offset: 4px;
    outline-style: solid;
    outline-width: 2px;
  }

/*
  3. Allow percentage-based heights in the application
*/
html, body, #root, #__next {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  position: relative;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: var(--font-family-sans-serif);
  /* overflow-y: scroll; */
  color: hsl(${COLORS.text});


}

/** Prevents window from shifting, because of scrollbar */
body[data-preloader] {
  overflow: hidden;
  overscroll-behavior: contain;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-left: 0;
  margin-top: 0;
  margin-right: var(--body-scroll);
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;

}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

/** TEMP */
section, footer {
  /* height: 100vh;   */
  /* border-top: 1px solid red; */
}


`;

export default GlobalStyles;
