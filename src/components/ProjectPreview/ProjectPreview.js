import { Link } from "react-router-dom";

import Glider from 'react-glider';
import 'glider-js/glider.min.css';

const ProjectPreview = ({ projectItem }) => {
  const { name, title, images } = projectItem;

  const projectLink = `projects/${title}`;

  return (
    <div>
      <Link to={projectLink}>{name}</Link>
      <div>
        <Glider draggable hasArrows slidesToShow={1.5} slidesToScroll={1}>
        {images
          .filter((_, index) => index < 4)
          .map((image) => (
            <div><img src={image} alt="" /></div>
          ))}
          <div><Link to={projectLink}>View Work</Link></div>
          </Glider>
          
          
      </div>
    </div>
  );
};

export default ProjectPreview;
