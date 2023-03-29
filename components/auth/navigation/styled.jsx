import styled from "styled-components";
import BREAKPOINTS_DEVICES from "../../../theme/global/breakpoints";

export const Container = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  padding: 1rem;
  @media ${BREAKPOINTS_DEVICES.laptop} {
    padding: 2.5rem;
  }
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
    font-size: 24px;
    color: #3e5067;
  }
  svg {
    width: 34px;
    height: 34px;
  }
  @media ${BREAKPOINTS_DEVICES.laptop} {
    h1 {
      font-size: 28px;
    }
    svg {
      width: 44px;
      height: 44px;
    }
  }
`;
