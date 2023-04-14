import styled from "styled-components";

export const InputContainer = styled.div`
  div {
    border-bottom-width: 1px;
    border-color: ${({ error }) => (error ? "#FD4F59" : "#959cb2")};
    padding: 3px;
    margin: 0 1rem;
    input {
      font-size: 13px;
      appearance: none;
      background-color: transparent;
      border: none;
      width: 100%;
      color: #717b98;
      padding: 2px 5px;
      line-height: 1.25;
      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
      &::placeholder {
        color: ${({ error }) => (error ? "#FD4F59" : "#959cb2")};
      }
    }
  }
  span {
    margin: 0 1.4rem;
    font-size: 11px;
    color: #fd4f59;
  }
`;

export const Label = styled.label`
  font-size: 12px;
  padding: 2px 6px;
  margin: 0 1rem;
  color: #3e5067;
`;
