import { useEffect, useRef } from "react";
import styled from "styled-components/macro";

import DynamicBgSection from "../../components/DynamicBg/DynamicBgSection";
import ArrowDownButton from "../../components/ArrowDownButton/ArrowDownButton";

import { COLORS } from "../../constants";
import { setDynamicBg } from "../../helpers";

const ProjectHero = ({ project, projectLayoutRef }) => {
  const { previewImg } = project;

  const heroImgRef = useRef();
  // console.log(projectLayoutRef.current);
  useEffect(() => {
    // console.log(projectLayoutRef);
    setDynamicBg(heroImgRef);
  }, [projectLayoutRef]);

  // function handleClick() {
  //   console.log(projectLayoutRef.current.id);
  //   projectLayoutRef.current.scrollIntoView({ behavior: "smooth" });
  // }

  return (
    <Hero>
      <DynamicBgSection
        ref={heroImgRef}
        bgColor="white"
        style={{ height: "100%" }}
      >
        <HeroImg src={previewImg} alt="" />
        <ScrollDownArrow>
          <ArrowDownButton id={projectLayoutRef?.current?.id} />
        </ScrollDownArrow>
      </DynamicBgSection>
    </Hero>
  );
};

const Hero = styled.section`
  position: relative;
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;

    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      0deg,
      hsl(${COLORS.black} / 0.5),
      hsl(${COLORS.black} / 0.2)
    );
  }
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ScrollDownArrow = styled.div`
  position: absolute;
  bottom: 35px;

  display: flex;
  justify-content: center;

  width: 100%;

  z-index: 10;
`;

export default ProjectHero;
