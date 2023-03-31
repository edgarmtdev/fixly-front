import styled from "styled-components";
import BREAKPOINTS_DEVICES from "../../../../theme/global/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex-wrap: wrap;
  @media ${BREAKPOINTS_DEVICES.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
  }
`;
