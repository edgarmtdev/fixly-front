import styled from "styled-components";
import BREAKPOINTS_DEVICES from "theme/global/breakpoints";

export const TitleReview = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;

  p {
    font-size: 12px;
    font-weight: 600;
  }

  span {
    font-size: 9px;
    color: #959cb2;
  }
  @media ${BREAKPOINTS_DEVICES.tabletL} {
    p {
      font-size: 14px;
    }
    span {
      font-size: 11px;
      color: #959cb2;
    }
  }
`;

export const Content = styled.div`
  font-size: 10px;
  @media ${BREAKPOINTS_DEVICES.tabletL} {
    margin-top: 1rem;
    font-size: 12px;
  }
`;

export const Reactions = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1.5rem;
  color: #959cb2;
  font-weight: 600;
  font-size: 10px;

  span {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  @media ${BREAKPOINTS_DEVICES.tabletL} {
    margin-top: 1.5rem;
    font-size: 10px;
  }
`;
