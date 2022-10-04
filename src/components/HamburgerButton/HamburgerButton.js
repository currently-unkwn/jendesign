import styled from "styled-components";

import VisuallyHidden from "../VisuallyHidden";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon/Icon";

const HamburgerButton = () => {
  return (
    <Wrapper>
      <Icon id="menu" />
      <VisuallyHidden>Open menu</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled(UnstyledButton)`
  position: relative;

  /* Exit animation */
  transition: opacity 450ms;

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

  /** Hover State */
  &:hover {
    opacity: 0.5;

    /* Enter animation */
    transition: opacity 200ms;
  }
`;

export default HamburgerButton;
