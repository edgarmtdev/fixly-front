import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 18rem;
  height: 18rem;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
    transition: 1s;
  }
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 600;
  color: rgb(62 80 103);
  margin-top: 8px;
`;
