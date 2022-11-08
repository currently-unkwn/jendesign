import { useNavigate } from "react-router-dom";

const ProjectItem = ({ project }) => {
  const { title, imageUrl, route } = project;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div>
      <img src={imageUrl} alt="" />

      <h2 onClick={onNavigateHandler}>{title}</h2>
    </div>
  );
};

export default ProjectItem;
