import { useContext } from "react";
import { ProjectsContext } from "../../contexts/projects.context";

import ProjectPreview from "./ProjectPreview";
import Spacer from "../Spacer";

import { COLORS } from "../../constants";

const ProjectsSection = () => {
  const { projectItemsMap } = useContext(ProjectsContext);

  return (
    <section>
      <Spacer axis="horizontal" style={{ background: `hsl(${COLORS.text})` }} />
      {Object.keys(projectItemsMap).map((title) => {
        const projectItem = projectItemsMap[title];

        return (
          <ProjectPreview key={projectItem.id} projectItem={projectItem} />
        );
      })}
    </section>
  );
};

export default ProjectsSection;
