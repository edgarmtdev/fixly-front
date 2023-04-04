import styled from "styled-components";
import BREAKPOINTS_DEVICES from "theme/global/breakpoints";

export const Title = styled.div`
  padding: 1rem;
  p.label {
    font-size: 12px;
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
    font-size: 16px;
    margin-top: 0.5rem;
  }
  @media ${BREAKPOINTS_DEVICES.laptop} {
    p.label {
      font-size: 16px;
    }
    p.name {
      font-size: 22px;
    }
  }
`;
