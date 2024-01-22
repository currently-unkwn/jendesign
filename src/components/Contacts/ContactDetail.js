import styled from "styled-components/macro";

import { QUERIES, WEIGHTS, COLORS } from "../../constants";

const ContactDetail = ({ detail }) => {
  return (
    <Wrapper>
      <Title>{detail.title}</Title>
      &nbsp;
      <Value>
        <Link href={detail.link} target="_blank" rel="noreferrer">
          {detail.value}
        </Link>
      </Value>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  font-size: calc(14 / 16 * 1rem);

  @media ${QUERIES.desktopAndUp} {
    font-size: calc(18 / 16 * 1rem);
  }
`;
const Title = styled.div`
  opacity: 0.5;
`;

const Value = styled.div``;

const Link = styled.a`
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  color: inherit;

  transition: color 250ms var(--ease-in-out);

  &:hover {
    color: hsl(${COLORS.textDarker});
  }
`;

export default ContactDetail;
