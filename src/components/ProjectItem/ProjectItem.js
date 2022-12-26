import { useNavigate } from "react-router-dom";

const ProjectItem = ({ project }) => {
  const { title, images, route } = project;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div>
      <h2 onClick={onNavigateHandler}>{title}</h2>

      {images.map((image) => (
        <img src={image} alt="" />
      ))}
    </div>
  );
};

export default ProjectItem;
