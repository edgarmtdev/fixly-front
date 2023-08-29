import styled from "styled-components";
import BREAKPOINTS_DEVICES from "/theme/global/breakpoints";

export const MoreProductsCont = styled.section`
  max-width: 1280px;
  margin: 5rem 1rem 1rem;
`;

export const Title = styled.h2`
  padding: 40px;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  @media ${BREAKPOINTS_DEVICES.mobileL} {
    font-size: 32px;
  }
`;
