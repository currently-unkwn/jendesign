import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectsContext } from "../../contexts/projects.context";
import styled from "styled-components/macro";

import Grid from "../Grid";
import ProjectNavigationItem from "./ProjectNavigationItem";

import { getIndex } from "../../helpers";
import { QUERIES, COLORS } from "../../constants";

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
        setNextProject(projects[count.current + 1]);

        // If current project is the last
        // Set only prev project
      } else if (count.current >= maxCount.current - 1) {
        setPrevProject(projects[count.current - 1]);

        // If current project is in the middle
        // Setting prev and next projects
      } else if (count.current >= 0 && count.current <= maxCount.current - 1) {
        setNextProject(projects[count.current + 1]);
        setPrevProject(projects[count.current - 1]);
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
      <ProjectNavGrid>
        <ProjectNavigationItem
          project={prevProject}
          onClickHandler={prevProjectHandler}
          style={{
            display: count.current <= 0 ? "none" : "block",
          }}
        >
          Попередній проект
        </ProjectNavigationItem>
        <ProjectNavigationItem
          project={nextProject}
          onClickHandler={nextProjectHandler}
          style={{
            display: count.current >= maxCount.current - 1 ? "none" : "block",
          }}
        >
          Наступний проект
        </ProjectNavigationItem>
      </ProjectNavGrid>
    </Wrapper>
  );
};

/**TODO:
 * Responsive next/previous for big tablets and desktop
 */

const Wrapper = styled.section`
  padding-top: 280px;
  padding-bottom: 120px;
`;
const ProjectNavGrid = styled(Grid)`
  align-items: center;
  row-gap: 80px;

  @media ${QUERIES.tabletAndUp} {
    row-gap: 0;
  }
`;

export default ProjectNavigation;
