import styled from "styled-components";
import BREAKPOINTS_DEVICES from "../../../../theme/global/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  flex-wrap: wrap;
  min-height: 40vh;
  @media ${BREAKPOINTS_DEVICES.tablet} {
    min-height: 40vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
  }
`;
