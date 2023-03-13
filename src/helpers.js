export const getProjectsAndDocuments = function (data) {
  const projectItemsMap = data.reduce((acc, projectItem) => {
    acc[projectItem.route] = projectItem;

    return acc;
  }, {});

  return projectItemsMap;
};

export const setDynamicBg = (...refsArr) => {
  const callback = (entries) => {
    entries.forEach((entry) => {
      const sectionColor = entry.target.dataset.color;
      const rootProperty = document.documentElement.style;

      if (entry.isIntersecting) {
        rootProperty.setProperty("--dynamic-bg-color", sectionColor);
      }
    });
  };

  const observer = new IntersectionObserver(callback, {
    root: null,
    // Layout should be larger than viewport
    // Should be tested across layouts
    threshold: 0.5,
  });

  refsArr.forEach((ref) => observer.observe(ref.current));
};

export const getIndex = (id, array) => {
  return array.findIndex((item) => item.id === id);
};
