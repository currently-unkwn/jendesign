import { useEffect, useRef } from "react";
import styled from "styled-components/macro";

import DynamicBgSection from "../../components/DynamicBgSection/DynamicBgSection";

import { setDynamicBg } from "../../helpers";

const ProjectHero = ({ project }) => {
  const { previewImg } = project;

  const heroImgRef = useRef();

  useEffect(() => {
    setDynamicBg(heroImgRef);
  }, []);

  return (
    <Hero>
      <DynamicBgSection
        ref={heroImgRef}
        bgColor="white"
        style={{ height: "100%" }}
      >
        <HeroImg src={previewImg} alt="" />
      </DynamicBgSection>
    </Hero>
  );
};

const Hero = styled.section`
  height: 100%;
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default ProjectHero;
