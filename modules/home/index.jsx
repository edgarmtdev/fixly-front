import React from "react";
import { useSelector } from "react-redux";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import MoreProducts from "./components/MoreProducts";
import Slider from "./components/SliderOfferts";

const HomeModule = () => {
  const { products } = useSelector((state) => state.product);
  return (
    <>
      <Slider />
      <Categories />
      <MoreProducts products={products} />
    </>
  );
};

export default HomeModule;
