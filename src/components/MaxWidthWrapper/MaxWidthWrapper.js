import styled from "styled-components/macro";

const MaxWidthWrapper = styled.div`
  position: relative;
  max-width: calc(1400 / 16 * 1rem);

  padding: 0 var(--gutter);
  margin: 0 auto;
`;

export default MaxWidthWrapper;
