import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { addToCart } from "../../../../../features/cart";
import { ActionsCont, GetNowButton, AddCartButton } from "./styled";

export default function ActionsButtons({ product }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const addToCar = (idProduct) => {
    dispatch(addToCart({ idProduct }));
    // router.replace("/cart");
  };

  return (
    <ActionsCont>
      <GetNowButton onClick={() => router.replace("/payment")}>
        <p>Buy</p>
      </GetNowButton>
      <AddCartButton onClick={() => addToCar(product?._id)}>
        <p>Add to Cart</p>
      </AddCartButton>
    </ActionsCont>
  );
}
