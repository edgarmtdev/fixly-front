import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { addToCart } from "../../../../../features/cart";
import {
  ActionsCont,
  GetNowButton,
  AddCartButton,
  Title,
  ShoppingCart,
} from "./styled";

export default function ActionsButtons({ product: { _id } }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const addToCar = () => {
    dispatch(addToCart({ idProduct: _id }));
    router.replace("/shopcar");
  };

  return (
    <ActionsCont>
      <GetNowButton onClick={() => router.replace("/payment")}>
        <Title>GET NOW</Title>
      </GetNowButton>
      <AddCartButton onClick={() => addToCar()}>
        <ShoppingCart />
      </AddCartButton>
    </ActionsCont>
  );
}
