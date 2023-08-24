import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { WEIGHTS, QUERIES } from "../../constants";

const Logo = styled(Link)`
  font-family: var(--font-family-logo);
  /* font-size: clamp(1.6rem, 1.4vw + 1rem, 2.5rem); */
  font-size: calc(20 / 16 * 1rem);
  font-weight: ${WEIGHTS.medium};
  line-height: 1;
  letter-spacing: 2px;
  text-decoration: none;
  color: inherit;
  /* text-transform: uppercase; */

  @media ${QUERIES.smallTabletAndUp} {
    font-size: calc(24 / 16 * 1rem);
  }
`;

export default Logo;
