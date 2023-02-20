import styled from "styled-components";
import BREAKPOINTS_DEVICES from "../../../../theme/global/breakpoints";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 4rem;
  @media ${BREAKPOINTS_DEVICES.laptop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
