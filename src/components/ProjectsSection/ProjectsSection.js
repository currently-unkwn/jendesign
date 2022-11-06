import { PROJECTS_DATA } from "../../data";

import ProjectPreview from "../ProjectPreview";

const ProjectsSection = () => {
  return (
    <section>
      {PROJECTS_DATA.map((projectItem) => (
        <ProjectPreview key={projectItem.id} projectItem={projectItem} />
      ))}
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
