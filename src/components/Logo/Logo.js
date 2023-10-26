import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import { ReactComponent as MainLogo } from "../../assets/main-logo.svg";
import { ReactComponent as PreloaderLogo } from "../../assets/preloader-logo.svg";
import { ReactComponent as MobileMenuLogo } from "../../assets/mobile-menu-logo.svg";

import { WEIGHTS, QUERIES, COLORS } from "../../constants";

const Logo = ({ type, ...delegated }) => {
  let Component;

  if (type === "main") {
    Component = MainLogo;
  } else if (type === "mobile") {
    Component = MobileMenuLogo;
  } else if (type === "preloader") {
    Component = PreloaderLogo;
  } else {
    throw new Error(
      `Unrecognized type: ${type}, please use 'main' or 'mobile'`
    );
  }

  return (
    <Wrapper {...delegated}>
      <Component />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & svg {
    width: 150px;
    fill: inherit;

    @media ${QUERIES.smallTabletAndUp} {
      width: 175px;
    }
  }
`;

// const Logo = styled(Link)`
//   font-family: var(--font-family-logo);
//   /* font-size: clamp(1.6rem, 1.4vw + 1rem, 2.5rem); */
//   font-size: calc(20 / 16 * 1rem);
//   font-weight: ${WEIGHTS.medium};
//   line-height: 1;
//   letter-spacing: 2px;
//   text-decoration: none;
//   color: inherit;
//   /* text-transform: uppercase; */

//   @media ${QUERIES.smallTabletAndUp} {
//     font-size: calc(24 / 16 * 1rem);
//   }
// `;

export default Logo;
