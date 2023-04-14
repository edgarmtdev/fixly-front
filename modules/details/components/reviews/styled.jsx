import styled from "styled-components";
import BREAKPOINTS_DEVICES from "theme/global/breakpoints";

export const ReviewsParent = styled.div`
  margin-top: 2.5rem;
  @media ${BREAKPOINTS_DEVICES.tabletL} {
    width: 75%;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  @media ${BREAKPOINTS_DEVICES.tabletL} {
    font-size: 22px;
  }
`;

export const ReviewsContainer = styled.section`
  margin-top: 2.5rem;
`;
