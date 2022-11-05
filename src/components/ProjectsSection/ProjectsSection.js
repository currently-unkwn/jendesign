const ProjectsSection = () => {
  return (
    <section>
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
      <a href="/">Квартира на Голосіївській</a>
      <a href="/">Квартира на Печерській</a>
    </section>
  );
};

export default ProjectsSection;
