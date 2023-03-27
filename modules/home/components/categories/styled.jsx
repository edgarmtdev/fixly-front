import styled from "styled-components";
import BREAKPOINTS_DEVICES from "/theme/global/breakpoints";

export const CategoriesCont = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
`;

export const Tilte = styled.h2`
  font-weight: 600;
  font-size: 24px;
  padding: 40px;
  @media ${BREAKPOINTS_DEVICES.tabletL} {
    margin-top: 5rem;
    font-size: 32px;
  }
`;
