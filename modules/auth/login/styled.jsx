import styled from "styled-components";
import BREAKPOINTS_DEVICES from "../../../theme/global/breakpoints";

export const Container = styled.div`
  margin-top: 3rem;
  width: 90%;
  background-color: #f6f6f6;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  @media ${BREAKPOINTS_DEVICES.tablet} {
    width: 80%;
    min-height: 550px;
  }

  @media ${BREAKPOINTS_DEVICES.laptop} {
    max-width: 1024px;
    height: 500px;
    margin-left: 5rem;
    margin-right: 5rem;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ErrorMessage = styled.p`
  padding: 3px;
  margin: 0rem 1rem 1rem 1rem;
  text-align: center;
  background-color: #fd4f588a;
  color: #fff;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 14px;
`;

export const Message = styled.p`
  padding: 3px;
  margin: 0rem 1rem 1rem 1rem;
  text-align: center;
  background-color: #4fbb8ac0;
  color: #fff;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 14px;
`;
