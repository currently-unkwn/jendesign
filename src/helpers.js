export const getProjectsAndDocuments = function (data) {
  const projectItemsMap = data.reduce((acc, projectItem) => {
    acc[projectItem.title] = projectItem;

    return acc;
  }, {});

  return projectItemsMap;
};
