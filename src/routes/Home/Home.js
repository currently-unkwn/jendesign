import { useState, useEffect, useRef } from "react";

import styled from "styled-components/macro";

import Spacer from "../../components/Spacer";
import MainHero from "../../components/MainHero/MainHero";
import ProjectsSection from "../../components/ProjectsSection";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import DynamicBgSection from "../../components/DynamicBgSection/DynamicBgSection";

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
        <DynamicBgSection bgColor="#dba3ab" ref={heroRef}>
          <MaxWidthWrapper>
            <MainHero />
          </MaxWidthWrapper>
        </DynamicBgSection>

        <DynamicBgSection bgColor="#a4c6d3" ref={projectsRef}>
          <ProjectsSection />
          {/* <Spacer size={500} /> */}
        </DynamicBgSection>
      </main>
    </>
  );
};

export default Home;
