import styled from "styled-components/macro";

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

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;

  /** Fluid Approach */
  /* padding: 6vw 0; */
`;

export default Header;
