import styled from "styled-components";
import BREAKPOINTS_DEVICES from "/theme/global/breakpoints";

export const MoreProductsCont = styled.section`
  max-width: 1280px;
  margin: 20px auto 6rem auto;
`;

export const Title = styled.h2`
  padding: 40px;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-top: 80px;
  @media ${BREAKPOINTS_DEVICES.tabletL} {
    margin-top: 5rem;
    font-size: 32px;
  }
`;
