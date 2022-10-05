import styled from "styled-components/macro";

const Hero = ({ text, image }) => {
  return (
    <HeroSection>
      <Wrapper>
        <h1>{text}</h1>
        <img src={image.src} alt={image.alt} />
      </Wrapper>
    </HeroSection>
  );
};

const HeroSection = styled.section``;
const Wrapper = styled.div``;

export default Hero;
