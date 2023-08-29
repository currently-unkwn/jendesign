import { forwardRef } from "react";
import styled from "styled-components/macro";

const DynamicBgSection = ({ bgColor, children, style }, ref) => {
  return (
    <Wrapper ref={ref} data-color={bgColor} style={style}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default forwardRef(DynamicBgSection);
