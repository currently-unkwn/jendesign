import { useRef, useEffect } from "react";
import styled from "styled-components/macro";

import { CONTACTS_DATA } from "../../data";

import SubmitEmail from "../SubmitEmail/SubmitEmail";

import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import DynamicBgSection from "../DynamicBg/DynamicBgSection";
import ContactDetail from "./ContactDetail";
import Copyright from "../Copyright/Copyright";

import { COLORS, WEIGHTS, FAMILIES, QUERIES } from "../../constants";
import { setDynamicBg } from "../../helpers";

const Contacts = ({ loading }) => {
  const { fullName, details, country, city, image } = CONTACTS_DATA;
  console.log(details);
  const contactsRef = useRef();

  useEffect(() => {
    setDynamicBg(contactsRef);
  });

  return (
    <DynamicBgSection bgColor={COLORS.tertiary} ref={contactsRef}>
      <Wrapper>
        <HeroImageContainer>
          <picture style={{ height: "100%" }}>
            <source
              type="image/avif"
              srcSet={`${image.src.replace(
                ".jpg",
                ".avif"
              )} 1x, ${image.src.replace(
                ".jpg",
                "@2x.avif"
              )} 2x, ${image.src.replace(".jpg", "@3x.avif")} 3x`}
            />
            <source
              type="image/jpg"
              srcSet={`${image.src} 1x, ${image.src.replace(
                ".jpg",
                "@2x.jpg"
              )} 2x, ${image.src.replace(".jpg", "@3x.jpg")} 3x`}
            />

            <HeroImage id={image.id} src={image.src} alt={image.alt} />
          </picture>
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
          <CopyrightContainer>
            <Copyright />
          </CopyrightContainer>
        </MaxWidthWrapper>
      </Wrapper>
    </DynamicBgSection>
  );
};

const Wrapper = styled.div`
  padding-top: var(--header-height);
  padding-bottom: 16px;
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
  display: grid;
  grid-template-columns: 1fr;

  padding-bottom: 112px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-left: 60px;
    padding-right: 60px;
  }

  @media ${QUERIES.desktopAndUp} {
    padding-left: 80px;
    padding-right: 80px;
  }
`;

const TitleWrapper = styled.div`
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

const CopyrightContainer = styled.div`
  @media ${QUERIES.tabletAndUp} {
    text-align: center;
  }
`;

export default Contacts;
