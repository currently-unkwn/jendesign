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

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  text-transform: uppercase;
  font-size: calc(14 / 16 * 1rem);
  color: hsl(${COLORS.white});
  letter-spacing: 0.03em;
`;

const InputStyles = `
font-size: calc(18 / 16 * 1rem);
color: hsl(${COLORS.white});
padding: 8px 0;
background: transparent;
border: none;
border-radius: 0;
border-bottom: 1px solid hsl(${COLORS.white} / 0.5);

&::placeholder {
  color: #edd4d8;
}
`;

const Input = styled.input`
  ${InputStyles}
`;

const Textarea = styled.textarea`
  ${InputStyles}
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
