import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 380px;
  margin: 3rem 1.25rem;
  background-color: #f6f6f6;
  padding: 0.5rem;
  border-radius: 2px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media (min-width: 800px) {
    height: 650px;
    margin-left: 5rem;
    margin-right: 5rem;
    display: grid;
  }

  @media (min-width: 800px) {
    width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
`;
