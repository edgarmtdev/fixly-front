import styled from "styled-components";

export const Form = styled.form`
  background-color: white;
  width: 80%;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  padding: 2.5rem;
  gap: 5rem;
  border-radius: 6px;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: rgb(62 80 103);
  margin-bottom: 2.5rem;
`;

export const PayButton = styled.button`
  background-color: rgb(79 187 139);
  font-weight: 600;
  color: white;
  padding: 8px 0;
  width: 33.333%;
  margin: 10rem 0 0 auto;
  border-radius: 6px;
  &:hover {
    background-color: rgb(117 222 175);
    transform: scale(1.05);
    transition: 500ms ease-in-out;
  }
`;
