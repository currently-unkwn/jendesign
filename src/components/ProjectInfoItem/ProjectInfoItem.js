import styled from "styled-components/macro";
import { COLORS } from "../../constants";

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
  font-size: calc(20 / 16 * 1rem);
`;
const Text = styled.p`
  font-size: calc(32 / 16 * 1rem);
  line-height: 1.1;
`;

export default ProjectInfoItem;
