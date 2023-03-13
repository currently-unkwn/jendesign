import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProjectsContext } from "../../contexts/projects.context";

import ProjectHero from "./ProjectHero";
import ProjectLayout from "../../components/ProjectLayout";
import Transitions from "../../components/Transitions/Transitions";

const Project = () => {
  // Get project's name from address bar
  const { projectItem } = useParams();

  // Get projects from context
  const { projectItemsMap } = useContext(ProjectsContext);

  const [project, setProject] = useState([]);

  useEffect(() => {
    // Setting current project into state
    setProject(projectItemsMap[projectItem]);
  }, [projectItem, projectItemsMap]);

  // Rendering project
  return (
    project && (
      <>
        <ProjectHero key={project.id} project={project} />
        <ProjectLayout key={project.id} project={project} />
      </>
    )
  );
};

export default Project;
