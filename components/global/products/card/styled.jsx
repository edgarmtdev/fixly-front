import styled from "styled-components";
import BREAKPOINTS_DEVICES from "theme/global/breakpoints";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 324px;
  height: 420px;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: 100ms;

  &:hover {
    transform: scale(1.02);
    transition: 100ms;
  }
  img {
    width: 80%;
  }

  @media ${BREAKPOINTS_DEVICES.mobileXL} {
    width: 224px;
    height: 320px;
  }
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 600;
  color: #3e5067;
  margin-top: 2rem;
`;
