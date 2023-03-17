import { useState, useEffect, useRef } from "react";

import styled from "styled-components/macro";

import ProjectsSection from "../../components/ProjectsSection";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import DynamicBgSection from "../../components/DynamicBgSection/DynamicBgSection";
import Transitions from "../../components/Transitions/Transitions";
import GetInTouch from "../../components/GetInTouch/GetInTouch";

import { ABOUT_DATA } from "../../data";

import { setDynamicBg } from "../../helpers";

const Home = ({ loading }) => {
  const heroRef = useRef();
  const projectsRef = useRef();

  const homePageRefs = [heroRef, projectsRef];

  const { id, text, image } = ABOUT_DATA;

  useEffect(() => {
    setDynamicBg(...homePageRefs);
  });

  return (
    <>
      <main>
        <MaxWidthWrapper>
          <DynamicBgSection bgColor="#dba3ab" ref={heroRef}>
            <HeroSection>
              <h1>{text}</h1>
              <img src={image.src} alt={image.alt} />
            </HeroSection>
          </DynamicBgSection>
        </MaxWidthWrapper>
        <DynamicBgSection bgColor="orangered" ref={projectsRef}>
          <ProjectsSection />
        </DynamicBgSection>
      </main>
    </>
  );
};

const HeroSection = styled.section``;

export default Home;
