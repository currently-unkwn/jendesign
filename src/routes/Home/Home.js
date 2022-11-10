import styled from "styled-components/macro";

import ProjectsSection from "../../components/ProjectsSection";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";

import { ABOUT_DATA } from "../../data";

function App() {
  const { id, text, image } = ABOUT_DATA;

  return (
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
  );
}

const HeroSection = styled.section``;
export default App;
