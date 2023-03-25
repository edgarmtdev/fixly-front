import React from "react";
import { useSelector } from "react-redux";
import MyCart from "../../modules/cart";
import { getCart } from "../../features/cart";
import useDispatchEffect from "../../hooks/useDispatchEffect";
import { HeadComponent } from "../../components/utils/head";

export default function ShopCar() {
  useDispatchEffect(getCart);
  const { items } = useSelector((state) => state.cart);
  return (
    <React.Fragment>
      <HeadComponent title={"Cart | Fixly"} />
      <MyCart products={items} />
    </React.Fragment>
  );
}
