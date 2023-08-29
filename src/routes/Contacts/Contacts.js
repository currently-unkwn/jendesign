import { useState, useRef, useEffect } from "react";
import styled from "styled-components/macro";

import { CONTACTS_DATA } from "../../data";

import ContactForm from "../../components/ContactForm";
import ContactFormAlert from "../../components/ContactForm/ContactFormAlert";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import DynamicBgSection from "../../components/DynamicBg/DynamicBgSection";
import ContactDetail from "./ContactDetail";

import { COLORS, WEIGHTS, FAMILIES, QUERIES } from "../../constants";
import { setDynamicBg } from "../../helpers";
import { sendEmail } from "../../utils/emailjs/emailjs.utils";

const Contacts = ({ loading }) => {
  const [buttonText, setButtonText] = useState("Відправити");
  const [alertIsVisible, setAlertIsVisible] = useState(false);

  const { fullName, details, country, city, image } = CONTACTS_DATA;

  const form = useRef();
  const contactsRef = useRef();

  // const contactsRefs = [contactsRef];

  useEffect(() => {
    setDynamicBg(contactsRef);
  });

  const showAlert = () => {
    setAlertIsVisible(true);

    setTimeout(() => {
      setAlertIsVisible(false);
    }, 3000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setButtonText("Відправляю...");

    try {
      await sendEmail(form);
      // TODO: add notification about success
      // 1. Hide the Form UI
      // 2. Display success message
      // 3. Hide message and display back UI

      // setButtonText("Send Success");
      showAlert();
      setButtonText("Відправити");
      console.log("Message sent succesfully...");
    } catch (error) {
      // TODO: add notification about error
      setButtonText("Помилка при відправленні");
      console.log("Error: message was not sent...  ⚠️");
      console.log(error);
    }
  };

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
              {alertIsVisible ? (
                <ContactFormAlert />
              ) : (
                <ContactForm
                  ref={form}
                  onSubmit={handleSubmit}
                  buttonText={buttonText}
                />
              )}
            </ContactFormWrapper>
            {/* <TitleWrapper>
            <Title>Контакти</Title>
          </TitleWrapper>
          <Text>{text}</Text>
          <Details>
            <Block>
              <SecondaryHeading>
                <a href="mailto:#">{email}</a>
              </SecondaryHeading>
            </Block>
            <Block>
              <TertiaryHeading>
                {city}, {country}
              </TertiaryHeading>
              <TertiaryHeading>
                <a href="tel:+">{tel}</a>
              </TertiaryHeading>
            </Block>
            <Block>
              {socials.map((social) => (
                <TertiaryHeading>
                  <a href={social.link} target="_blank" rel="noreferrer">
                    {social.name}
                  </a>
                </TertiaryHeading>
              ))}
            </Block>
          </Details>
          {alertIsVisible ? (
            <ContactFormAlert />
          ) : (
            <ContactForm
              ref={form}
              onSubmit={handleSubmit}
              buttonText={buttonText}
            />
          )} */}
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

const Text = styled.p`
  font-size: calc(18 / 16 * 1rem);

  @media ${QUERIES.smallTabletAndUp} {
    font-size: calc(22 / 16 * 1rem);
  }
`;

const Details = styled.div`
  padding-top: 40px;
  padding-bottom: 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  /* text-align: center; */

  & a {
    text-decoration: none;
  }

  @media ${QUERIES.smallTabletAndUp} {
    padding-top: 56px;
    padding-bottom: 40px;
    gap: 24px;
  }
`;
const Block = styled.div``;

const SecondaryHeading = styled.h2`
  &,
  & a {
    font-size: calc(24 / 16 * 1rem);
    font-weight: ${WEIGHTS.medium};
    color: hsl(${COLORS.text});

    @media ${QUERIES.smallTabletAndUp} {
      font-size: calc(32 / 16 * 1rem);
    }
  }
`;
const TertiaryHeading = styled.h3`
  &,
  & a {
    font-size: calc(20 / 16 * 1rem);
    font-weight: ${WEIGHTS.medium};
    color: hsl(${COLORS.text});

    @media ${QUERIES.smallTabletAndUp} {
      font-size: calc(24 / 16 * 1rem);
    }
  }
`;

export default Contacts;
