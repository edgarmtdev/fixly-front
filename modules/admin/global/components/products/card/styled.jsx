import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 224px;
  height: 320px;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: 100ms;
  &:hover {
    border: 1px solid white;
  }
  img {
    width: 80%;
  }
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 600;
  color: #3e5067;
  margin-top: 2rem;
`;
