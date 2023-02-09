import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";

import { PROJECTS_DATA } from "../../data";
import { getIndex } from "../../helpers";

const ProjectNavigation = ({ id }) => {
  const [nextProject, setNextProject] = useState([]);
  const [prevProject, setPrevProject] = useState([]);

  // Getting projects index value
  const index = getIndex(id, PROJECTS_DATA);

  // Setting projects index value as initial
  const count = useRef(index);

  // Max number of projects
  const maxCount = useRef(PROJECTS_DATA.length);

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
      // console.log(index);
      // console.log(maxCount.current);
    };

    calcPrevNextProjects();

    console.log(nextProject);
    console.log(prevProject);
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
        style={{
          opacity: count.current <= 0 ? "0" : "1",
          visibility: count.current <= 0 ? "hidden" : "visible",
        }}
      >
        Previous
      </button>
      <button
        onClick={nextProjectHandler}
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
