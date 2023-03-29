import styled from "styled-components";
import BREAKPOINTS_DEVICES from "../../../../theme/global/breakpoints";

export const NavbarMenu = styled.div`
  display: flex;
  gap: 3.5rem;
  align-items: center;
`;

export const IconMenu = styled.div`
  margin-left: auto;
  cursor: pointer;
  svg {
    width: 34px;
    height: 34px;
  }
  @media ${BREAKPOINTS_DEVICES.laptop} {
    display: none;
  }
`;

export const NavbarTitle = styled.div`
  display: flex;
  cursor: pointer;
  svg {
    width: 34px;
    height: 34px;
  }
  h1 {
    font-weight: 800;
    font-size: 24px;
    color: #3e5067;
  }
  @media ${BREAKPOINTS_DEVICES.laptop} {
    gap: 0.5rem;
    svg {
      width: 44px;
      height: 44px;
    }
    h1 {
      font-weight: 800;
      font-size: 28px;
      color: #3e5067;
    }
  }
`;

export const NavbarList = styled.ul`
  display: none;
  @media ${BREAKPOINTS_DEVICES.laptop} {
    display: flex;
    gap: 2rem;

    li {
      font-weight: 500;
      font-size: 18px;
      color: #3e5067;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
