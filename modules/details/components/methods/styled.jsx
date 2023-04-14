import styled from "styled-components";
import BREAKPOINTS_DEVICES from "theme/global/breakpoints";

export const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 1rem;
  @media ${BREAKPOINTS_DEVICES.tablet} {
    font-size: 22px;
    margin-bottom: 2rem;
  }
`;

export const GridPayments = styled.section`
  @media ${BREAKPOINTS_DEVICES.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
`;
