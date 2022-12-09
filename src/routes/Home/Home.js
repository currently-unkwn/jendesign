import { useState, useEffect } from "react";
import styled from "styled-components/macro";

import ProjectsSection from "../../components/ProjectsSection";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";

import { ABOUT_DATA } from "../../data";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const { id, text, image } = ABOUT_DATA;

  const preloader = document.querySelector(".preloader");

  useEffect(() => {
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

  return (
    !loading && (
      <>
        <main>
          <MaxWidthWrapper>
            <HeroSection>
              <h1>{text}</h1>
              <img src={image.src} alt={image.alt} />
            </HeroSection>
          </MaxWidthWrapper>
          <ProjectsSection />
          <MaxWidthWrapper>
            <section>Get in Touch</section>
          </MaxWidthWrapper>
        </main>
        <MaxWidthWrapper>
          <footer>Footer</footer>
        </MaxWidthWrapper>
      </>
    )
  );
};

const HeroSection = styled.section``;

export default Home;
