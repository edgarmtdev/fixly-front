import styled from "styled-components";
import BREAKPOINTS_DEVICES from "../../../theme/global/breakpoints";

export const Container = styled.nav`
  padding: 2.5rem;
`;

export const NavbarCont = styled.div`
  max-width: 1536px;
  @media ${BREAKPOINTS_DEVICES.laptop} {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
`;
