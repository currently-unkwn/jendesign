/** Preloader Component
 * Currently Not Being Used
 */

import styled, { keyframes } from "styled-components/macro";

import Logo from "../Logo/Logo";

const Preloader = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <Logo type="preloader" />
      </LogoContainer>
    </Wrapper>
  );
};

/** Preloader Animations */
const unfurl = keyframes`
 from {
      clip-path: var(--clip-from-top);
    }
    to {
      clip-path: var(--clip-to-bottom);
    }`;

const slideOut = keyframes`
   from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100%);
    }`;

const Wrapper = styled.div`
  --clip-from-top: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  --clip-to-bottom: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
  --clip-from-left: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
  --clip-to-right: polygon(100% 3%, 100% 0, 100% 100%, 100% 100%);

  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  background: hsl(0deg 54% 97%);
  z-index: 1;

  &.animated {
    animation: ${slideOut} 400ms cubic-bezier(0.75, 0, 1, 1) forwards;
    animation-delay: 800ms;
  }
`;

const LogoContainer = styled.div`
  --logo-height: 30px;

  width: 100%;
  position: absolute;
  top: calc(50% - var(--logo-height) / 2);
  display: flex;
  justify-content: center;

  ${Wrapper}.animated & {
    animation: ${unfurl} 1000ms forwards;
  }

  & svg {
    height: var(--logo-height);
    width: auto;
    fill: hsl(0deg 17% 50%);
  }
`;

export default Preloader;
