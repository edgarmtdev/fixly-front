import styled, { keyframes } from "styled-components";

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const ButtonComponent = styled.button`
  background-color: #4fbb8b;
  color: white;
  padding: 8px;
  border-radius: 2px;
  font-weight: 500;
  margin: 3.5rem 1rem 0.5rem 1rem;
  transition: 600ms;
  display: grid;
  place-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  svg {
    animation: ${spin} 1s linear infinite;
  }
  &:hover {
    background-color: #69c99e;
    transition: 600ms;
  }
`;
