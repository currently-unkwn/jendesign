import styled from "styled-components/macro";

import { QUERIES, COLORS } from "../../constants";

const ProjectPlanImage = ({ planImg }) => {
  return (
    <Wrapper>
      <picture>
        <source
          type="image/avif"
          srcSet={`${planImg?.src.replace(
            ".jpg",
            ".avif"
          )} 1x, ${planImg?.src.replace(
            ".jpg",
            "@2x.avif"
          )} 2x, ${planImg?.src.replace(".jpg", "@3x.avif")} 3x`}
        />
        <source
          type="image/jpg"
          srcSet={`${planImg?.src} 1x, ${planImg?.src.replace(
            ".jpg",
            "@2x.jpg"
          )} 2x, ${planImg?.src.replace(".jpg", "@3x.jpg")} 3x`}
        />
        <Image src={planImg?.src} alt={planImg?.alt} />
      </picture>

      <Caption>{planImg?.caption}</Caption>
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  --padding: 96px;

  grid-column: full-start / full-end;
  padding-top: var(--padding);
  padding-bottom: var(--padding);

  text-align: center;

  & picture {
    display: flex;
    justify-content: center;
    background-color: hsl(${COLORS.grayLight02});
  }

  @media ${QUERIES.tabletAndUp} {
    --padding: 280px;
    grid-column: col-start / col-end;
  }
`;

const Image = styled.img`
  mix-blend-mode: multiply;
`;

const Caption = styled.figcaption`
  font-size: calc(12 / 16 * 1rem);
  color: hsl(${COLORS.gray});

  @media ${QUERIES.tabletAndUp} {
    font-size: calc(14 / 16 * 1rem);
  }
`;

export default ProjectPlanImage;
