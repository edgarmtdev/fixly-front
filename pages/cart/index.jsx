import React from "react";
import { useSelector } from "react-redux";
import MyCart from "../../modules/cart";
import { HeadComponent } from "../../components/utils/head";

export default function ShopCar() {
  const { items } = useSelector((state) => state.cart);
  return (
    <React.Fragment>
      <HeadComponent title={"Cart | Fixly"} />
      <MyCart products={items} />
    </React.Fragment>
  );
}
