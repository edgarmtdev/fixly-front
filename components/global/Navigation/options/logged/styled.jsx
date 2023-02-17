import styled from "styled-components";

export const OptionsContainer = styled.section`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-left: auto;
  gap: 2.5rem;
  svg {
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
      opacity: 0.5;
    }
  }
  h6 {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      opacity: 0.9;
    }
  }
`;
