import styled from "styled-components";
import BREAKPOINTS_DEVICES from "../../../../theme/global/breakpoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  p {
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    margin-bottom: 1rem;
  }
  input {
    padding: 8px;
    width: 100%;
    border-radius: 2px;
    outline: none;
    font-size: 12px;
  }
  button {
    width: 6rem;
    background-color: #cd8a20;
    text-align: center;
    border-radius: 2px;
    font-weight: 600;
    padding: 8px;
    color: #fff;
    margin-left: auto;
    font-size: 12px;
    &:hover {
      opacity: 0.9;
      transform: scale(1.01);
    }
  }
  @media ${BREAKPOINTS_DEVICES.tablet} {
    width: 60%;
    gap: 2rem;
    p {
      color: #fff;
      font-weight: 600;
      font-size: 28px;
      margin-bottom: 0;
      text-align: left;
    }
    input {
      width: 85%;
      font-size: 14px;
    }
    button {
      margin-right: 15%;
      font-size: 14px;
    }
  }
`;
