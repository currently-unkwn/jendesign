import styled from "styled-components";

import Logo from "../Logo/Logo";
import HamburgerButton from "../HamburgerButton/HamburgerButton";

const Header = () => {
  return (
    <header>
      <MainHeader>
        <Logo />
        <HamburgerButton />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div``;

export default Header;
