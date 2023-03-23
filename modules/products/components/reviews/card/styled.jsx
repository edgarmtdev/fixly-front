import styled from "styled-components";

export const TitleReview = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;

  p {
    font-size: 18px;
    font-weight: 600;
  }

  span {
    font-size: 12px;
    color: #959cb2;
  }
`;

export const Content = styled.div`
  margin-top: 1rem;
`;

export const Reactions = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;
  color: #959cb2;
  font-weight: 600;

  span {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
