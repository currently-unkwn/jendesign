import styled from "styled-components/macro";

import { QUERIES } from "../../constants";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return <Wrapper>&copy; Eugenia Kuznetsova {currentYear}</Wrapper>;
};

const Wrapper = styled.div`
  font-size: calc(14 / 16 * 1rem);

  @media ${QUERIES.tabletAndUp} {
    font-size: calc(16 / 16 * 1rem);
    /* flex: 1; */
  }
`;

export default Copyright;
