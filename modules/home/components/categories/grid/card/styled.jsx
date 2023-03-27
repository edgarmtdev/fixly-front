import styled from "styled-components";
import BREAKPOINTS_DEVICES from "/theme/global/breakpoints";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 105px;
  background-color: #fff;
  color: #3e5067;
  font-weight: 600;
  cursor: pointer;

  span {
    font-size: 12px;
  }

  &:hover {
    background-color: #3e5067;
    color: #cd8a20;
  }

  @media ${BREAKPOINTS_DEVICES.tabletL} {
    span {
      font-size: 16px;
    }
  }
`;
