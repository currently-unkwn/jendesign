import { useEffect, useRef } from "react";
import styled from "styled-components/macro";

import DynamicBgSection from "../DynamicBgSection/DynamicBgSection";
import ProjectItem from "../ProjectItem/ProjectItem";

import { PROJECTS } from "../../data";
import { COLORS } from "../../constants";
import { setDynamicBg } from "../../helpers";

const ProjectItemsPreview = () => {
  const projectsPreviewRef = useRef();

  const projectsPreviewRefs = [projectsPreviewRef];

  useEffect(() => {
    setDynamicBg(...projectsPreviewRefs);
  }, []);

  return (
    <DynamicBgSection bgColor={COLORS.secondary} ref={projectsPreviewRef}>
      <Wrapper>
        {PROJECTS.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </Wrapper>
    </DynamicBgSection>
  );
};

const Wrapper = styled.div`
  margin-top: calc(var(--header-height) + 50px);
`;

export default ProjectItemsPreview;
