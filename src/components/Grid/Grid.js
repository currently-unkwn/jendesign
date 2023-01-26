import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const Grid = styled.div`
  display: grid;
  grid-template-columns: [full-start] 1fr [col-start] repeat(10, minmax(0, 1fr)) [col-end] 1fr [full-end];
  gap: 16px;

  padding-left: var(--body-gap);
  padding-right: var(--body-gap);

  @media ${QUERIES.tabletAndUp} {
    gap: 32px;
  }
`;

export default Grid;
