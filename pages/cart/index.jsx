import React from "react";
import { useSelector } from "react-redux";
import MyCart from "../../components/global/cart";
import { getCart } from "../../features/cart";
import useDispatchEffect from "../../hooks/useDispatchEffect";

export default function ShopCar() {
  useDispatchEffect(getCart);
  const { items } = useSelector((state) => state.cart);
  return (
    <section className="h-screen">
      <MyCart products={items} />
    </section>
  );
}
