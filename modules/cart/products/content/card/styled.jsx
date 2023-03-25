import styled from "styled-components";

export const Product = styled.section`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;

export const ProductInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  p {
    color: #3e5067;
    font-weight: 600;
    font-size: 18px;
  }
`;

export const PriceProduct = styled.div`
  p {
    color: #3e5067;
    font-size: 20px;
  }
`;
