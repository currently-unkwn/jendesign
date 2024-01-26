import { useState, useEffect, useRef, forwardRef } from "react";
import styled from "styled-components/macro";

import DynamicBgSection from "../DynamicBg/DynamicBgSection";
import ProjectInfoItem from "./ProjectInfoItem";
import Grid from "../Grid/Grid";
import Spacer from "../Spacer";
import ProjectPlanImage from "./ProjectPlanImage";
import ProjectNavigation from "./ProjectNavigation";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import { setDynamicBg, getPath } from "../../helpers";

const ProjectLayout = ({ project }, projectLayoutRef) => {
  const [isTitleStatic, setIsTitleStatic] = useState(false);
  const [titleOffsetTop, setTitleOffsetTop] = useState(0);

  const { id, name, planImg, infoImg, projectInfo, images } = project;

  /** Dynamic BG refs */

  const infoRef = useRef();
  const plansRef = useRef();
  const projectNavRef = useRef();

  const projectLayoutRefs = [infoRef, plansRef, projectNavRef];

  /** Sticky title refs */
  const titleRef = useRef();
  const stickyTitleRef = useRef();

  useEffect(() => {
    setDynamicBg(...projectLayoutRefs);
  }, []);

  useEffect(() => {
    // Recalculating title elements coords on window resizing
    const handleResize = () => {
      const titleElement = titleRef.current;

      if (titleElement) {
        // Get elements top coords
        const { top } = titleElement.getBoundingClientRect();

        // Setting elements top coords + scroll position
        setTitleOffsetTop(top + window.scrollY);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Get sticky title coords from top of the viewport
    const stickyTitleOffset = stickyTitleRef.current.offsetTop;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // If current scroll pos + sticky title offset from top
      // is greater than destination title offset from top
      const isIntersecting = currentScroll + stickyTitleOffset > titleOffsetTop;

      if (isIntersecting) {
        setIsTitleStatic(true);
      } else {
        setIsTitleStatic(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [titleOffsetTop]);

  return (
    <Wrapper ref={projectLayoutRef} id="project-layout">
      <Spacer size={160} />

      <Grid>
        <InfoWrapper>
          <DynamicBgSection
            ref={infoRef}
            bgColor={COLORS.secondary}
            style={{ height: "100%" }}
          >
            <StickyTitle
              ref={stickyTitleRef}
              style={{
                position: isTitleStatic ? "absolute" : "fixed",
                opacity: isTitleStatic ? "0" : "1",
              }}
            >
              {name}
            </StickyTitle>

            <InfoContent>
              <Title
                ref={titleRef}
                style={{
                  opacity: isTitleStatic ? "1" : "0",
                  visibility: isTitleStatic ? "visible" : "hidden",
                }}
              >
                {name}
              </Title>

              {projectInfo &&
                projectInfo.map((infoItem) => {
                  return (
                    <ProjectInfoItem key={infoItem.id} infoItem={infoItem} />
                  );
                })}
            </InfoContent>
          </DynamicBgSection>
        </InfoWrapper>

        <InfoImgWrapper>
          <picture style={{ height: "100%" }}>
            <source
              type="image/avif"
              srcSet={`${getPath(infoImg).replace(
                ".jpg",
                ".avif"
              )} 1x, ${getPath(infoImg).replace(
                ".jpg",
                "@2x.avif"
              )} 2x, ${getPath(infoImg).replace(".jpg", "@3x.avif")} 3x`}
            />
            <source
              type="image/jpg"
              srcSet={`${getPath(infoImg)} 1x, ${getPath(infoImg).replace(
                ".jpg",
                "@2x.jpg"
              )} 2x, ${getPath(infoImg).replace(".jpg", "@3x.jpg")} 3x`}
            />

            <InfoImg src={getPath(infoImg)} alt="" />
          </picture>
        </InfoImgWrapper>
      </Grid>

      <DynamicBgSection ref={plansRef} bgColor={COLORS.grayLight02}>
        <Grid>
          <ProjectPlanImage planImg={planImg} />
          {/* {plans && <ProjectPlans plans={plans} />} */}
        </Grid>

        <ImagesContainer>
          <ImagesGrid>
            {images &&
              images.map((image) => (
                <ProjectImgWrapper
                  key={image.id}
                  style={{ "--grid-column": image.span }}
                  data-layout={image.layout ? image.layout : undefined}
                >
                  <picture>
                    <source
                      type="image/avif"
                      srcSet={`${image.imgPath.replace(
                        ".jpg",
                        ".avif"
                      )} 1x, ${image.imgPath.replace(
                        ".jpg",
                        "@2x.avif"
                      )} 2x, ${image.imgPath.replace(".jpg", "@3x.avif")} 3x`}
                    />
                    <source
                      type="image/jpg"
                      srcSet={`${image.imgPath} 1x, ${image.imgPath.replace(
                        ".jpg",
                        "@2x.jpg"
                      )} 2x, ${image.imgPath.replace(".jpg", "@3x.jpg")} 3x`}
                    />

                    <ProjectImg
                      src={image.imgPath}
                      alt={image.alt}
                      style={{ "--aspect-ratio": image.aspectRatio }}
                    />
                  </picture>
                </ProjectImgWrapper>
              ))}
          </ImagesGrid>
        </ImagesContainer>
      </DynamicBgSection>

      <DynamicBgSection ref={projectNavRef} bgColor={COLORS.grayLight}>
        <ProjectNavigation id={id} />
      </DynamicBgSection>
      <Spacer axis="horizontal" style={{ background: `hsl(${COLORS.text})` }} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* position: relative; */
  /* height: 100%; */
`;

const InfoWrapper = styled.div`
  grid-column: full-start / col-end;

  @media ${QUERIES.tabletAndUp} {
    grid-column: full-start / span 5;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-column: col-start / span 5;
  }
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  height: 100%;
`;

const Title = styled.h2`
  /* max-width: 400px; */
  /** 36-64, 386-1380 */
  font-size: clamp(2.2rem, 2.9vw + 1.5rem, 4rem);
  font-weight: ${WEIGHTS.regular};
  line-height: 1.2;

  white-space: pre-wrap;
`;

const StickyTitle = styled(Title)`
  top: 11rem;
`;

const InfoImgWrapper = styled.div`
  grid-column: full-start / full-end;
  margin-right: calc(var(--gutter) * -1);
  padding-top: 144px;

  @media ${QUERIES.tabletAndUp} {
    padding-top: 0;
    grid-column: 8 / full-end;
  }
`;

const InfoImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  aspect-ratio: 5 / 7;
`;

const ImagesContainer = styled.div`
  @media ${QUERIES.desktopAndUp} {
    max-width: 1400px;
    margin: 0 auto;
  }
`;

const ImagesGrid = styled(Grid)`
  grid-template-columns: 1fr;
  column-gap: 0;
  row-gap: 60px;

  & [data-layout="full"],
  & [data-layout="default"] {
    margin-left: calc(var(--gutter) * -1);
    margin-right: calc(var(--gutter) * -1);
  }

  @media ${QUERIES.smallTabletAndUp} {
    grid-template-columns:
      [full-start] 1fr [col-start] repeat(10, minmax(0, 1fr))
      [col-end] 1fr [full-end];
    column-gap: var(--gutter);

    & [data-layout="default"] {
      margin-left: 0;
      margin-right: 0;
    }
  }

  @media ${QUERIES.desktopAndUp} {
    row-gap: 96px;
  }
`;
const ProjectImgWrapper = styled.figure`
  grid-column: full-start / full-end;

  @media ${QUERIES.smallTabletAndUp} {
    grid-column: var(--grid-column);
  }
`;

const ProjectImg = styled.img`
  aspect-ratio: var(--aspect-ratio);
  object-fit: cover;
  width: 100%;
`;

export default forwardRef(ProjectLayout);
