import { useState, useEffect } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import styled from "styled-components/macro";

import Logo from "../Logo/Logo";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import MaxWidthWrapper from "../MaxWidthWrapper";
import MobileMenu from "../MobileMenu/MobileMenu";

import { QUERIES, COLORS } from "../../constants";
import Icon from "../Icon/Icon";

const HEADER_HIDE_THRESHOLD = 200;

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleDismiss = () => setShowMobileMenu(false);

  //TODO: Consider using js throttle to handle performance
  useEffect(() => {
    let previousScrollValue;

    const handleScroll = function () {
      const currentScroll = window.scrollY;

      // if its not a number (null or undefined)
      if (typeof previousScrollValue !== "number") {
        // if i not yet scrolled, save current value
        // and if next time i scroll, it will be previous scroll
        previousScrollValue = currentScroll;
        return;
      }

      const direction = currentScroll > previousScrollValue ? "down" : "up";

      if (
        isHeaderVisible &&
        direction === "down" &&
        currentScroll > HEADER_HIDE_THRESHOLD
      ) {
        setIsHeaderVisible(false);
      } else if (!isHeaderVisible && direction === "up") {
        setIsHeaderVisible(true);
      }

      previousScrollValue = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHeaderVisible]);

  const opacity = isHeaderVisible ? "1" : "0";
  const transform = isHeaderVisible ? "translateY(0)" : "translateY(-100%)";

  return (
    <>
      <Wrapper style={{ transform, opacity }}>
        <MaxWidthWrapper>
          <MainHeader>
            {/* <Icon id="TestLogo" size={24} color="red" /> */}
            {/* <DesktopLogo /> */}
            <Link to="/">
              <MainLogo type="main" />
            </Link>

            {/* <DesktopNav>
              <Nav>
                <MenuLink to="/">Головна</MenuLink>
                <MenuLink to="/projects">Проекти</MenuLink>
                <MenuLink to="/contacts">Контакти</MenuLink>
              </Nav>
            </DesktopNav> */}
            <MobileNav>
              <HamburgerButton onClick={() => setShowMobileMenu(true)} />
            </MobileNav>
          </MainHeader>
          <MobileMenu isOpen={showMobileMenu} onDismiss={handleDismiss} />
        </MaxWidthWrapper>
      </Wrapper>

      <Outlet />
    </>
  );
};

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: calc(100vw - var(--body-scroll));
  transition: transform 350ms, opacity 350ms;
  /* border-bottom: 1px solid hsl(${COLORS.white} / 0.5); */
  /* background-color: red; */
  z-index: 9999;
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 40px 0; */
  height: var(--header-height);

  /** Fluid Approach */
  /* padding: 4vw 0; */
`;

const DesktopNav = styled.div`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: revert;
  }
`;

const MainLogo = styled(Logo)`
  fill: hsl(${COLORS.text});
`;

const MobileNav = styled.div`
  /* @media ${QUERIES.tabletAndUp} {
    display: none;
  } */
`;

const Nav = styled.nav``;
const MenuLink = styled(NavLink)`
  text-decoration: none;

  // Temp
  font-size: 18px;
  color: white;
  font-weight: 500;

  &:not(:last-child) {
    margin-right: 32px;
  }

  &.active {
    text-decoration: underline;
  }
`;

export default Header;
