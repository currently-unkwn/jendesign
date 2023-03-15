import { PROJECTS } from "../../data";

import ProjectItem from "../ProjectItem/ProjectItem";

const ProjectItemsPreview = () => {
  return (
    <>
      {PROJECTS.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </>
  );
};

export default ProjectItemsPreview;
