import styled from "styled-components/macro";
import Slider from "react-slick";

import Header from "../Header/Header";

import MaxWidthWrapper from "../MaxWidthWrapper";
import { ABOUT_DATA, PROJECTS_DATA } from "../../data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const { id, text, image } = ABOUT_DATA;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <>
      <MaxWidthWrapper>
        <Header />
      </MaxWidthWrapper>
      <main>
        <MaxWidthWrapper>
          <HeroSection>
            <h1>{text}</h1>
            <img src={image.src} alt={image.alt} />
          </HeroSection>
        </MaxWidthWrapper>
        {/* <section>
          {PROJECTS_DATA.map((project) => {
            return (
              <div>
                <Slider {...settings}>
                  <h2>{project.name}</h2>
                  {project.images
                    .filter((_, index) => index < 4)
                    .map((image) => {
                      return (
                        <div>
                          <img src={image} />
                        </div>
                      );
                    })}
                </Slider>
              </div>
            );
          })}
        </section> */}
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
