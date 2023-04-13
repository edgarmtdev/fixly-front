import styled from "styled-components";
import BREAKPOINTS_DEVICES from "theme/global/breakpoints";

export const OptionsContainer = styled.section`
  display: none;
  @media ${BREAKPOINTS_DEVICES.laptop} {
    display: flex;
    gap: 3rem;
    margin-left: auto;
  }
`;
