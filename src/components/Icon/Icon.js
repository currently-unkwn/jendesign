import React from "react";
import styled from "styled-components/macro";
import { FiMenu, FiX } from "react-icons/fi";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiArrowDownSFill,
} from "react-icons/ri";
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";

const icons = {
  menu: FiMenu,
  close: FiX,
  facebook: RiFacebookFill,
  instagram: RiInstagramLine,
  arrowRight: ImArrowRight2,
  arrowLeft: ImArrowLeft2,
  arrowDown: RiArrowDownSFill,
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
