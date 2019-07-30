import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;

  & > div + div {
    margin-left: 2rem;
  }
`;
