import styled from "styled-components";
import BREAKPOINTS_DEVICES from "/theme/global/breakpoints";

export const SlideContainer = styled.section`
  position: relative;
  max-width: 1280px;
  margin: 1rem auto;
  margin-top: 5rem;
  z-index: 1;
`;

export const Title = styled.h2`
  padding: 40px;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  @media ${BREAKPOINTS_DEVICES.tabletL} {
    font-size: 32px;
  }
`;
