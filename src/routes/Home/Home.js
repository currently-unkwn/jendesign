import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import styled from "styled-components/macro";

import ProjectsSection from "../../components/ProjectsSection";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";

import { ABOUT_DATA } from "../../data";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  const heroRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const footerRef = useRef();

  const refsArray = [heroRef, projectsRef, contactRef, footerRef];

  // console.log(inView);
  // console.log(entry);

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

  // console.log(refsArray.map((ref) => ref.current));

  useEffect(() => {
    if (!loading) {
      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry);
            document.body.style.backgroundColor = entry.target.dataset.color;
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
      // observer.observe(projectsRef.current);
    }
  }, [loading]);

  return (
    !loading && (
      <>
        <main>
          <MaxWidthWrapper>
            <div data-color="red" ref={heroRef}>
              <HeroSection>
                <h1>{text}</h1>
                <img src={image.src} alt={image.alt} />
              </HeroSection>
            </div>
          </MaxWidthWrapper>
          <div data-color="blue" ref={projectsRef}>
            <ProjectsSection />
          </div>
          <MaxWidthWrapper>
            <div data-color="lavender" ref={contactRef}>
              <section>Get in Touch</section>
            </div>
          </MaxWidthWrapper>
        </main>
        <MaxWidthWrapper>
          <div data-color="cyan" ref={footerRef}>
            <footer>Footer</footer>
          </div>
        </MaxWidthWrapper>
      </>
    )
  );
};

const HeroSection = styled.section``;

export default Home;
