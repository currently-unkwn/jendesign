import { Link } from "react-router-dom";

const ProjectPreview = ({ projectItem }) => {
  const { name, title, images } = projectItem;

  const projectLink = `projects/${title}`;

  return (
    <div>
      <Link to={projectLink}>{name}</Link>
      <div>
        {/* {images
          .filter((_, index) => index < 4)
          .map((image) => (
            <img src={image} alt="" />
          ))} */}
      </div>
    </div>
  );
};

export default ProjectPreview;
