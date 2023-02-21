import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h6 {
    color: #fff;
    font-weight: 600;
    font-size: 28px;
  }

  input {
    padding: 8px;
    width: 85%;
    border-radius: 2px;
    outline: none;
  }

  button {
    width: 12rem;
    background-color: #cd8a20;
    text-align: center;
    border-radius: 2px;
    font-weight: 600;
    padding: 8px;
    color: #fff;
    margin-top: 1rem;
    &:hover {
      background-color: #ffc364;
    }
  }
`;
