import styled from "styled-components";
import BREAKPOINTS_DEVICES from "theme/global/breakpoints";

export const MethodsContainer = styled.div`
  padding: 16px 0;
  .svg-container {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    align-items: center;
    span {
      svg {
        width: 35px;
        height: 35px;
      }
    }
  }
  P {
    font-size: 14px;
    font-weight: 500;
  }
  @media ${BREAKPOINTS_DEVICES.tabletL} {
    padding: 24px 0;
    P {
      font-size: 16px;
    }
  }
`;
