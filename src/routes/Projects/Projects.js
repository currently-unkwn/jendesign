import { Routes, Route } from "react-router-dom";

import ProjectItemsPreview from "../../components/ProjectItemsPreview";
import Project from "../Project";
import Transitions from "../../components/Transitions/Transitions";
import GetInTouch from "../../components/GetInTouch/GetInTouch";

const Projects = () => {
  return (
    <>
      <Routes>
        <Route index element={<ProjectItemsPreview />} />
        <Route path=":projectItem" element={<Project />} />
      </Routes>
    </>
  );
};

export default Projects;
