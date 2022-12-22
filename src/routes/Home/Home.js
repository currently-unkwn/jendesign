import { useState, useEffect, useRef } from "react";

import styled from "styled-components/macro";

import ProjectsSection from "../../components/ProjectsSection";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import DynamicBgSection from "../../components/DynamicBgSection/DynamicBgSection";

import { ABOUT_DATA } from "../../data";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const heroRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const footerRef = useRef();

  const refsArray = [heroRef, projectsRef, contactRef, footerRef];

  const { id, text, image } = ABOUT_DATA;

  useEffect(() => {
    const preloader = document.querySelector(".preloader");

    const onPageLoad = () => {
      // After page has loaded wait 1sec, then animate
      setTimeout(() => {
        preloader.classList.add("animated");
        setLoading(false);
      }, 1000);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);

      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      const callback = (entries) => {
        entries.forEach((entry) => {
          const sectionColor = entry.target.dataset.color;
          const rootProperty = document.documentElement.style;

          if (entry.isIntersecting) {
            rootProperty.setProperty("--dynamic-bg-color", sectionColor);
          }
        });
      };

      const observer = new IntersectionObserver(callback, {
        root: null,
        // Layout should be larger than viewport
        // Should be tested across layouts
        threshold: 0.5,
      });

      refsArray.forEach((ref) => observer.observe(ref.current));
    }
  }, [loading]);

  return (
    !loading && (
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
    )
  );
};

const HeroSection = styled.section``;

export default Home;
