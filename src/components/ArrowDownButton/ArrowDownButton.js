import { useEffect } from "react";
import { Link } from "react-scroll";
import styled, { keyframes } from "styled-components/macro";

import Icon from "../Icon/Icon";
import UnstyledButton from "../UnstyledButton/UnstyledButton";

import { COLORS } from "../../constants";

const ArrowDownButton = ({ id }) => {
  return (
    <Wrapper>
      <Link to={id} smooth={true} duration={700}>
        <Inner>
          <Line />
          <ArrowDown id="arrowDown" size={17} />
        </Inner>
      </Link>
    </Wrapper>
  );
};

const drawIn = keyframes`
    0% {
        transform: translateY(-100%);
    }
    50%, 51% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(112%);
    }
`;

const Wrapper = styled(UnstyledButton)`
  height: 80px;
  width: 17px;

  /** Prevent white arrow line from spilling over the element */
  overflow: hidden;
`;

const Inner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  animation: ${drawIn} 3.5s forwards infinite var(--ease);
`;

const Line = styled.div`
  position: absolute;
  left: 8px;
  bottom: 9px;
  height: 80px;
  width: 1px;
  background-color: hsl(${COLORS.text});
`;

const ArrowDown = styled(Icon)`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export default ArrowDownButton;
