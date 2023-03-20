import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { addToCart } from "../../../../../features/cart";
import {
  ActionsCont,
  GetNowButton,
  AddCartButton,
  ShoppingCart,
} from "./styled";

export default function ActionsButtons({ product: { _id } }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const addToCar = () => {
    dispatch(addToCart({ idProduct: _id }));
    // router.replace("/cart");
  };

  return (
    <ActionsCont>
      <GetNowButton onClick={() => router.replace("/payment")}>
        <p>Buy</p>
      </GetNowButton>
      <AddCartButton onClick={() => addToCar()}>
        <p>Add to Cart</p>
      </AddCartButton>
    </ActionsCont>
  );
}
