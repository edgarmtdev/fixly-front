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

  .label {
    font-size: 1.25rem;
    color: #3e5067;
    padding: 1rem 0;
  }
  .name {
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
  }
  .description {
    text-align: center;
    max-width: 80%;
    padding: 1rem 0;
    color: #3e5067;

    @media ${BREAKPOINTS_DEVICES.laptop} {
      text-align: left;
      max-width: 90%;
    }
  }
`;

export const Button = styled.button`
  background-color: #cd8a20;
  color: #fff;
  width: 12rem;
  margin-top: 2.5rem;
  text-align: center;
  padding: 8px;
  border-radius: 2px;
  font-weight: 600;
  font-size: 13px;
  &:hover {
    opacity: 0.9;
    transform: scale(1.01);
  }
`;
