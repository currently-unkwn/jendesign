import { useState, useRef, useEffect } from "react";
import styled from "styled-components/macro";

import { sendEmail } from "../../utils/emailjs/emailjs.utils";

import ContactForm from "../../components/ContactForm";
import ContactFormAlert from "../../components/ContactFormAlert";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import DynamicBgSection from "../../components/DynamicBgSection/DynamicBgSection";
import Transitions from "../../components/Transitions/Transitions";
import GetInTouch from "../../components/GetInTouch/GetInTouch";

import { setDynamicBg } from "../../helpers";

const Contacts = ({ loading }) => {
  const [buttonText, setButtonText] = useState("Send");
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

    setButtonText("Sending...");

    try {
      await sendEmail(form);
      // TODO: add notification about success
      // 1. Hide the Form UI
      // 2. Display success message
      // 3. Hide message and display back UI

      // setButtonText("Send Success");
      showAlert();
      setButtonText("Send");
      console.log("Message sent succesfully...");
    } catch (error) {
      // TODO: add notification about error
      setButtonText("Send Error");
      console.log("Error: message was not sent...  ⚠️");
      console.log(error);
    }
  };

  return (
    <DynamicBgSection bgColor="cyan" ref={contactsRef}>
      <MaxWidthWrapper>
        {alertIsVisible ? (
          <ContactFormAlert />
        ) : (
          <ContactForm
            ref={form}
            onSubmit={handleSubmit}
            buttonText={buttonText}
          />
        )}
      </MaxWidthWrapper>
    </DynamicBgSection>
  );
};

export default Contacts;
