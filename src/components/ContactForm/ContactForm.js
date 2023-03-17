import { useState, forwardRef } from "react";
import styled from "styled-components/macro";

import UnstyledButton from "../UnstyledButton";
import FormElement from "../FormElement";

import { COLORS, WEIGHTS } from "../../constants";

const ContactForm = ({ onSubmit, buttonText }, ref) => {
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const inputs = [
    {
      id: 1,
      formControl: "input",
      label: "Повне ім'я*",
      name: "user_name",
      type: "text",
      placeholder: "Оксана Ткаченко",
      errorMessage:
        "Username should be 2-20 characters and shouldn't include any special character!",
      required: true,
      pattern: "^[A-Za-z0-9]{2,20}",
    },
    {
      id: 2,
      formControl: "input",
      label: "Ваш Email*",
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
      label: "Повідомлення*",
      placeholder: "Привіт, напишіть про ваш проект...",
      errorMessage: "You need to type something in here!",
      required: true,
      cols: "40",
      rows: "6",
    },
  ];

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <Form ref={ref} onSubmit={onSubmit}>
      <FormElement formControl="input" type="hidden" name="contact_number" />
      {inputs.map((input) => (
        <FormElement
          key={input.id}
          value={values[input.name]}
          onChange={handleChange}
          {...input}
        />
      ))}

      <Submit type="submit">{buttonText}</Submit>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Submit = styled(UnstyledButton)`
  font-size: calc(14 / 16 * 1rem);
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: hsl(${COLORS.white});
  align-self: center;

  &::after {
    content: "";
    display: block;
    margin-top: 2px;
    width: 100%;
    border-bottom: 1px solid hsl(${COLORS.white});
  }
`;

export default forwardRef(ContactForm);
