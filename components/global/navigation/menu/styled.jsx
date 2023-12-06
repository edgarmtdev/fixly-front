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
    font-weight: 600;
    font-size: 22px;
    color: #3e5067;
  }
  @media ${BREAKPOINTS_DEVICES.laptop} {
    gap: 0.5rem;
    h1 {
      font-size: 24px;
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
      font-size: 14px;
      color: #3e5067;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
