import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../../features/cart";
import {
  ActionsCont,
  GetNowButton,
  AddCartButton,
  Title,
  ShoppingCart,
} from "./styled";

export default function ActionsButtons({ product: { _id } }) {
  const dispatch = useDispatch();
  const router = useNavigate();

  const addToCar = () => {
    dispatch(addToCart({ idProduct: _id }));
    router("/shopcar");
  };

  return (
    <ActionsCont>
      <GetNowButton onClick={() => router("/payment")}>
        <Title>GET NOW</Title>
      </GetNowButton>
      <AddCartButton onClick={() => addToCar()}>
        <ShoppingCart />
      </AddCartButton>
    </ActionsCont>
  );
}
