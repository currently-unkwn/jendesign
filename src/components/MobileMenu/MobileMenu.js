import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components/macro";

import Logo from "../Logo/Logo";
import CloseButton from "../CloseButton/CloseButton";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Icon from "../Icon/Icon";
import VisuallyHidden from "../VisuallyHidden";
import * as Dialog from "@radix-ui/react-dialog";

import { COLORS, QUERIES } from "../../constants";

/** TODO: Make close button to not outline when you click with mouse  */

const MobileMenu = ({ isOpen, onDismiss }) => {
  const location = useLocation();

  useEffect(() => {
    onDismiss();
  }, [location]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Wrapper />

        <Content aria-label="Menu">
          <OuterWrapper>
            <InnerWrapper>
              <MobileLogo to="/">
                EUGENIA <br />
                KUZNETSOVA
              </MobileLogo>

              <Filler />
              <Nav>
                <MenuLink to="/" style={{ "--animation-delay": 300 + "ms" }}>
                  Головна
                </MenuLink>
                <MenuLink
                  to="/projects"
                  style={{ "--animation-delay": 400 + "ms" }}
                >
                  Проекти
                </MenuLink>
                <MenuLink
                  to="/contacts"
                  style={{ "--animation-delay": 500 + "ms" }}
                >
                  Контакти
                </MenuLink>
              </Nav>
              <DismissWrapper>
                <Dismiss>
                  {/* <span>Закрити</span> */}
                  {/* <Icon id="close" size={24} /> */}
                  <CloseButton />
                  <VisuallyHidden>Close menu</VisuallyHidden>
                </Dismiss>
              </DismissWrapper>

              <Footer>
                {/* <SocialWrapper>
                <SocialLink href="#">
                  <Icon id="facebook" size={32} />
                </SocialLink>
                <SocialLink href="#">
                  <Icon id="instagram" size={32} />
                </SocialLink>
              </SocialWrapper> */}
                &copy; Eugenia Kuznetsova 2023
              </Footer>
            </InnerWrapper>
          </OuterWrapper>
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
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: hsl(${COLORS.white} / 0.4);
  overflow-y: auto;

  &[data-state="open"] {
    animation: ${fadeIn} 300ms var(--ease-in);
    animation-delay: 0ms;
  }

  &[data-state="closed"] {
    animation: ${fadeOut} 100ms var(--ease-in);
    animation-delay: 0ms;
  }
`;

const OuterWrapper = styled(MaxWidthWrapper)`
  height: 100%;

  padding: 0 calc(var(--gutter) + var(--removed-body-scroll-bar-size)) 0
    var(--gutter);
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: calc(100% + var(--removed-body-scroll-bar-size));
  /* height: 20%; */
  /** TEMP  */
  background: hsl(${COLORS.primaryLightest});

  &[data-state="open"] {
    animation: ${fadeIn} 250ms var(--ease-in) backwards;
    animation-delay: 150ms;
  }
  &[data-state="closed"] {
    animation: ${fadeOut} 500ms var(--ease-out);
    animation-delay: 0ms;
  }

  @media ${QUERIES.laptopAndUp} {
    height: 100px;
    background: hsl(${COLORS.white});

    &[data-state="open"] {
      animation: ${slideIn} 150ms var(--ease-in) backwards;
      animation-delay: 150ms;
    }

    &[data-state="closed"] {
      animation: ${slideOut} 300ms var(--ease-out);
      animation-delay: 0ms;
    }
  }
`;

const InnerWrapper = styled.div`
  position: relative;
  /* --overfill: 64px; */

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  text-align: center;
  /* padding: 0 32px var(--overfill) 32px; */
  padding: 40px 24px;

  color: hsl(${COLORS.black});
  /* border: 1px solid red; */

  /* @media ${QUERIES.tabletAndUp} {
    padding: 60px 28px;
  } */

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;

    text-align: left;
  }

  @media ${QUERIES.desktopAndUp} {
    padding: 0;
  }
`;

const MobileLogo = styled(Logo)`
  color: hsl(${COLORS.secondary});
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Filler = styled.div`
  @media ${QUERIES.laptopAndUp} {
    flex: 1;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 120px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 200px;
  }

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
    gap: 40px;
    margin-top: 0;
  }
  /* flex-direction: column; */
`;

const DismissWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 15px;
  /* top: 10px; */
  /* right: 16px; */

  display: flex;
  gap: 2px;
  align-items: center;
  /* padding: 16px; */

  padding-top: 40px;

  @media ${QUERIES.laptopAndUp} {
    position: static;
    padding-top: 0;
    flex: 1;

    justify-content: end;
  }
`;

const Dismiss = styled(Dialog.Close)`
  background: transparent;
  border: none;
  cursor: pointer;

  animation: ${fadeIn} 250ms var(--ease) backwards,
    ${smallSlideIn} 250ms var(--ease);
  animation-delay: 600ms;
`;

const MenuLink = styled(NavLink)`
  /** TEMP  */
  font-size: calc(22 / 16 * 1rem);
  color: hsl(${COLORS.secondary} / 0.5);
  text-decoration: none;

  /** Enter Transition */
  transition: color 150ms var(--ease-in-out);

  &:hover {
    color: hsl(${COLORS.secondary});
  }

  &.active {
    color: hsl(${COLORS.secondary});
  }

  animation: ${fadeIn} 250ms var(--ease) backwards,
    ${smallSlideIn} 250ms var(--ease);
  animation-delay: var(--animation-delay);

  @media ${QUERIES.laptopAndUp} {
    font-size: calc(20 / 16 * 1rem);
  }
`;
const Footer = styled.footer`
  /* flex: 1;
  display: flex;

  align-items: flex-end; */
  margin-top: auto;
  color: inherit;
  font-size: calc(10 / 16 * 1rem);
  color: hsl(${COLORS.secondary});

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const SocialWrapper = styled.div`
  display: flex;

  animation: ${fadeIn} 250ms var(--ease) backwards,
    ${slideBottomTop} 250ms var(--ease);
  animation-delay: 1100ms;
`;

const SocialLink = styled.a``;

export default MobileMenu;
