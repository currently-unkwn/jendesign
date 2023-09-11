import styled from "styled-components/macro";

import { COLORS } from "../../constants";

const CloseButton = () => {
  return (
    <Wrapper>
      <span></span>
      <span></span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --close-button-size: 28px;

  position: relative;
  width: var(--close-button-size);
  height: var(--close-button-size);

  & span {
    position: absolute;
    top: 50%;
    right: 0;
    display: block;
    width: var(--close-button-size);
    height: 2px;
    background-color: currentColor;
    transform: rotate(45deg);
    transition: transform 150ms var(--ease-in-out);
  }

  & span:last-child {
    transform: rotate(-45deg);
  }

  &:hover span {
    transform: rotate(0deg);
  }
`;

export default CloseButton;
