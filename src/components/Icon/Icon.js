import React from "react";
import styled from "styled-components/macro";
import { FiMenu, FiX } from "react-icons/fi";
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri";

const icons = {
  menu: FiMenu,
  close: FiX,
  facebook: RiFacebookFill,
  instagram: RiInstagramLine,
};

const Icon = ({ id, color, size, strokeWidth, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > svg {
    display: block;
    stroke-width: ${(p) =>
      p.strokeWidth !== undefined ? p.strokeWidth + "px" : undefined};
  }
`;

export default Icon;
