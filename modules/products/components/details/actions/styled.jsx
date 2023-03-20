import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const ActionsCont = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 20% 1rem 2.5rem 1rem;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const GetNowButton = styled(Button)`
  background-color: #4fbb8b;
  p {
    color: white;
    font-weight: 600;
    font-size: 18px;
  }
`;

export const AddCartButton = styled(Button)`
  background-color: #cee4da;
  p {
    color: #4fbb8b;
    font-weight: 600;
    font-size: 18px;
  }
`;

export const ShoppingCart = styled(AiOutlineShoppingCart)``;
