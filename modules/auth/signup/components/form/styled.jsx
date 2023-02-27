import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1.5rem;

  h1 {
    font-size: 32px;
    font-weight: 600;
    margin: 2rem 1rem;
    color: #3e5067;
  }

  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    .grid-item {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
