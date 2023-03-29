import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import Icon from "../Icon/Icon";
import Spacer from "../Spacer";
import UnstyledButton from "../UnstyledButton";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

const ProjectPreview = ({ projectItem }) => {
  const { name, route, images } = projectItem;

  const projectLink = `projects/${route}`;

  return (
    <Wrapper>
      <StyledSwiper
        modules={[FreeMode, Keyboard, Navigation]}
        // freeMode
        freeMode={true}
        slidesPerView={"auto"}
        spaceBetween={16}
        grabCursor={true}
        navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
        keyboard={{
          enabled: true,
        }}
      >
        <SwiperSlide>
          <TitleContainerDesktop>
            <Title to={projectLink}>{name}</Title>
          </TitleContainerDesktop>
        </SwiperSlide>
        {images
          .filter((_, index) => index < 4)
          .map((image) => (
            <SwiperSlide>
              <Image
                src={image.imgPath}
                alt=""
                style={{ "--aspect-ratio": image.aspectRatio }}
              />
            </SwiperSlide>
          ))}
        <SwiperSlide>
          <LinkMoreContainer>
            <LinkMore to={projectLink}>Дивитись проект &rarr;</LinkMore>
          </LinkMoreContainer>
        </SwiperSlide>

        <TitleContainerMobile slot="container-start">
          <Title to={projectLink}>{name}</Title>
        </TitleContainerMobile>

        <ControlButton className="swiper-prev">
          <Icon id="arrowLeft" size={40} />
        </ControlButton>
        <ControlButton className="swiper-next">
          <Icon id="arrowRight" size={40} />
        </ControlButton>
      </StyledSwiper>
      <Spacer axis="horizontal" style={{ background: "white" }} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  isolation: isolate;
`;

const StyledSwiper = styled(Swiper)`
  position: relative;
  padding-left: var(--gutter);
  margin-bottom: 8vh;

  .swiper-wrapper {
    height: 500px;

    @media ${QUERIES.laptopAndUp} {
      height: 75vh;
    }
  }

  .swiper-slide {
    width: auto;
  }

  .swiper-slide:first-child {
    display: none;

    @media ${QUERIES.smallTabletAndUp} {
      display: block;
    }
  }

  @media ${QUERIES.smallTabletAndUp} {
    margin-top: 15vh;
  }

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 15vh;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 18vh;
    margin-bottom: 18vh;
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const TitleContainerMobile = styled.div`
  padding: 48px 0;

  @media ${QUERIES.smallTabletAndUp} {
    display: none;
  }
`;

const TitleContainerDesktop = styled(CenteredContainer)`
  display: flex;
  margin-right: 80px;

  @media ${QUERIES.tabletAndUp} {
    margin-right: 160px;
  }
`;

const Title = styled(Link)`
  font-size: calc(24 / 16 * 1rem);
  font-weight: ${WEIGHTS.regular};
  text-transform: uppercase;
  line-height: 1.2;
  color: inherit;
  text-decoration: none;

  white-space: pre-wrap;

  @media ${QUERIES.tabletAndUp} {
    font-size: calc(48 / 16 * 1rem);
  }
`;

const LinkMoreContainer = styled(CenteredContainer)`
  padding-left: 104px;
  padding-right: 104px;
  height: 100%;

  @media ${QUERIES.laptopAndUp} {
    padding-left: 160px;
    padding-right: 160px;
  }
`;

const LinkMore = styled(Link)`
  display: flex;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
`;

const ControlButton = styled(UnstyledButton)`
  --shift: 8px;

  display: inline-block;

  padding: 8px;
  margin-top: 32px;
  border: 1px solid hsl(${COLORS.black});
  border-radius: 999999px;

  transition: transform 250ms;
  will-change: transform;

  &.swiper-next {
    margin-left: 16px;

    @media ${QUERIES.tabletAndUp} {
      margin-left: 0;

      left: auto;
      right: var(--gutter);
    }
  }

  &.swiper-next:hover {
    transform: translateX(var(--shift));

    @media ${QUERIES.tabletAndUp} {
      transform: translate(var(--shift), -50%);
    }
  }

  &.swiper-prev:hover {
    transform: translateX(calc(var(--shift) * -1));

    @media ${QUERIES.tabletAndUp} {
      transform: translate(calc(var(--shift) * -1), -50%);
    }
  }

  & svg {
    /* fill: white; */
    width: 24px;
    height: 24px;

    @media ${QUERIES.tabletAndUp} {
      width: 40px;
      height: 40px;
    }
  }

  @media ${QUERIES.tabletAndUp} {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 24px;
    margin-top: 0;
    bottom: auto;
    z-index: 10;

    &.swiper-button-disabled {
      opacity: 0;
      transform: translateY(-50%) scale(0.5);
      transform-origin: 50% 50%;
      cursor: auto;
      pointer-events: none;

      transition: all 350ms;
    }
  }
`;

export default ProjectPreview;
