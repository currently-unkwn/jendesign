import { useState } from "react";
import styled from "styled-components/macro";

import Spacer from "../Spacer";

import { COLORS } from "../../constants";

const FormElement = ({ label, errorMessage, formControl, ...delegated }) => {
  const [focused, setFocused] = useState(false);

  let Component;

  if (formControl === "input") {
    Component = Input;
  } else if (formControl === "textarea") {
    Component = Textarea;
  } else {
    throw new Error(`Unrecognized form control: ${formControl}`);
  }

  const handleBlur = () => {
    setFocused(true);
  };

  return (
    <Label>
      {label}
      <Spacer size={8} />
      <Component {...delegated} data-focused={focused.toString()} />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Label>
  );
};

const InputStyles = `
position: relative;
font-size: calc(18 / 16 * 1rem);
color: inherit;
padding: 8px 0;
background: transparent;
border: none;
border-radius: 0;




&::placeholder {
  color: inherit;
  opacity: 0.25;
}


`;

const Input = styled.input`
  ${InputStyles}
`;

const Textarea = styled.textarea`
  ${InputStyles}
`;

const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  text-transform: uppercase;
  font-size: calc(14 / 16 * 1rem);
  color: inherit;
  letter-spacing: 0.03em;

  &::before {
    content: "";

    position: absolute;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid currentColor;
    opacity: 0.5;

    transition: opacity 150ms var(--ease);
  }

  &:focus-within,
  &:hover {
    &::before {
      opacity: 1;
    }
  }
`;

const ErrorMessage = styled.span`
  color: red;
  display: none;

  ${Input}:invalid[data-focused="true"] + &,
  ${Textarea}:invalid[data-focused="true"] + & {
    display: block;
  }
`;

export default FormElement;
