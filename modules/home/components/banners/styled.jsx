import styled from "styled-components";
import BREAKPOINTS_DEVICES from "../../../../theme/global/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2.5rem;
  min-height: 550px;
  @media ${BREAKPOINTS_DEVICES.laptop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
