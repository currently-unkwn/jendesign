import styled from "styled-components/macro";

import VisuallyHidden from "../VisuallyHidden";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon/Icon";

const HamburgerButton = ({ ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <Icon id="menu" size={24} />
      <VisuallyHidden>Open menu</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled(UnstyledButton)`
  position: relative;

  /** Increase tap size */
  &::after {
    --tap-increment: -24px;

    content: "";
    position: absolute;
    top: var(--tap-increment);
    left: var(--tap-increment);
    right: var(--tap-increment);
    bottom: var(--tap-increment);
  }

  /* Exit animation */
  transition: opacity 450ms;

  /** Hover State */
  &:hover {
    opacity: 0.5;

    /* Enter animation */
    transition: opacity 200ms;
  }
`;

export default HamburgerButton;
