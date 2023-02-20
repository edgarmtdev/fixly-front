import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 380px;
  margin: 3rem 1.25rem;
  background-color: #f6f6f6;
  pad: 0.5rem;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  @media (min-width: 800px) {
    height: 500px;
    margin-left: 5rem;
    margin-right: 5rem;
    display: flex;
    align-items: center;
  }

  @media (min-width: 800px) {
    width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
`;
