import styled from "styled-components";
import BREAKPOINTS_DEVICES from "theme/global/breakpoints";

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  p.label {
    font-size: 14px;
    display: flex;
    gap: 0.5rem;
    color: #738aaa;
    align-items: center;

    svg {
      width: 15px;
      height: 15px;
    }
  }
  p.name {
    color: #3e5067;
    font-weight: 600;
    font-size: 24px;
  }
  @media ${BREAKPOINTS_DEVICES.laptop} {
    p.label {
      font-size: 18px;
    }
    p.name {
      font-size: 32px;
    }
  }
`;
