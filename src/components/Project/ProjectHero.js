import { useEffect, useRef } from "react";
import styled from "styled-components/macro";

import DynamicBgSection from "../DynamicBg/DynamicBgSection";
import ArrowDownButton from "../ArrowDownButton/ArrowDownButton";

import { COLORS } from "../../constants";
import { setDynamicBg, getPath } from "../../helpers";

const ProjectHero = ({ project, projectLayoutRef }) => {
  const { heroImg } = project;

  const heroImgRef = useRef();

  useEffect(() => {
    setDynamicBg(heroImgRef);
  }, [projectLayoutRef]);

  return (
    <Hero>
      <DynamicBgSection
        ref={heroImgRef}
        bgColor="white"
        style={{ height: "100%" }}
      >
        <picture style={{ height: "100%" }}>
          <source
            type="image/avif"
            srcSet={`${getPath(heroImg).replace(".jpg", ".avif")} 1x, ${getPath(
              heroImg
            ).replace(".jpg", "@2x.avif")} 2x, ${getPath(heroImg).replace(
              ".jpg",
              "@3x.avif"
            )} 3x`}
          />
          <source
            type="image/jpg"
            srcSet={`${getPath(heroImg)} 1x, ${getPath(heroImg).replace(
              ".jpg",
              "@2x.jpg"
            )} 2x, ${getPath(heroImg).replace(".jpg", "@3x.jpg")} 3x`}
          />

          <HeroImg src={getPath(heroImg)} alt="" />
        </picture>

        <ScrollDownArrow>
          <ArrowDownButton id={getPath(projectLayoutRef?.current?.id)} />
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
