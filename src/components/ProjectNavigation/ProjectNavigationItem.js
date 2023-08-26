import styled from "styled-components/macro";

import { QUERIES, COLORS } from "../../constants";

const ProjectNavigationItem = ({
  project,
  onClickHandler,
  style,
  children,
}) => {
  return (
    <Wrapper onClick={onClickHandler} style={style}>
      <Image
        src={project?.prevNextImg?.src}
        alt={project?.prevNextImg?.alt}
        style={{ "--aspect-ratio": project?.prevNextImg?.aspectRatio }}
      />
      <Content>
        <Direction>{children}</Direction>
        <Name>{project.name}</Name>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  cursor: pointer;

  grid-column: full-start / full-end;
  /* transition: all 1350ms var(--ease-in-out); */

  &:first-of-type {
    @media ${QUERIES.tabletAndUp} {
      grid-column: full-start / 7;
    }

    @media ${QUERIES.laptopAndUp} {
      grid-column: col-start / 6;
    }
  }

  &:last-of-type {
    @media ${QUERIES.tabletAndUp} {
      grid-column: 7 / full-end;
    }

    @media ${QUERIES.laptopAndUp} {
      grid-column: 8 / col-end;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: var(--aspect-ratio);
  object-fit: cover;
  transition: opacity 350ms var(--ease-in-out);

  ${Wrapper}:hover & {
    opacity: 0.6;

    /* transition: all 1350ms var(--ease-in-out); */
  }
`;

const Content = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  color: hsl(${COLORS.blackLighter});
`;
const Direction = styled.span`
  /** 16-20 */
  font-size: clamp(1rem, 0.376vw + 0.925rem, 1.266rem);
`;
const Name = styled.h2`
  /** 20-32 */
  font-size: clamp(1.266rem, 1.079vw + 1.05rem, 2.027rem);
  line-height: 1.1;
`;

export default ProjectNavigationItem;
