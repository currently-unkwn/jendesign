import { useState, useEffect, useRef } from "react";
import styled from "styled-components/macro";

import DynamicBgSection from "../DynamicBgSection/DynamicBgSection";
import ProjectInfoItem from "../ProjectInfoItem/ProjectInfoItem";
import Grid from "../Grid/Grid";
import Spacer from "../Spacer";
import Plans from "../Plans/Plans";
import ProjectNavigation from "../ProjectNavigation/ProjectNavigation";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import { setDynamicBg } from "../../helpers";

const ProjectLayout = ({ project }) => {
  const [isTitleStatic, setIsTitleStatic] = useState(false);

  const { id, name, previewImg, infoImg, projectInfo, images, plans } = project;

  /** Dynamic BG refs */
  const heroImgRef = useRef();
  const infoRef = useRef();
  const plansRef = useRef();

  const projectLayoutRefs = [heroImgRef, infoRef, plansRef];

  /** Sticky title refs */
  const titleRef = useRef();
  const stickyTitleRef = useRef();

  useEffect(() => {
    setDynamicBg(projectLayoutRefs);
  }, []);

  useEffect(() => {
    const stickyTitleRefCoords = stickyTitleRef.current.getBoundingClientRect();

    const handleScroll = () => {
      const titleRefCoords = titleRef.current.getBoundingClientRect();

      const isStickyTitleIntersectsTitle =
        titleRefCoords.top < stickyTitleRefCoords.top;

      if (isStickyTitleIntersectsTitle) {
        setIsTitleStatic(true);
      } else {
        setIsTitleStatic(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper>
      <DynamicBgSection
        ref={heroImgRef}
        bgColor="white"
        style={{ height: "100%" }}
      >
        <Hero>
          <HeroImg src={previewImg} alt="" />
        </Hero>
      </DynamicBgSection>

      <Spacer size={160} />

      <Grid>
        <InfoWrapper>
          <DynamicBgSection
            ref={infoRef}
            bgColor="#959982"
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
          <InfoImg src={infoImg} alt="" />
        </InfoImgWrapper>
      </Grid>

      <DynamicBgSection ref={plansRef} bgColor="white">
        <Grid>{plans && <Plans plans={plans} />}</Grid>
      </DynamicBgSection>

      <ImagesGrid>
        {images &&
          images.map((image) => (
            <ProjectImgWrapper
              key={image.id}
              style={{ "--grid-column": image.span }}
              data-layout={image.layout ? image.layout : undefined}
            >
              <ProjectImg
                src={image.imgPath}
                alt={image.alt}
                style={{ "--aspect-ratio": image.aspectRatio }}
              />
            </ProjectImgWrapper>
          ))}
      </ImagesGrid>

      <ProjectNavigation id={id} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

const Hero = styled.div`
  height: 100%;
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoWrapper = styled.div`
  grid-column: col-start / col-end;

  @media ${QUERIES.tabletAndUp} {
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
  max-width: 400px;
  /** 36-64, 386-1380 */
  font-size: clamp(2.2rem, 2.9vw + 1.5rem, 4rem);
  font-weight: ${WEIGHTS.regular};
  line-height: 1.2;
  color: hsl(${COLORS.white});
  white-space: pre-wrap;
`;

const StickyTitle = styled(Title)`
  top: 11rem;
`;

const InfoImgWrapper = styled.div`
  grid-column: col-start / full-end;
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

const ImagesGrid = styled(Grid)`
  grid-template-columns: 1fr;
  column-gap: 0;
  row-gap: 96px;

  & [data-layout="full"],
  & [data-layout="default"] {
    margin-left: calc(var(--gutter) * -1);
    margin-right: calc(var(--gutter) * -1);
  }

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns:
      [full-start] 1fr [col-start] repeat(10, minmax(0, 1fr))
      [col-end] 1fr [full-end];
    column-gap: var(--gutter);
    row-gap: 184px;

    & [data-layout="default"] {
      margin-left: 0;
      margin-right: 0;
    }
  }
`;
const ProjectImgWrapper = styled.figure`
  grid-column: var(--grid-column);
`;
const ProjectImg = styled.img`
  aspect-ratio: var(--aspect-ratio);
  object-fit: cover;
  width: 100%;
`;

export default ProjectLayout;
