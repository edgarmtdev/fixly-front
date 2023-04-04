import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import BREAKPOINTS_DEVICES from "theme/global/breakpoints";

export const ActionsCont = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
  @media ${BREAKPOINTS_DEVICES.tablet} {
    margin: 20% 1rem 2.5rem 1rem;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px;
  @media ${BREAKPOINTS_DEVICES.tablet} {
    padding: 12px;
    span {
      font-size: 16px;
    }
  }
`;

export const GetNowButton = styled(Button)`
  background-color: #4fbb8b;
  span {
    color: white;
    font-weight: 600;
    font-size: 12px;
  }
  &:hover {
    background-color: #4fbb8ae1;
    scale: 1.01;
    transition: 200ms;
  }
  @media ${BREAKPOINTS_DEVICES.tablet} {
    span {
      font-size: 16px;
    }
  }
`;

export const AddCartButton = styled(Button)`
  border: 2px solid #4fbb8b;
  color: #4fbb8b;
  &:hover {
    background-color: #f3fcf8df;
    scale: 1.01;
    transition: 200ms;
  }
  span {
    font-weight: 600;
    font-size: 12px;
  }
  @media ${BREAKPOINTS_DEVICES.tablet} {
    span {
      font-size: 16px;
    }
  }
`;

export const ShoppingCart = styled(AiOutlineShoppingCart)``;
