import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #f6f6f6;
  pad: 0.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media (min-width: 800px) {
    height: 500px;
    margin-left: 5rem;
    margin-right: 5rem;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 800px) {
    width: 900px;
    margin-left: auto;
    margin-right: auto;
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
