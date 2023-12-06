import styled from "styled-components";
import BREAKPOINTS_DEVICES from "../../../../theme/global/breakpoints";

export const Container = styled.div`
  padding: 1rem 0;

  @media ${BREAKPOINTS_DEVICES.tablet} {
    padding: 0;
  }
`;

export const Title = styled.h3`
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 1rem;
  @media ${BREAKPOINTS_DEVICES.tablet} {
    margin-bottom: 2.5rem;
  }
`;

export const List = styled.ul`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 12px;
  li {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
