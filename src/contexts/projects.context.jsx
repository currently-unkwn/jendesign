import { PROJECTS_DATA } from "../data";

import { createContext, useState, useEffect } from "react";
import { getProjectsAndDocuments } from "../helpers";

export const ProjectsContext = createContext({
  projectItemsMap: {},
});

export const ProjectsProvider = ({ children }) => {
  const [projectItemsMap, setProjectItemsMap] = useState({});

  useEffect(() => {
    const getProjectItemsMap = async () => {
      const projectItemMap = await getProjectsAndDocuments(PROJECTS_DATA);

      setProjectItemsMap(projectItemMap);
    };

    getProjectItemsMap();
  }, []);

  const value = { projectItemsMap };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};
