import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";

import ImagesRow from "./ImagesRow";
import Spacer from "../Spacer/Spacer";
import MainLink from "../MainLink/MainLink";

import { WEIGHTS, QUERIES, COLORS } from "../../constants";

const ProjectItem = ({ project }) => {
  const { title, images, route } = project;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Title onClick={onNavigateHandler}>
            <MainLink to="#">{title}</MainLink>
          </Title>
        </TitleWrapper>

        <ImagesRow images={images} />
      </Wrapper>
      <Spacer axis="horizontal" style={{ background: `hsl(${COLORS.text})` }} />
    </>
  );
};

const Wrapper = styled.section`
  margin-bottom: 12px;
  padding-top: 10vh;
  padding-left: var(--gutter);
  padding-right: var(--gutter);

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 20vh;
    padding-top: 0;
  }
`;

const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Title = styled.h2`
  grid-column: 1 / -1;
  font-size: calc(20 / 16 * 1rem);
  line-height: calc(26 / 16 * 1rem);
  padding-bottom: 8px;
  font-weight: ${WEIGHTS.regular};

  @media ${QUERIES.tabletAndUp} {
    padding-top: 64px;
    padding-bottom: 160px;
    grid-column: 2 / -1;
    font-size: calc(64 / 16 * 1rem);
    line-height: calc(72 / 16 * 1rem);
  }
`;

export default ProjectItem;
