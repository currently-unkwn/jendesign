import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import Glider from "react-glider";
import "glider-js/glider.min.css";

import { Swiper, SwiperSlide } from "swiper/react";

const ProjectPreview = ({ projectItem }) => {
  const { name, title, images } = projectItem;

  const projectLink = `projects/${title}`;

  return (
    <div>
      <div>
        <Link to={projectLink}>{name}</Link>
        {images
          .filter((_, index) => index < 4)
          .map((image) => (
            <div>
              <Picture src={image} alt="" />
            </div>
          ))}
        <div>
          <Link to={projectLink}>View Work</Link>
        </div>
      </div>
    </div>
  );
};

const Picture = styled.img`
  height: 750px;
`;

export default ProjectPreview;
