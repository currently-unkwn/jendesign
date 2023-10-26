import styled from "styled-components/macro";

import VisuallyHidden from "../VisuallyHidden";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon/Icon";
import ShiftBy from "../ShiftBy";

import { WEIGHTS, COLORS } from "../../constants";

const HamburgerButton = ({ ...delegated }) => {
  return (
    <ShiftBy y={0}>
      <Wrapper {...delegated}>
        {/* <Menu>Меню</Menu> */}
        {/* <Icon id="menu" size={36} /> */}
        <Box>
          <Inner></Inner>
        </Box>
        <VisuallyHidden>Open menu</VisuallyHidden>
      </Wrapper>
    </ShiftBy>
  );
};

const Inner = styled.span`
  top: auto;
  bottom: 0;
  display: block;

  &::before,
  &::after {
    position: absolute;
    width: var(--hamburger-size);
    height: 2px;
    background-color: hsl(var(--color-text));
  }

  &::before,
  &::after {
    display: block;
    content: "";

    transform: scale(1);
    transform-origin: left;
    transition: transform 150ms var(--ease-in-out);
  }

  &::after {
    top: 10px;
  }
`;

const Wrapper = styled(UnstyledButton)`
  /* position: relative; */
  display: flex;
  align-items: center;
  gap: 8px;

  /** Increase tap size */
  &::after {
    --tap-increment: -6px;

    content: "";
    position: absolute;
    top: calc(var(--tap-increment) * 3);
    left: var(--tap-increment);
    right: var(--tap-increment);
    bottom: calc(var(--tap-increment) * 3);
  }

  /* Exit animation */
  transition: opacity 450ms;

  /** Hover State */
  &:hover ${Inner} {
    /* transform: scaleX(0.5); */
    &::before,
    &::after {
      transform-origin: left;
    }

    &::before {
      transform: scaleX(1.1);
    }
    &::after {
      transform: scaleX(0.5);
    }
  }

  &:hover ${Inner}::after {
    /* transform: scaleX(1.1); */
  }
`;

const Box = styled.span`
  --hamburger-size: 36px;

  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: var(--hamburger-size);
  height: 12px;
`;

const Menu = styled.span`
  font-weight: ${WEIGHTS.medium};
`;

export default HamburgerButton;
