import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import { FreeMode } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

const ProjectPreview = ({ projectItem }) => {
  const { name, title, images } = projectItem;

  const projectLink = `projects/${title}`;

  return (
    <div>
      Projects
      {/* <Swiper modules={[FreeMode]} freeMode slidesPerView={2} spaceBetween={16}>
        <SwiperSlide>
          <Link to={projectLink}>{name}</Link>
        </SwiperSlide>
        {images
          .filter((_, index) => index < 4)
          .map((image) => (
            <SwiperSlide>
              <Picture src={image} alt="" />
            </SwiperSlide>
          ))}
        <SwiperSlide>
          <Link to={projectLink}>View Work</Link>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

const Picture = styled.img`
  height: 550px;
`;

export default ProjectPreview;
