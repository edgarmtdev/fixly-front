import styled from "styled-components";
import BREAKPOINTS_DEVICES from "/theme/global/breakpoints";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 18rem;
  height: 18rem;
  background-color: white;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
    transition: 1s;
  }
  img {
    width: 80%;
  }
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 600;
  color: #3e5067;
  margin-top: 8px;
  font-size: 12px;
  @media ${BREAKPOINTS_DEVICES.tabletL} {
    font-size: 14px;
  }
`;
