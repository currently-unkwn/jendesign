import styled, { keyframes } from "styled-components/macro";
import Icon from "../Icon/Icon";
import VisuallyHidden from "../VisuallyHidden";

import { COLORS } from "../../constants";
import * as Dialog from "@radix-ui/react-dialog";

/** TODO: Make close button to not outline when you click with mouse  */

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Wrapper />
        <Content aria-label="Menu">
          <CloseButton>
            <Icon id="close" size={24} />
            <VisuallyHidden>Close menu</VisuallyHidden>
          </CloseButton>
          <InnerWrapper>
            <Filler />
            <Nav>
              <NavLink href="/" style={{ "--animation-delay": 600 + "ms" }}>
                Projects
              </NavLink>
              <NavLink href="/" style={{ "--animation-delay": 700 + "ms" }}>
                Contacts
              </NavLink>
            </Nav>

            <Footer>
              <SocialWrapper>
                <SocialLink href="/">
                  <Icon id="facebook" size={32} />
                </SocialLink>
                <SocialLink href="/">
                  <Icon id="instagram" size={32} />
                </SocialLink>
              </SocialWrapper>
            </Footer>
          </InnerWrapper>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-100%);
  }
`;

const slideBottomTop = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const smallSlideIn = keyframes`
  from {
    transform: translateY(-20%);
  }
  to {
    transform: translateY(0%);
  }
`;

const Wrapper = styled(Dialog.Overlay)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: hsl(${COLORS.black});

  &[data-state="open"] {
    animation: ${fadeIn} 400ms var(--ease-in);
    animation-delay: 0ms;
  }

  &[data-state="closed"] {
    animation: ${fadeOut} 200ms var(--ease-in);
    animation-delay: 0ms;
  }
`;

const Content = styled(Dialog.Content)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: calc(100% + var(--removed-body-scroll-bar-size));
  height: 100%;
  background: red;

  &[data-state="open"] {
    animation: ${slideIn} 250ms var(--ease-in) backwards;
    animation-delay: 250ms;
  }
  &[data-state="closed"] {
    animation: ${slideOut} 500ms var(--ease-out);
    animation-delay: 0ms;
  }
`;

const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 10px;
  right: 16px;
  padding: 16px;
  background: transparent;
  border: none;
  cursor: pointer;

  animation: ${fadeIn} 250ms var(--ease) backwards,
    ${smallSlideIn} 250ms var(--ease);
  animation-delay: 1000ms;
`;

const InnerWrapper = styled.div`
  --overfill: 64px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px var(--overfill) 32px;
`;

const Filler = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const NavLink = styled.a`
  font-size: 2rem;

  animation: ${fadeIn} 250ms var(--ease) backwards,
    ${smallSlideIn} 250ms var(--ease);
  animation-delay: var(--animation-delay);
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;

  align-items: flex-end;
`;

const SocialWrapper = styled.div`
  display: flex;

  animation: ${fadeIn} 250ms var(--ease) backwards,
    ${slideBottomTop} 250ms var(--ease);
  animation-delay: 1000ms;
`;

const SocialLink = styled.a``;

export default MobileMenu;
