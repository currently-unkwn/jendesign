import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectsContext } from "../../contexts/projects.context";

import styled from "styled-components/macro";

import { PROJECTS_DATA } from "../../data";
import { getIndex } from "../../helpers";

const ProjectNavigation = ({ id }) => {
  const [nextProject, setNextProject] = useState([]);
  const [prevProject, setPrevProject] = useState([]);

  // Get projectsMap from context
  const { projectItemsMap } = useContext(ProjectsContext);

  // Get projects
  const projects = Object.values(projectItemsMap);

  // Getting current project index value
  const index = getIndex(id, projects);

  // Setting current project index value as initial
  const count = useRef(index);

  // Get max number of projects
  const maxCount = useRef(projects.length);

  const navigate = useNavigate();

  useEffect(() => {
    const calcPrevNextProjects = () => {
      // If current project is the first
      // Set only next project
      if (count.current <= 0) {
        setNextProject(PROJECTS_DATA[count.current + 1]);

        // If current project is the last
        // Set only prev project
      } else if (count.current >= maxCount.current - 1) {
        setPrevProject(PROJECTS_DATA[count.current - 1]);

        // If current project is in the middle
        // Setting prev and next projects
      } else if (count.current >= 0 && count.current <= maxCount.current - 1) {
        setNextProject(PROJECTS_DATA[count.current + 1]);
        setPrevProject(PROJECTS_DATA[count.current - 1]);
      }
    };

    calcPrevNextProjects();
  }, [nextProject, prevProject]);

  const nextProjectHandler = () => {
    // if current projects index more than max
    if (count.current >= maxCount.current - 1) return;
    navigate(`/projects/${nextProject.route}`);
  };

  const prevProjectHandler = () => {
    // If current project is the first project
    if (count.current <= 0) return;
    navigate(`/projects/${prevProject.route}`);
  };

  return (
    <Wrapper>
      <button
        onClick={prevProjectHandler}
        // If current project is 1st hide prev button
        style={{
          opacity: count.current <= 0 ? "0" : "1",
          visibility: count.current <= 0 ? "hidden" : "visible",
        }}
      >
        Previous
      </button>
      <button
        onClick={nextProjectHandler}
        // If current project is last hide next button
        style={{
          opacity: count.current >= maxCount.current - 1 ? "0" : "1",
          visibility:
            count.current >= maxCount.current - 1 ? "hidden" : "visible",
        }}
      >
        Next
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ProjectNavigation;
