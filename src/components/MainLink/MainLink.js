import styled from "styled-components/macro";

import { Link } from "react-router-dom";

import { COLORS } from "../../constants";

const MainLink = ({ children, ...delegated }) => {
  return <Wrapper {...delegated}>{children}</Wrapper>;
};

const Wrapper = styled(Link)`
  white-space: pre-wrap;
  color: inherit;
  text-decoration: none;

  transition: color 250ms var(--ease-in-out);

  &:hover {
    color: hsl(${COLORS.textDarker});
  }
`;

export default MainLink;
