import { useState, useEffect, useRef } from "react";

import styled from "styled-components/macro";

import MainHero from "../../components/MainHero/MainHero";
import ProjectsSection from "../../components/ProjectsSection";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import DynamicBgSection from "../../components/DynamicBgSection/DynamicBgSection";

import { COLORS } from "../../constants";
import { setDynamicBg } from "../../helpers";

const Home = ({ loading }) => {
  const heroRef = useRef();
  const projectsRef = useRef();

  const homePageRefs = [heroRef, projectsRef];

  useEffect(() => {
    setDynamicBg(...homePageRefs);
  }, []);

  return (
    <>
      <main>
        <DynamicBgSection bgColor={COLORS.primary} ref={heroRef}>
          <MaxWidthWrapper>
            <MainHero />
          </MaxWidthWrapper>
        </DynamicBgSection>

        <DynamicBgSection bgColor={COLORS.secondary} ref={projectsRef}>
          <ProjectsSection />
        </DynamicBgSection>
      </main>
    </>
  );
};

export default Home;
