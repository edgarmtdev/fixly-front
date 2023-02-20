import styled from "styled-components";
import BREAKPOINTS_DEVICES from "../../../../../theme/global/breakpoints";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${BREAKPOINTS_DEVICES.laptop} {
    align-items: flex-start;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${BREAKPOINTS_DEVICES.laptop} {
    align-items: flex-start;
  }

  h4 {
    font-size: 1.25rem;
    color: rgb(62 80 103);
  }

  h3 {
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
  }

  p {
    text-align: center;
    color: rgb(115 138 170);
    @media ${BREAKPOINTS_DEVICES.laptop} {
      text-align: left;
    }
    @media ${BREAKPOINTS_DEVICES.laptop} {
      width: 80%;
    }
  }
`;

export const Button = styled.button`
  background-color: rgb(205 138 32);
  color: rgb(255 255 255);
  width: 12rem;
  margin-top: 2.5rem;
  text-align: center;
  padding: 8px;
  border-radius: 2px;
  font-weight: 600;
  font-size: 13px;
  &:hover {
    background-color: rgb(255 195 100);
  }
`;
