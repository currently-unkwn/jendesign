import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProjectsContext } from "../../contexts/projects.context";

import ProjectLayout from "../../components/ProjectLayout";

const Project = () => {
  // Get project's name from address bar
  const { projectItem } = useParams();

  // Get projects from context
  const { projectItemsMap } = useContext(ProjectsContext);

  const [project, setProject] = useState([]);

  useEffect(() => {
    // Setting current project into state
    setProject(projectItemsMap[projectItem]);
    console.log(projectItemsMap);
  }, [projectItem, projectItemsMap]);

  // Rendering project
  return <>{project && <ProjectLayout key={project.id} project={project} />}</>;
};

export default Project;
