import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 180px;
  min-height: 250px;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: 100ms;
  &:hover {
    transform: scale(0.99);
    transition: 100ms;
  }
  img {
    width: 70%;
  }
`;

export const Name = styled.p`
  font-size: 14px;
  margin-top: 2rem;
  text-align: center;
`;
