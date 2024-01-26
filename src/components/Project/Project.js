import { useState, useEffect, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import { ProjectsContext } from "../../contexts/projects.context";

import ProjectHero from "./ProjectHero";
import ProjectLayout from "./ProjectLayout";
import Transitions from "../Transitions/Transitions";

const Project = () => {
  // Get project's name from address bar
  const { projectItem } = useParams();

  // Get projects from context
  const { projectItemsMap } = useContext(ProjectsContext);

  const [project, setProject] = useState([]);

  const projectLayoutRef = useRef(null);

  useEffect(() => {
    // Setting current project into state
    setProject(projectItemsMap[projectItem]);
    // console.log(projectLayoutRef.current);
  }, [projectItem, projectItemsMap, projectLayoutRef]);

  // Rendering project
  return (
    project && (
      <>
        <ProjectHero
          key={`hero-${project.id}`}
          project={project}
          projectLayoutRef={projectLayoutRef}
        />
        <ProjectLayout
          key={`project-${project.id}`}
          project={project}
          ref={projectLayoutRef}
        />
      </>
    )
  );
};

export default Project;
