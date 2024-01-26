import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const ImagesRow = ({ images }) => {
  return (
    <Wrapper>
      {images.map((image) => (
        <ImageWrapper
          key={image.id}
          style={{
            "--grid-span": `span ${image.gridSpan}`,
            "--display": image.display,
          }}
        >
          <picture>
            <source
              type="image/avif"
              srcSet={`${image.imageUrl.replace(
                ".jpg",
                ".avif"
              )} 1x, ${image.imageUrl.replace(
                ".jpg",
                "@2x.avif"
              )} 2x, ${image.imageUrl.replace(".jpg", "@3x.avif")} 3x`}
            />
            <source
              type="image/jpg"
              srcSet={`${image.imageUrl} 1x, ${image.imageUrl.replace(
                ".jpg",
                "@2x.jpg"
              )} 2x, ${image.imageUrl.replace(".jpg", "@3x.jpg")} 3x`}
            />

            <Image
              src={image.imageUrl}
              alt={image.alt}
              style={{ "--aspect-ratio": image.aspectRatio }}
            />
          </picture>
        </ImageWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  /* display: grid; */
  /* grid-template-columns: repeat(12, 1fr); */
  gap: 8px;

  @media ${QUERIES.smallTabletAndUp} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 16px;
  }
`;

const ImageWrapper = styled.div`
  &:nth-child(1) {
    grid-column: var(--grid-span);
  }

  &:nth-child(2),
  &:nth-child(3) {
    display: var(--display);
    grid-column: var(--grid-span);
  }

  @media ${QUERIES.smallTabletAndUp} {
    &:nth-child(2),
    &:nth-child(3) {
      display: block;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: var(--aspect-ratio);
  object-fit: cover;

  ${ImageWrapper}:nth-child(odd) & {
    aspect-ratio: var(--aspect-ratio);
  }

  ${ImageWrapper}:nth-child(even) & {
    aspect-ratio: var(--aspect-ratio);
  }
`;

export default ImagesRow;
