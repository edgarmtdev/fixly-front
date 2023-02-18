import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 1536px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin: 3rem auto;
  background-color: white;
  width: 80%;
  height: 600px;
  border-radius: 4px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
  padding: 0 5rem;

  div {
    img {
      width: 400px;
    }
  }
`;

export const Card = styled.div`
  height: 100%;
  padding-top: 2rem;

  .line {
    width: 100%;
    height: 1px;
    background-color: rgb(230 236 239);
    margin: 2.5rem;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  text-align: justify;
`;

export const Price = styled.div`
  display: grid;
  place-items: center;
  background-color: rgb(255 195 100);
  width: 10rem;
  height: 3rem;
  border-radius: 0.25rem;
  p {
    color: #fff;
    font-weight: 600;
    font-size: 18px;
  }
`;

export const Details = styled.div`
  color: rgb(62 80 103);
  padding: 3rem 0;

  span {
    font-weight: 600;
  }
`;
