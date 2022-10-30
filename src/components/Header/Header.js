import { useState } from "react";
import styled from "styled-components/macro";

import Logo from "../Logo/Logo";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header>
      <MainHeader>
        <Logo />
        <HamburgerButton onClick={() => setShowMobileMenu(true)} />
      </MainHeader>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
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
