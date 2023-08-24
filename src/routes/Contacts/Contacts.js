import { useState, useRef, useEffect } from "react";
import styled from "styled-components/macro";

import { sendEmail } from "../../utils/emailjs/emailjs.utils";

import ContactForm from "../../components/ContactForm";
import ContactFormAlert from "../../components/ContactFormAlert";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import DynamicBgSection from "../../components/DynamicBgSection/DynamicBgSection";

import { COLORS, WEIGHTS, FAMILIES, QUERIES } from "../../constants";
import { setDynamicBg } from "../../helpers";

const Contacts = ({ loading }) => {
  const [buttonText, setButtonText] = useState("Відправити");
  const [alertIsVisible, setAlertIsVisible] = useState(false);

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
    <DynamicBgSection bgColor="#dba3ab" ref={contactsRef}>
      <MaxWidthWrapper>
        <Container>
          <TitleWrapper>
            <Title>Контакти</Title>
          </TitleWrapper>
          <Text>
            Будь ласка, зателефонуйте мені, якщо у вас є які-небудь питання або
            ви бажаєте домовитись про консультацію.
          </Text>
          <Details>
            <Block>
              <SecondaryHeading>
                <a href="mailto:#">jendesign@gmail.com</a>
              </SecondaryHeading>
            </Block>
            <Block>
              <TertiaryHeading>Київ, Україна</TertiaryHeading>
              <TertiaryHeading>
                <a href="tel:+">+38 093 555-44-33</a>
              </TertiaryHeading>
            </Block>
            <Block>
              <TertiaryHeading>
                <a href="#">Instagram</a>
              </TertiaryHeading>
              <TertiaryHeading>
                <a href="#">Telegram</a>
              </TertiaryHeading>
              <TertiaryHeading>
                <a href="#">Viber</a>
              </TertiaryHeading>
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
          )}
        </Container>
      </MaxWidthWrapper>
    </DynamicBgSection>
  );
};

const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 128px;
  width: min(700px, 100%);

  // Temp
  padding-top: 128px;
  color: hsl(${COLORS.white});
`;

const TitleWrapper = styled.div`
  margin-bottom: 56px;

  @media ${QUERIES.smallTabletAndUp} {
    text-align: center;
    margin-bottom: 96px;
  }
`;

const Title = styled.h1`
  font-size: calc(40 / 16 * 1rem);
  font-weight: ${WEIGHTS.regular};

  @media ${QUERIES.smallTabletAndUp} {
    font-size: calc(48 / 16 * 1rem);
  }
`;

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
    color: hsl(${COLORS.white} / 0.8);

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
    color: hsl(${COLORS.white});

    @media ${QUERIES.smallTabletAndUp} {
      font-size: calc(24 / 16 * 1rem);
    }
  }
`;

export default Contacts;
