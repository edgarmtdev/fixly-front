import styled from "styled-components";
import BREAKPOINTS_DEVICES from "/theme/global/breakpoints";

export const Container = styled.nav`
  background-color: #e6ecef;
  position: fixed;
  width: 100%;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

export const NavbarCont = styled.div`
  max-width: 1536px;
  padding: 1rem 1rem;

  @media ${BREAKPOINTS_DEVICES.laptop} {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    /* padding: 0.8rem 2rem; */
    padding: 2rem;
  }
`;
