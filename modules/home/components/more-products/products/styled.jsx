import styled from "styled-components";
import BREAKPOINTS_DEVICES from "/theme/global/breakpoints";

export const FlexCont = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  justify-content: center;

  @media ${BREAKPOINTS_DEVICES.laptop} {
    gap: 2rem;
    justify-content: flex-start;
  }
`;
