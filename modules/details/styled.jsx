import styled from "styled-components";
import BREAKPOINTS_DEVICES from "theme/global/breakpoints";

export const ProductDetails = styled.section`
  margin: 6rem 1rem 4rem;

  @media ${BREAKPOINTS_DEVICES.laptop} {
    margin: 10rem 2rem 4rem 2rem;
  }
`;
