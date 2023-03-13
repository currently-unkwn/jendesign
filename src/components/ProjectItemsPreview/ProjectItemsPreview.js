import { PROJECTS } from "../../data";

import ProjectItem from "../ProjectItem/ProjectItem";
import GetInTouch from "../GetInTouch/GetInTouch";

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
