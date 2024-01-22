import { useEffect, useRef } from "react";

import { useLocation } from "react-router-dom";
import styled from "styled-components/macro";

import GetInTouch from "../GetInTouch/GetInTouch";
import DynamicBgSection from "../DynamicBg/DynamicBgSection";
import Copyright from "../Copyright/Copyright";

import { QUERIES, COLORS, WEIGHTS } from "../../constants";
import { setDynamicBg } from "../../helpers";

const Footer = () => {
  const location = useLocation();

  const footerRef = useRef();

  const footerRefs = [footerRef];

  useEffect(() => {
    setDynamicBg(...footerRefs);
  }, []);

  const isContactsPage = location.pathname === "/contacts";

  return (
    <DynamicBgSection bgColor={COLORS.tertiary} ref={footerRef}>
      <Wrapper isContactsPage={isContactsPage}>
        <Filler />

        <GetInTouch />

        <Content>
          <Filler>
            <Copyright />
          </Filler>
          <Contacts>
            <a href="tel:#">+38 093 555-44-32</a>
            <a href="mailto:#">jendesign@gmail.com</a>
          </Contacts>
          <Social>
            <SocialContainer>
              <a
                href="https://t.me/EugeniaKuznetsova"
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
              <a
                href="https://www.instagram.com/eugenia_kuznetsova/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </SocialContainer>
          </Social>
        </Content>
      </Wrapper>
    </DynamicBgSection>
  );
};

const Wrapper = styled.footer`
  height: ${(props) => (props.isContactsPage ? "auto" : "55vh")};

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

  & a {
    font-weight: ${WEIGHTS.medium};
    text-decoration: none;
    color: inherit;

    transition: color 250ms var(--ease-in-out);
  }

  & a:hover {
    color: hsl(${COLORS.textDarker});
  }

  @media ${QUERIES.tabletAndUp} {
    align-items: flex-end;
    justify-content: revert;
    flex: 1;
    margin-top: 0;
  }
`;

const Copy = styled.div`
  font-size: calc(14 / 16 * 1rem);

  @media ${QUERIES.tabletAndUp} {
    font-size: calc(16 / 16 * 1rem);
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

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export default Footer;
