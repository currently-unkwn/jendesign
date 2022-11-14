import { useState } from "react";
import styled from "styled-components/macro";

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
      <Component
        {...delegated}
        onBlur={handleBlur}
        data-focused={focused.toString()}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Label>
  );
};

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input``;
const Textarea = styled.textarea``;
const ErrorMessage = styled.span`
  color: red;
  display: none;

  ${Input}:invalid[data-focused="true"] + &,
  ${Textarea}:invalid[data-focused="true"] + & {
    display: block;
  }
`;

export default FormElement;
