import { useState } from "react";

import styled from "styled-components";
import Icon from "../Icon/Icon";
import VisuallyHidden from "../VisuallyHidden";
import { Dialog } from "@headlessui/react";
import UnstyledButton from "../UnstyledButton";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Dialog open={isOpen} onClose={onDismiss}>
      <Wrapper aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" size={24} />
          <VisuallyHidden>Close menu</VisuallyHidden>
        </CloseButton>
        <InnerWrapper>
          <Nav>
            <NavLink href="/">Projects</NavLink>
            <NavLink href="/">Contacts</NavLink>
          </Nav>

          <Footer>
            <SocialLink href="/">
              <Icon id="facebook" size={32} />
            </SocialLink>
            <SocialLink href="/">
              <Icon id="instagram" size={32} />
            </SocialLink>
          </Footer>
        </InnerWrapper>
      </Wrapper>
    </Dialog>
  );
};

const Wrapper = styled(Dialog.Panel)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: red;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 16px;
  padding: 16px;
`;

const InnerWrapper = styled.div``;

const Nav = styled.nav``;
const NavLink = styled.a``;
const Footer = styled.footer``;
const SocialLink = styled.a``;

export default MobileMenu;
