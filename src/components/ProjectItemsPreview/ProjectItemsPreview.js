import { PROJECTS } from "../../data";

import ProjectItem from "../ProjectItem/ProjectItem";

const ProjectItemsPreview = () => {
  return (
    <div>
      {PROJECTS.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectItemsPreview;
