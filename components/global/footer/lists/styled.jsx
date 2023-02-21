import styled from "styled-components";

export const Title = styled.h6`
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 2.5rem;
`;

export const List = styled.ul`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  li {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
