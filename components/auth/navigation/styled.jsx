import styled from "styled-components";
import BREAKPOINTS_DEVICES from "../../../theme/global/breakpoints";

export const Container = styled.nav`
  padding: 2.5rem;
  position: fixed;
  width: 100%;
  top: 0;
`;

export const NavbarCont = styled.div`
  max-width: 1536px;
  padding: 1rem;
  @media ${BREAKPOINTS_DEVICES.laptop} {
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const NavbarMenu = styled.div`
  display: flex;
  gap: 3.5rem;
`;

export const NavbarTitle = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;

  h1 {
    font-weight: 800;
    font-size: 28px;
    color: #3e5067;
  }
`;
