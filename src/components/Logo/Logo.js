import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const Logo = () => {
  return <Wrapper to="/">Jendesign</Wrapper>;
};

const Wrapper = styled(Link)`
  font-family: var(--font-family-logo);
  font-size: clamp(1.6rem, 1.4vw + 1rem, 2.5rem);
  line-height: 1;
  letter-spacing: -0.7px;
  text-decoration: none;
  color: inherit;
`;

export default Logo;
