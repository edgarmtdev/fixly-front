import styled from "styled-components";

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 800px) {
    align-items: flex-start;
  }
`;

export const Feature = styled.h3`
  font-size: 1.25rem;
  color: rgb(62 80 103);
`;

export const Title = styled.h2`
  font-size: 3rem;
  margin-top: 2rem;
  font-weight: 600;
  text-align: center;
  @media (min-width: 800px) {
    align-items: flex-start;
  }
`;

export const Description = styled.p`
  text-align: center;
  color: rgb(115 138 170);

  @media (min-width: 800px) {
    text-align: left;
  }
  @media (min-width: 1280px) {
    width: 80%;
  }
`;

export const Button = styled.div`
  background-color: rgb(205 138 32);
  color: rgb(255 255 255);
  width: 12rem;
  margin-top: 2.5rem;
  text-align: center;
  padding: 8px;
  border-radius: 2px;
  font-weight: 600;
  font-size: 13px;
  &:hover {
    background-color: rgb(255 195 100);
  }
`;
