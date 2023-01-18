import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components/macro";

import Logo from "../Logo/Logo";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import MaxWidthWrapper from "../MaxWidthWrapper";
import MobileMenu from "../MobileMenu/MobileMenu";

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
            <Logo />
            <HamburgerButton onClick={() => setShowMobileMenu(true)} />
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
  width: 100%;
  transition: transform 350ms, opacity 350ms;
  /* background-color: red; */
  z-index: 9999;
`;
const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  /** Fluid Approach */
  /* padding: 6vw 0; */
`;

export default Header;
