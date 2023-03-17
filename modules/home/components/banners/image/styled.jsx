import styled from "styled-components";
import BREAKPOINTS_DEVICES from "../../../../../theme/global/breakpoints";

export const Container = styled.section`
  display: grid;
  place-items: center;
  position: relative;
  @media ${BREAKPOINTS_DEVICES.laptop} {
    place-items: end;
  }
`;
