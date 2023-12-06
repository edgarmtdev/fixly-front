import styled from "styled-components";
import BREAKPOINTS_DEVICES from "/theme/global/breakpoints";

export const ImageContainer = styled.figure`
  display: grid;
  place-items: center;
  @media ${BREAKPOINTS_DEVICES.laptop} {
    place-items: end;
  }
`;
