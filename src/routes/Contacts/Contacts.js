import { useState, useRef } from "react";
import styled from "styled-components/macro";

import { sendEmail } from "../../utils/emailjs/emailjs.utils";

import FormElement from "../../components/FormElement";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";

const Contacts = () => {
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const form = useRef();

  const inputs = [
    {
      id: 1,
      formControl: "input",
      label: "Name (required):",
      name: "user_name",
      type: "text",
      placeholder: "Sergey",
      errorMessage:
        "Username should be 2-20 characters and shouldn't include any special character!",
      required: true,
      pattern: "^[A-Za-z0-9]{2,20}",
    },
    {
      id: 2,
      formControl: "input",
      label: "Email (required):",
      name: "user_email",
      type: "email",
      placeholder: "me@you.com",
      errorMessage: "Should be valid email address",
      required: true,
    },
    {
      id: 3,
      formControl: "textarea",
      name: "message",
      label: "Message (required)",
      placeholder: "Hi, i just want to know...",
      errorMessage: "You need to type something in here!",
      required: true,
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await sendEmail(form);
      console.log("Message sent succesfully...");
      // TODO: add notification about success
    } catch (error) {
      // TODO: add notification about error
      console.log("Error: message was not sent...  ⚠️");
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <MaxWidthWrapper>
      <Form ref={form} onSubmit={handleSubmit}>
        <FormElement formControl="input" type="hidden" name="contact_number" />
        {inputs.map((input) => (
          <FormElement
            key={input.id}
            value={values[input.name]}
            onChange={handleChange}
            {...input}
          />
        ))}

        <button type="submit">Send</button>
      </Form>
    </MaxWidthWrapper>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default Contacts;
