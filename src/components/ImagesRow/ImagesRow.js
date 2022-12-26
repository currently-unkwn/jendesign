import styled from "styled-components/macro";

const ImagesRow = ({ images }) => {
  return (
    <Wrapper>
      {images.map((image) => (
        <ImageWrapper>
          <Image src={image} alt="" />
        </ImageWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
`;

const ImageWrapper = styled.div`
  &:nth-child(1) {
    grid-column: span 5;
  }

  &:nth-child(2) {
    grid-column: span 4;
  }

  &:nth-child(3) {
    grid-column: span 3;
  }
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;

  ${ImageWrapper}:nth-child(odd) & {
    aspect-ratio: 3 / 2;
  }

  ${ImageWrapper}:nth-child(even) & {
    aspect-ratio: 4 / 5;
  }
`;

export default ImagesRow;
