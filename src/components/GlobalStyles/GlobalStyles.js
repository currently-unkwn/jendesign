import { createGlobalStyle } from "styled-components/macro";
import { COLORS, FAMILIES } from "../../constants";
import { QUERIES } from "../../constants";

const GlobalStyles = createGlobalStyle`


/** FONTS */

@font-face {
        font-family: "Akrobat";
        font-style: normal;
        font-weight: 700;
        font-display: fallback;
        src: url(/fonts/Akrobat-Bold.woff2)
          format("woff2");
      }

/* DESIGN TOKENS */

html {
  --color-white: hsl(${COLORS.white});
  --color-black: hsl(${COLORS.black});

  --font-family-serif: ${FAMILIES.serif};
  --font-family-sans-serif: ${FAMILIES.sansSerif};
  --font-family-logo: ${FAMILIES.logo};

  --ease-out: cubic-bezier(0.215, 0.61, 0.355, 1);
  --ease-in: cubic-bezier(0.75, 0, 1, 1);
  --ease-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);
  --ease: cubic-bezier(0.44, 0.21, 0, 1);

  --dynamic-bg-color: yellow;
  --projects-color: indigo; 

  --gutter: 16px;

  @media ${QUERIES.tabletAndUp} {
    --gutter: 32px;
  }
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
  overflow-y: scroll;
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
