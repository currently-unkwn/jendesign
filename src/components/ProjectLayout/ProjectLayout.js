import { useEffect, useRef } from "react";
import styled from "styled-components/macro";
import DynamicBgSection from "../DynamicBgSection/DynamicBgSection";
import ProjectInfoItem from "../ProjectInfoItem/ProjectInfoItem";
import { COLORS } from "../../constants";
import { setDynamicBg } from "../../helpers";

const ProjectLayout = ({ project }) => {
  const { name, previewImg, infoImg, projectInfo, images } = project;
  const heroImgRef = useRef();
  const infoRef = useRef();
  const plansRef = useRef();

  const projectLayoutRefs = [heroImgRef, infoRef, plansRef];

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
        <InfoSection>
          <DynamicBgSection
            ref={infoRef}
            bgColor="#959982"
            style={{ width: "100%", height: "100%" }}
          />
        </InfoSection>

        <ProjectInfoWrapper>
          {projectInfo.map((infoItem) => {
            return <ProjectInfoItem key={infoItem.id} infoItem={infoItem} />;
          })}
        </ProjectInfoWrapper>

        <SideImgWrapper>
          <SideImg src={infoImg} alt="" />
        </SideImgWrapper>
      </Hero>

      <Plans>
        <DynamicBgSection
          ref={plansRef}
          bgColor="white"
          style={{ width: "100%", height: "100%" }}
        />
      </Plans>
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
  grid-template-rows: repeat(5, 20vh) repeat(10, 15vh);
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
  /** TODO: Check if the title is too narrow on resize */
  grid-column: col-start / span 3;
  grid-row: 2 / 10;
  /* border: 2px solid black; */
`;
const Title = styled.h2`
  position: sticky;
  top: 18vh;

  font-size: calc(48 / 16 * 1rem);
  line-height: 1.2;
  color: hsl(${COLORS.white});
`;

const InfoSection = styled.div`
  grid-column: full-start / full-end;
  grid-row: 6 / 14;
`;

const ProjectInfoWrapper = styled.div`
  grid-column: col-start / 8;
  grid-row: 10 / 13;

  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 32px;
`;

const SideImgWrapper = styled.div`
  grid-column: 8 / -1;
  grid-row: 7 / 14;
`;

const SideImg = styled.img`
  object-fit: cover;
  height: 100%;
`;

const Plans = styled.div`
  height: 800px;
`;

export default ProjectLayout;
