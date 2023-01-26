import styled from "styled-components/macro";
import { COLORS, QUERIES } from "../../constants";

const ProjectInfoItem = ({ infoItem }) => {
  const { category, text } = infoItem;

  return (
    <Wrapper>
      <Category>{category}</Category>
      <Text>{text}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: hsl(${COLORS.white});
`;

const Category = styled.span`
  display: block;
  /** 16-20 */
  font-size: clamp(1rem, 0.376vw + 0.925rem, 1.266rem);
`;
const Text = styled.p`
  /** 20-32 */
  font-size: clamp(1.266rem, 1.079vw + 1.05rem, 2.027rem);
  line-height: 1.1;
`;

export default ProjectInfoItem;
