import styled from "styled-components";
import BREAKPOINTS_DEVICES from "theme/global/breakpoints";

export const NavbarTitle = styled.div`
  padding: 2rem 1rem;
  display: flex;
  cursor: pointer;
  svg {
    width: 34px;
    height: 34px;
  }
  h1 {
    font-weight: 800;
    font-size: 22px;
    color: #3e5067;
  }
  @media ${BREAKPOINTS_DEVICES.laptop} {
    gap: 0.5rem;
    h1 {
      font-weight: 800;
      font-size: 24px;
      color: #3e5067;
    }
  }
`;
