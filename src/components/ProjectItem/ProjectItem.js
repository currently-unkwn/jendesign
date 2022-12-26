import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";
import ImagesRow from "../ImagesRow/ImagesRow";
import MaxWidthWrapper from "../MaxWidthWrapper";

const ProjectItem = ({ project }) => {
  const { title, images, route } = project;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <Wrapper>
      <MaxWidthWrapper>
        <h2 onClick={onNavigateHandler}>{title}</h2>
      </MaxWidthWrapper>

      <ImagesRow images={images} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

export default ProjectItem;
