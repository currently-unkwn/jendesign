import { useLocation } from "react-router-dom";
import styled from "styled-components/macro";

import GetInTouch from "../GetInTouch/GetInTouch";

import { QUERIES } from "../../constants";

const Footer = () => {
  const location = useLocation();

  const isContactsPage = location.pathname === "/contacts";

  return (
    <Wrapper isContactsPage={isContactsPage}>
      <Filler />

      <GetInTouch />

      <Content>
        <Copy>
          <span>&copy; 2023 Jendesign</span>
        </Copy>
        <Contacts>
          <a href="#">+38 093 555-44-32</a>
          <a href="#">jendesign@gmail.com</a>
        </Contacts>
        <Social>
          <a href="#">Instagram</a>
        </Social>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: ${(props) => (props.isContactsPage ? "auto" : "50vh")};

  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletAndUp} {
    height: ${(props) => (props.isContactsPage ? "auto" : "70vh")};
  }

  @media ${QUERIES.laptopAndUp} {
    height: ${(props) => (props.isContactsPage ? "auto" : "100vh")};
  }
`;

const Filler = styled.div`
  @media ${QUERIES.tabletAndUp} {
    flex: 1;
  }
`;

const Content = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding: calc(var(--gutter) / 2) var(--gutter);

  @media ${QUERIES.tabletAndUp} {
    align-items: flex-end;
    justify-content: revert;
  }

  @media ${QUERIES.tabletAndUp} {
    margin-top: 0;
    flex: 1;
  }
`;

const Copy = styled.div`
  @media ${QUERIES.tabletAndUp} {
    flex: 1;
  }
`;
const Contacts = styled.div`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Social = styled.div`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    flex: 1;

    display: flex;
    justify-content: flex-end;
  }
`;

export default Footer;
