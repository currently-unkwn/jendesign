import { Routes, Route, useLocation } from "react-router-dom";

import ProjectItemsPreview from "../../components/ProjectItemsPreview";
import Project from "../Project";
import Transitions from "../../components/Transitions/Transitions";

import { AnimatePresence } from "framer-motion";
const Projects = () => {
  const location = useLocation();

  return (
    <Transitions>
      <Routes>
        <Route index element={<ProjectItemsPreview />} />
        <Route path=":projectItem" element={<Project />} />
      </Routes>
    </Transitions>
  );
};

export default Projects;
