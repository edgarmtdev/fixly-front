import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 18rem;
  height: 24rem;
  background-color: white;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 500ms;

  &:hover {
    opacity: 0.9;
    transform: scale(1.01);
    transition: 500ms;
  }
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 600;
  color: #3e5067;
  margin-top: 0.5rem;
`;
