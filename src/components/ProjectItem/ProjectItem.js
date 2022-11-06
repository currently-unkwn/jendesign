const ProjectItem = ({ project }) => {
  const { title, imageUrl, route } = project;

  return (
    <div>
      <img src={imageUrl} alt="" />

      <h2>{title}</h2>
    </div>
  );
};

export default ProjectItem;
