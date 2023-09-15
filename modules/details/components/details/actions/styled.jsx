import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import BREAKPOINTS_DEVICES from "theme/global/breakpoints";

export const ActionsCont = styled.section`
  display: flex;
  flex-direction: grid;
  gap: 1rem;
  @media ${BREAKPOINTS_DEVICES.tablet} {
    margin-top: auto;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background-color: #4fbb8b;
  color: white;
  font-size: 12px;
  &:hover {
    background-color: #4fbb8ad6;
    scale: 1.01;
    transition: 200ms;
  }
  cursor: pointer;
  padding: 10px;
  font-weight: 600;
  @media ${BREAKPOINTS_DEVICES.tablet} {
    padding: 12px;
    span {
      font-size: 16px;
    }
  }
`;

export const GetNowButton = styled(Button)`
  width: 100%;
  @media ${BREAKPOINTS_DEVICES.tablet} {
    font-size: 16px;
  }
`;

export const AddCartButton = styled(Button)`
  width: 30%;
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
