import { useState, forwardRef } from "react";
import styled from "styled-components/macro";

import UnstyledButton from "../UnstyledButton";
import FormElement from "./FormElement";

import { WEIGHTS } from "../../constants";

const ContactForm = ({ onSubmit, buttonText, ...delegated }, ref) => {
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
      pattern: "^[A-Za-zА-Яа-я0-9]{2,20}",
    },
    {
      id: 2,
      formControl: "input",
      label: "Ваша Пошта*",
      name: "user_email",
      type: "email",
      placeholder: "me@example.com",
      pattern: "^[^s@]+@[^s@]+.[^s@]+$",
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
      rows: "6",
    },
  ];

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <Form ref={ref} onSubmit={onSubmit}>
      {/* <FormElement formControl="input" type="hidden" name="contact_number" /> */}
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
  position: relative;
  font-size: calc(14 / 16 * 1rem);
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: inherit;
  align-self: center;

  &::before {
    content: "";
    position: absolute;
    bottom: -3px;
    background-color: currentColor;
    width: 100%;
    height: 0px;
    border-bottom: 1px solid currentColor;

    transition: width 400ms;
  }

  &:hover {
    &::before {
      width: 0px;
    }
  }
`;

export default forwardRef(ContactForm);
