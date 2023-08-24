import { useContext } from "react";
import { ProjectsContext } from "../../contexts/projects.context";

import ProjectPreview from "../ProjectPreview";
import Spacer from "../Spacer";

import { COLORS } from "../../constants";

const ProjectsSection = () => {
  const { projectItemsMap } = useContext(ProjectsContext);

  return (
    <section>
      <Spacer axis="horizontal" style={{ background: `hsl(${COLORS.text})` }} />
      {Object.keys(projectItemsMap).map((title) => {
        const projectItem = projectItemsMap[title];

        return (
          <ProjectPreview key={projectItem.id} projectItem={projectItem} />
        );
      })}

      {/* {PROJECTS_DATA.map((project) => {
      return (
        <div>
          <Slider {...settings}>
            <h2>{project.name}</h2>
            {project.images
              .filter((_, index) => index < 4)
              .map((image) => {
                return (
                  <div>
                    <img src={image} />
                  </div>
                );
              })}
          </Slider>
        </div>
      );
    })} */}
    </section>
  );
};

export default ProjectsSection;
