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

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
