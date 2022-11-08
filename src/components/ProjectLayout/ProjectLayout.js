const ProjectLayout = ({ project }) => {
  const { name, images } = project;
  return (
    <div>
      <h2>{name}</h2>
      <div>
        {images.map((image) => (
          <img src={image} />
        ))}
      </div>
    </div>
  );
};

export default ProjectLayout;
