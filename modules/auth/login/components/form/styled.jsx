import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;

  h1 {
    font-size: 32px;
    font-weight: 600;
    margin: 2rem 1rem;
    color: #3e5067;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      .input {
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
    }
  }

  button {
    background-color: #4fbb8b;
    color: white;
    padding: 8px;
    border-radius: 2px;
    font-weight: 500;
    margin: 3.5rem 1rem 0.5rem 1rem;
    transition: 600ms;
    display: grid;
    place-items: center;
    &:hover {
      background-color: #69c99e;
      transition: 600ms;
    }
  }

  .label {
    margin: 1rem 0;
    text-align: center;
    span {
      color: #4fbb8b;
      font-weight: 600;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
