import React from "react";
import { useSelector } from "react-redux";
import MyCart from "../../src/components/Cart";
import { getCart } from "../../features/cart";
import useDispatchEffect from "../../hooks/useDispatchEffect";

export default function ShopCar() {
  const { items } = useSelector((state) => state.cart);
  useDispatchEffect(getCart);
  return (
    <section className="h-screen">
      <MyCart products={items} />
    </section>
  );
}
