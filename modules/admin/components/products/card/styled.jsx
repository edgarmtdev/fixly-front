import styled from "styled-components";
import BREAKPOINTS_DEVICES from "theme/global/breakpoints";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: auto;
  min-height: 320px;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: 100ms;
  &:hover {
    transform: scale(0.99);
    transition: 100ms;
  }
  img {
    width: 70%;
  }
  @media ${BREAKPOINTS_DEVICES.mobileS} {
    min-height: 350px;
  }
  @media ${BREAKPOINTS_DEVICES.mobileL} {
    min-height: 270px;
  }
  @media ${BREAKPOINTS_DEVICES.mobileXL} {
    min-height: 350px;
  }
  @media ${BREAKPOINTS_DEVICES.tabletL} {
    width: 200px;
    min-height: 280px;
  }
`;

export const Name = styled.p`
  font-size: 14px;
  margin-top: 2rem;
  text-align: center;
`;
