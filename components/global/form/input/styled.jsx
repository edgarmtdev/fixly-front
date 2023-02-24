import styled from "styled-components";

export const InputContainer = styled.div`
  div {
    border-bottom-width: 1px;
    border-color: #959cb2;
    padding: 3px;
    margin: 1rem 1rem 0 1rem;
    input {
      font-size: 14px;
      appearance: none;
      background-color: transparent;
      border: none;
      width: 100%;
      color: #717b98;
      padding: 2px 5px;
      line-height: 1.25;
      letter-spacing: 0.2mm;
      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
    }
  }
  span {
    margin: 0 1.4rem;
    font-size: 11px;
    color: red;
  }
`;
