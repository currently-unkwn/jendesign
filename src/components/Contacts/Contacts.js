import { useRef, useEffect } from "react";
import styled from "styled-components/macro";

import { CONTACTS_DATA } from "../../data";

import SubmitEmail from "../SubmitEmail/SubmitEmail";

import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import DynamicBgSection from "../DynamicBg/DynamicBgSection";
import ContactDetail from "./ContactDetail";

import { COLORS, WEIGHTS, FAMILIES, QUERIES } from "../../constants";
import { setDynamicBg } from "../../helpers";

const Contacts = ({ loading }) => {
  const { fullName, details, country, city, image } = CONTACTS_DATA;

  const contactsRef = useRef();

  useEffect(() => {
    setDynamicBg(contactsRef);
  });

  return (
    <DynamicBgSection bgColor="324deg 18% 51%" ref={contactsRef}>
      <Wrapper>
        <HeroImageContainer>
          <HeroImage src={image.src} alt={image.alt} />
        </HeroImageContainer>
        <MaxWidthWrapper>
          <Container>
            <ContactInfo>
              <TitleWrapper>
                <Title>Контакти</Title>
              </TitleWrapper>

              <ContactFace>
                <p>{fullName}</p>
                <p>
                  {city}, {country}
                </p>
              </ContactFace>

              <ContactDetails>
                {details.map((detail) => (
                  <ContactDetail id={detail.id} detail={detail} />
                ))}
              </ContactDetails>
            </ContactInfo>
            <ContactFormWrapper>
              <SubmitEmail />
            </ContactFormWrapper>
          </Container>
        </MaxWidthWrapper>
      </Wrapper>
    </DynamicBgSection>
  );
};

const Wrapper = styled.div`
  padding-top: var(--header-height);
  padding-bottom: 112px;
`;

const HeroImageContainer = styled.div`
  width: 100%;
  height: 235px;

  margin-bottom: 64px;

  @media ${QUERIES.smallTabletAndUp} {
    height: 400px;
  }

  @media ${QUERIES.laptopAndUp} {
    height: 500px;
  }

  @media ${QUERIES.desktopAndUp} {
    height: 600px;
    margin-bottom: 80px;
  }
`;

const HeroImage = styled.img`
  width: 100%;

  height: 100%;
  object-fit: cover;
  object-position: 50% 75%;
`;

const Container = styled.div`
  /* margin: 0 auto;
  margin-bottom: 128px;
  width: min(700px, 100%); */
  display: grid;
  grid-template-columns: 1fr;

  padding: 0;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 0 60px;
  }

  @media ${QUERIES.desktopAndUp} {
    padding: 0 80px;
  }
`;

const TitleWrapper = styled.div`
  /* margin-bottom: 56px;

  @media ${QUERIES.smallTabletAndUp} {
    text-align: center;
    margin-bottom: 96px;
  } */
  margin-bottom: 24px;

  @media ${QUERIES.desktopAndUp} {
    margin-bottom: 48px;
  }
`;

const Title = styled.h1`
  font-size: calc(18 / 16 * 1rem);
  font-weight: ${WEIGHTS.medium};

  @media ${QUERIES.smallTabletAndUp} {
    font-size: calc(20 / 16 * 1rem);
  }
`;

const ContactFace = styled.div`
  font-size: calc(14 / 16 * 1rem);
  font-weight: ${WEIGHTS.medium};

  margin-bottom: 16px;

  @media ${QUERIES.desktopAndUp} {
    font-size: calc(18 / 16 * 1rem);
    margin-bottom: 24px;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 56px;

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 0;
  }
`;

const ContactFormWrapper = styled.div`
  & button[type="submit"] {
    align-self: start;
  }
`;

const ContactDetails = styled.div``;

export default Contacts;
