import { useLocation } from "react-router-dom";
import styled from "styled-components/macro";

import MaxWidthWrapper from "../MaxWidthWrapper";

import { QUERIES } from "../../constants";
import { WEIGHTS, FAMILIES } from "../../constants";

const GetInTouch = () => {
  const location = useLocation();

  // Hide component on contacts page
  if (location.pathname === "/contacts") return null;

  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Content>
          <Text>Є питання?</Text>
          <Email href="mailto:#">Скажіть привіт!</Email>
        </Content>
      </MaxWidthWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 96px;

  display: flex;
  justify-content: center;
  text-align: center;

  @media ${QUERIES.tabletAndUp} {
    padding-top: 0;
  }
`;

const Content = styled.div`
  // 28 - 64, 320 - 1380
  font-size: clamp(1.75rem, 3.396vw + 1.071rem, 4rem);

  @media ${QUERIES.smallTabletAndUp} {
    display: flex;
    gap: 16px;
  }
`;
const Text = styled.h4`
  // 20 - 40, 320 - 1380
  /* font-size: clamp(1.25rem, 1.887vw + 0.873rem, 2.5rem); */

  font-weight: ${WEIGHTS.regular};

  // Temp
  /* font-family: ${FAMILIES.serif}; */
  /* font-style: italic; */
`;
const Email = styled.a``;

export default GetInTouch;
