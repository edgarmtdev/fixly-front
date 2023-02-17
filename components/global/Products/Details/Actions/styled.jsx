import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const ActionsCont = styled.section`
  display: flex;
  gap: 1.25rem;
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
  background-color: rgb(79 187 139);
  width: 75%;
`;

export const AddCartButton = styled(Button)`
  font-weight: 600;
  font-size: 18px;
  background-color: rgb(148 227 192);
  width: 25%;
`;

export const Title = styled.p`
  color: white;
  font-weight: 600;
  font-size: 18px;
`;

export const ShoppingCart = styled(AiOutlineShoppingCart)``;
