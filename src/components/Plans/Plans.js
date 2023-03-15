import { useState } from "react";
import styled from "styled-components/macro";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

// import required modules
import { Keyboard, Navigation } from "swiper";

import Icon from "../Icon/Icon";
import UnstyledButton from "../UnstyledButton";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";

const Plans = ({ plans }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isSlideAnimating, setIsSlideAnimating] = useState(false);

  const counter = slideIndex + 1;
  const caption = plans[slideIndex].caption;
  const slidesTotal = plans.length;

  const onSlideChangeHandler = (event) => {
    setSlideIndex(event.realIndex);
  };

  return (
    <Wrapper>
      <Swiper
        modules={[Keyboard, Navigation]}
        slidesPerView={1}
        navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
        keyboard={{
          enabled: true,
        }}
        grabCursor={true}
        onSlideChange={onSlideChangeHandler}
        onTransitionStart={() => setIsSlideAnimating(true)}
        onTransitionEnd={() => setIsSlideAnimating(false)}
      >
        {plans.map((plan) => (
          <SwiperSlide key={plan.id} data-animating={isSlideAnimating}>
            <img src={plan.image} />
          </SwiperSlide>
        ))}
        <SwiperControls>
          <ControlButton className="swiper-prev">
            <Icon id="arrowLeft" size={20} />
          </ControlButton>
          <ControlButton className="swiper-next">
            <Icon id="arrowRight" size={20} />
          </ControlButton>
        </SwiperControls>

        <Meta>
          <MetaCounter>
            <Heading>Схеми</Heading>

            <Value>
              <Current>{counter}</Current>
            </Value>

            <Divider>/</Divider>

            <Value>
              <Total>{slidesTotal}</Total>
            </Value>
          </MetaCounter>
          <MetaCaption>
            <figcaption style={{ opacity: isSlideAnimating ? "0" : "initial" }}>
              {caption}
            </figcaption>
          </MetaCaption>
          <MetaControls>
            <MetaControlButton className="swiper-prev">
              Попередній
            </MetaControlButton>
            <MetaControlButton className="swiper-next">
              Наступний
            </MetaControlButton>
          </MetaControls>
        </Meta>
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  grid-column: full-start / full-end;
  padding-top: 280px;
  padding-bottom: 280px;
  /** Create a stacking context */
  isolation: isolate;

  @media ${QUERIES.tabletAndUp} {
    grid-column: col-start / col-end;
  }
`;

const SwiperControls = styled.div`
  position: absolute;
  top: auto;
  left: 0;
  right: 0;

  z-index: 4;

  display: flex;
  justify-content: space-between;

  @media ${QUERIES.tabletAndUp} {
    top: 0;
    bottom: 0;
    z-index: 2;
  }
`;

const Button = styled(UnstyledButton)`
  &.swiper-button-disabled {
    opacity: 0;
    cursor: auto;
    pointer-events: none;
  }
`;

const ControlButton = styled(Button)`
  position: relative;
  display: flex;
  width: auto;
  cursor: pointer;

  /* &::after {
    --tap-increment: -14px;
    content: "";
    position: absolute;
    top: var(--tap-increment);
    left: var(--tap-increment);
    right: var(--tap-increment);
    bottom: var(--tap-increment);
  } */

  &:last-child {
    justify-content: flex-end;
  }

  @media ${QUERIES.tabletAndUp} {
    width: 50%;
  }
`;

const Meta = styled.div`
  --grid-gap: 20px;
  position: relative;
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: calc(14 / 16 * 1rem);

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: var(--grid-gap);
  }
`;

const MetaCounter = styled.div`
  /**TODO: 1 / 2 on bigger screens */
  grid-column: 1 / 3;
`;

const Heading = styled.span`
  margin-right: 8px;
`;

const Value = styled.span`
  position: relative;
  display: inline-block;
  width: 1ch;
  height: 1em;
`;

const Divider = styled.span``;

const Text = styled.span`
  position: absolute;
  top: -1px;

  @media ${QUERIES.tabletAndUp} {
    top: -2px;
  }
`;

const Current = styled(Text)`
  right: 0;
  margin-right: 4px;
`;
const Total = styled(Text)`
  left: 0;
  margin-left: 4px;
`;

const MetaCaption = styled.div`
  /**TODO: 2 / span 6 bigger screens */
  grid-column: 3 / span 5;
`;

const MetaControls = styled.div`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    grid-column: 9 / -1;

    display: flex;
    justify-content: flex-end;
    gap: var(--grid-gap);
  }
`;

const MetaControlButton = styled(Button)`
  /** Transitioning text-decoration-color instead of text-decoration */
  transition: text-decoration-color 200 var(--ease);
  text-decoration-color: transparent;

  &:hover,
  &:focus {
    text-decoration: underline;
    text-decoration-color: currentColor;
  }
`;

export default Plans;
