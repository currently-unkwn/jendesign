import styled from "styled-components/macro";
import Slider from "react-slick";

import Header from "../Header/Header";
import Hero from "../Hero/Hero";

import MaxWidthWrapper from "../MaxWidthWrapper";
import { ABOUT_DATA, PROJECTS_DATA } from "../../data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
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
      <Main>
        <HeroWrapper>
          <Hero {...ABOUT_DATA} />
        </HeroWrapper>
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
      </Main>
      <MaxWidthWrapper>
        <footer>Footer</footer>
      </MaxWidthWrapper>
    </>
  );
}

const Main = styled.main``;
const HeroWrapper = styled(MaxWidthWrapper)``;
export default App;
