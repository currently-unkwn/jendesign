const ProjectPreview = ({ projectItem }) => {
  const { name, images } = projectItem;

  return (
    <div>
      <h2>{name}</h2>
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
