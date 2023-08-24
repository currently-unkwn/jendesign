import styled from "styled-components/macro";

import { ABOUT_DATA } from "../../data";
import { QUERIS, FAMILIES, QUERIES } from "../../constants";

const MainHero = () => {
  const { id, text, image } = ABOUT_DATA;

  return (
    <HeroSection>
      <Wrapper>
        <ContentWrapper>
          <AboutText>{text}</AboutText>
        </ContentWrapper>
        <PortraitWrapper>
          <Portrait src={image.src} alt={image.alt} />
        </PortraitWrapper>
      </Wrapper>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  /* padding: 256px 0; */
  margin-top: 150px;
  margin-bottom: 150px;
  isolation: isolate;

  @media ${QUERIES.desktopAndUp} {
    margin-top: 100px;
    margin-bottom: 100px;
    /* height: 100vh; */
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] 1fr [col-start] repeat(10, minmax(0, 1fr))
    [col-end] 1fr [full-end];
  column-gap: var(--gutter);
  align-items: center;
  height: 100%;
  text-align: center;
`;

const ContentWrapper = styled.div`
  grid-column: full-start / full-end;
  z-index: 2;

  @media ${QUERIES.tabletAndUp} {
    grid-row: 1 / 2;
  }
`;

const AboutText = styled.h1`
  font-family: ${FAMILIES.serif};
  font-weight: 400;

  /* Temp */
  /* 767 - 40px, 1400 - 64px  */
  font-size: clamp(2.5rem, 3.791vw + 0.682rem, 4rem);
  line-height: 1.2;

  /** Base 48-68px */
  /* font-size: clamp(3rem, 1.754vw + 2.605rem, 4.25rem); */
  /* font-size: clamp(2.5625rem, 1.73vw + 2.05rem, 3.56rem); */

  /* line-height: clamp(3.6rem, 2.344vw + 3.073rem, 5.27rem); */
  /* font-size: 45px; */
  /* line-height: 56px; */

  hyphens: auto;
  -webkit-hyphens: auto;

  white-space: pre-wrap;
`;

const PortraitWrapper = styled.div`
  grid-column: col-start / col-end;
  /* grid-column: 2 / span 10; */
  z-index: 1;

  transform: translateY(-12%);

  @media ${QUERIES.smallTabletAndUp} {
    grid-column: col-start / col-end;
  }

  @media ${QUERIES.tabletAndUp} {
    grid-row: 1 / 2;
    grid-column: 3 / span 8;

    transform: translateY(0);
  }

  @media ${QUERIES.laptopAndUp} {
    grid-column: 4 / span 6;
  }
`;

const Portrait = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
`;

export default MainHero;
