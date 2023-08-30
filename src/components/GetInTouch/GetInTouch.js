import { useLocation } from "react-router-dom";
import styled from "styled-components/macro";

import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import UnstyledButton from "../UnstyledButton/UnstyledButton";

import { QUERIES } from "../../constants";
import { WEIGHTS, FAMILIES, COLORS } from "../../constants";

const GetInTouch = () => {
  const location = useLocation();

  // Hide component on contacts page
  if (location.pathname === "/contacts") return null;

  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Content>
          <Text>Є питання?</Text>
          <Message href="mailto:#">Пишіть</Message>
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
  line-height: 1.1;

  // Temp
  /* font-family: ${FAMILIES.serif}; */
  /* font-style: italic; */
`;

const Message = styled(UnstyledButton)`
  position: relative;
  display: inline-block;

  line-height: 1;

  &::before {
    content: "";
    position: absolute;
    bottom: -3px;
    background-color: currentColor;
    width: 100%;
    height: 0px;
    border-bottom: 2px solid currentColor;

    transition: width 400ms;
  }

  &:hover {
    &::before {
      width: 0px;
    }
  }

  @media ${QUERIES.tabletAndUp} {
    &::before {
      border-bottom: 3px solid currentColor;
    }
  }
`;

export default GetInTouch;
