import { useState, useRef } from "react";

import ContactForm from "../ContactForm/ContactForm";
import ContactFormAlert from "../ContactForm/ContactFormAlert";

import { sendEmail } from "../../utils/emailjs/emailjs.utils";

const SubmitEmail = () => {
  const [buttonText, setButtonText] = useState("Відправити");
  const [alertIsVisible, setAlertIsVisible] = useState(false);

  const form = useRef();

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
    <>
      {alertIsVisible ? (
        <ContactFormAlert />
      ) : (
        <ContactForm
          ref={form}
          onSubmit={handleSubmit}
          buttonText={buttonText}
        />
      )}
    </>
  );
};

export default SubmitEmail;
