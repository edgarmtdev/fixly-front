import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  background-color: white;
  min-height: 600px;
  border-radius: 10px;
  box-shadow: 0px 5px 20px #0000003f;
  padding: 2rem;

  div {
    img {
      width: 400px;
    }
  }
`;

export const Card = styled.div`
  height: 100%;
  padding: 2rem;
  .line {
    width: 100%;
    height: 1px;
    background-color: #e6ecef;
    margin: 1rem 0;
  }
`;

export const Title = styled.div`
  padding: 1rem;
  p {
    display: flex;
    gap: 0.5rem;
    color: #738aaa;
    align-items: center;
  }
  p.name {
    color: #3e5067;
    font-weight: 600;
    font-size: 24px;
  }
`;

export const Price = styled.p`
  width: auto;
  margin: 2.5rem 1rem;
  font-weight: 600;
  font-size: 22px;
`;

export const Details = styled.div`
  color: #3e5067;
  margin: 2.5rem 1rem;
  font-size: 14px;
  span {
    font-weight: 600;
  }
`;
