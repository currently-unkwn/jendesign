import styled from "styled-components/macro";

import { FAMILIES } from "../../constants";

const Hero = ({ image }) => {
  return (
    <HeroSection>
      <Wrapper>
        <ContentWrapper>
          <AboutText>
            Привіт, <br />я Женя.
          </AboutText>
          <SubText>
            Я працюю дизайнеркою інтер'єрів в Києві, Україна. Мені подобається
            мінімалістична та єклектична єстетика.
          </SubText>
        </ContentWrapper>
        <Photo src={image.src} alt={image.alt} />
      </Wrapper>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  padding: 152px 0;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 32px;
`;

const ContentWrapper = styled.div``;

const AboutText = styled.h1`
  margin-bottom: 32px;
  font-family: ${FAMILIES.serif};
  font-weight: 400;

  /** Base 48-68px */
  /* font-size: clamp(3rem, 1.754vw + 2.605rem, 4.25rem); */
  /* font-size: clamp(2.5625rem, 1.73vw + 2.05rem, 3.56rem);
   */
  /* line-height: clamp(3.6rem, 2.344vw + 3.073rem, 5.27rem); */
  font-size: 45px;
  line-height: 56px;

  hyphens: auto;
  -webkit-hyphens: auto;

  white-space: pre-wrap;
`;

const SubText = styled.div`
  font-size: 20px;
  line-height: 1.25;
`;

const Photo = styled.img`
  width: 560px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
`;

export default Hero;
