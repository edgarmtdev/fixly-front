import styled from "styled-components";
import BREAKPOINTS_DEVICES from "/theme/global/breakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media ${BREAKPOINTS_DEVICES.mobileXL} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${BREAKPOINTS_DEVICES.tabletL} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${BREAKPOINTS_DEVICES.laptop} {
    grid-template-columns: repeat(5, 1fr);
  }
  @media ${BREAKPOINTS_DEVICES.laptopL} {
    display: flex;
  }
`;
