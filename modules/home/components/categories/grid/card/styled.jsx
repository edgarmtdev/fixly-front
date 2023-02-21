import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 128px;
  height: 105px;
  background-color: #fff;
  color: #3e5067;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #3e5067;
    color: #cd8a20;
  }
`;
