import styled from "styled-components";
import BREAKPOINTS_DEVICES from "../../../../../theme/global/breakpoints";

export const ContainerDescription = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  align-items: center;
  @media ${BREAKPOINTS_DEVICES.laptop} {
    align-items: flex-start;
    margin-top: 3rem;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .label {
    font-size: 18px;
    color: #3e5067;
    padding: 1rem 0;
  }
  .name {
    font-size: 32px;
    font-weight: 600;
    text-align: center;
  }
  .description {
    text-align: center;
    max-width: 80%;
    padding: 1rem 0;
    color: #3e5067;
    font-size: 12px;
  }

  @media ${BREAKPOINTS_DEVICES.laptop} {
    align-items: flex-start;
    .label {
      font-size: 18px;
    }
    .name {
      font-size: 48px;
    }
    .description {
      text-align: left;
      max-width: 90%;
      font-size: 14px;
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
  font-size: 13px;
  letter-spacing: 3px;
  &:hover {
    opacity: 0.9;
    transform: scale(1.01);
  }
`;
