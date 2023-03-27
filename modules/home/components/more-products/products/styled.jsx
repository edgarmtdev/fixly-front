import styled from "styled-components";
import BREAKPOINTS_DEVICES from "/theme/global/breakpoints";

export const FlexCont = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  @media ${BREAKPOINTS_DEVICES.tabletL} {
    justify-content: left;
  }
`;
