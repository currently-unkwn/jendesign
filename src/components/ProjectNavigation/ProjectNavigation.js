import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";

import { PROJECTS_DATA } from "../../data";
import { getIndex } from "../../helpers";

const ProjectNavigation = ({ id }) => {
  const index = getIndex(id, PROJECTS_DATA);

  const count = useRef(index);
  const maxCount = useRef(PROJECTS_DATA.length);
  console.log(count.current);
  const navigate = useNavigate();

  const nextProject = () => {
    if (count.current >= maxCount.current - 1) return;

    count.current = count.current + 1;

    navigate(`/projects/${PROJECTS_DATA[count.current].title}`);
  };

  const prevProject = () => {
    if (count.current <= 0) return;

    count.current = count.current - 1;

    navigate(`/projects/${PROJECTS_DATA[count.current].title}`);
  };

  // console.log(count);
  // console.log(id);
  // console.log(PROJECTS_DATA[count].title);

  return (
    <Wrapper>
      <button
        onClick={prevProject}
        style={{
          opacity: count.current <= 0 ? "0" : "1",
          visibility: count.current <= 0 ? "hidden" : "visible",
        }}
      >
        Previous
      </button>
      <button
        onClick={nextProject}
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
