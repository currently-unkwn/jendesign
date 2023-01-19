import { useEffect, useRef } from "react";
import styled from "styled-components/macro";
import DynamicBgSection from "../DynamicBgSection/DynamicBgSection";
import { COLORS } from "../../constants";
import { setDynamicBg } from "../../helpers";

const ProjectLayout = ({ project }) => {
  const { name, previewImg, images } = project;
  const heroImgRef = useRef();
  const infoRef = useRef();

  const projectLayoutRefs = [heroImgRef, infoRef];

  useEffect(() => {
    setDynamicBg(projectLayoutRefs);
  });

  return (
    <Wrapper>
      <Hero>
        <HeroImgWrapper>
          <DynamicBgSection
            ref={heroImgRef}
            bgColor="white"
            style={{ width: "100%", height: "100%" }}
          >
            {" "}
            <HeroImg src={previewImg} alt="" />
          </DynamicBgSection>
        </HeroImgWrapper>
        <TitleWrapper>
          <Title>{name}</Title>
        </TitleWrapper>
        <InfoWrapper>
          <DynamicBgSection
            ref={infoRef}
            bgColor="cyan"
            style={{ width: "100%", height: "100%" }}
          />
        </InfoWrapper>

        <InfoImg></InfoImg>
      </Hero>

      {/* <div>
        {images.map((image) => (
          <img src={image} />
        ))}
      </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Hero = styled.section`
  display: grid;
  grid-template-columns: [full-start] 1fr [col-start] repeat(10, 1fr) [col-end] 1fr [full-end];
  grid-template-rows: repeat(12, 20vh);
  column-gap: 16px;
`;

const HeroImgWrapper = styled.div`
  grid-column: full-start / full-end;
  grid-row: 1 / 6;
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const TitleWrapper = styled.div`
  grid-column: col-start / span 3;
  grid-row: 2 / 8;
  border: 2px solid black;
`;
const Title = styled.h2`
  position: sticky;
  top: 18vh;

  font-size: calc(48 / 16 * 1rem);
  line-height: 1.2;
  color: hsl(${COLORS.white});
`;

const InfoWrapper = styled.div`
  grid-column: full-start / full-end;
  grid-row: 6 / 12;
`;

const InfoImg = styled.div`
  grid-column: 8 / -1;
  grid-row: 7 / 12;
  background: red;
`;

export default ProjectLayout;
