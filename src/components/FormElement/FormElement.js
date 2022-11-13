import styled from "styled-components/macro";
import { Component } from "react";

const FormElement = ({ label, errorMessage, formControl, ...delegated }) => {
  let Component;

  if (formControl === "input") {
    Component = Input;
  } else if (formControl === "textarea") {
    Component = Textarea;
  } else {
    throw new Error(`Unrecognized form control: ${formControl}`);
  }

  return (
    <Label>
      {label}
      <Component {...delegated} />
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
`;

export default FormElement;
