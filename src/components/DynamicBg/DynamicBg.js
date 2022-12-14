import styled from "styled-components/macro";

const DynamicBg = () => {
  return (
    <Wrapper
      style={{ "--background-color": "var(--dynamic-bg-color)" }}
    ></Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background-color: var(--background-color);

  transition: background-color 500ms;
`;
export default DynamicBg;
