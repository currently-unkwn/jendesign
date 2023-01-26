import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProjectsContext } from "../../contexts/projects.context";

import ProjectLayout from "../../components/ProjectLayout";

const Project = () => {
  const { projectItem } = useParams();
  // console.log(projectItem);
  const { projectItemsMap } = useContext(ProjectsContext);

  const [project, setProject] = useState(projectItemsMap[projectItem]);

  // console.log(projectItemsMap[projectItem]);

  // console.log(projects);
  useEffect(() => {
    setProject(projectItemsMap[projectItem]);
  }, [projectItem, projectItemsMap]);

  return <>{project && <ProjectLayout key={project.id} project={project} />}</>;
};

export default Project;
