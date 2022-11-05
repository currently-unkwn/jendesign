import { useState, Fragment } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components/macro";

import Logo from "../Logo/Logo";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import MaxWidthWrapper from "../MaxWidthWrapper";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleDismiss = () => setShowMobileMenu();

  return (
    <>
      <MaxWidthWrapper>
        <header>
          <MainHeader>
            <Logo />
            <HamburgerButton onClick={() => setShowMobileMenu(true)} />
          </MainHeader>
          <MobileMenu isOpen={showMobileMenu} onDismiss={handleDismiss} />
        </header>
      </MaxWidthWrapper>
      <Outlet />
    </>
  );
};

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;

  /** Fluid Approach */
  /* padding: 6vw 0; */
`;

export default Header;
