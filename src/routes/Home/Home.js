import { useState, useEffect, useRef } from "react";

import styled from "styled-components/macro";

import ProjectsSection from "../../components/ProjectsSection";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import DynamicBgSection from "../../components/DynamicBgSection/DynamicBgSection";

import { ABOUT_DATA } from "../../data";

import { setDynamicBg } from "../../helpers";

const Home = ({ loading }) => {
  const heroRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const footerRef = useRef();

  const homePageRefs = [heroRef, projectsRef, contactRef, footerRef];

  const { id, text, image } = ABOUT_DATA;

  useEffect(() => {
    if (!loading) {
      setDynamicBg(homePageRefs);
    }
  }, [loading]);

  return (
    <>
      <main>
        <MaxWidthWrapper>
          <DynamicBgSection bgColor="red" ref={heroRef}>
            <HeroSection>
              <h1>{text}</h1>
              <img src={image.src} alt={image.alt} />
            </HeroSection>
          </DynamicBgSection>
        </MaxWidthWrapper>
        <DynamicBgSection bgColor="blue" ref={projectsRef}>
          <ProjectsSection />
        </DynamicBgSection>
        <MaxWidthWrapper>
          <DynamicBgSection bgColor="lavender" ref={contactRef}>
            <section>Get in Touch</section>
          </DynamicBgSection>
        </MaxWidthWrapper>
      </main>
      <MaxWidthWrapper>
        <DynamicBgSection bgColor="cyan" ref={footerRef}>
          <footer>Footer</footer>
        </DynamicBgSection>
      </MaxWidthWrapper>
    </>
  );
};

const HeroSection = styled.section``;

export default Home;
