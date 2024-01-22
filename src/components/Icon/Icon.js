import React from "react";
import styled from "styled-components/macro";
import { FiMenu, FiX } from "react-icons/fi";
import {
  RiTelegramFill,
  RiInstagramFill,
  RiArrowDownSFill,
} from "react-icons/ri";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";

const icons = {
  menu: FiMenu,
  close: FiX,
  telegram: RiTelegramFill,
  instagram: RiInstagramFill,
  arrowRight: RxArrowRight,
  arrowLeft: RxArrowLeft,
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
