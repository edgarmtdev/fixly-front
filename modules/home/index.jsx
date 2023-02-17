import React from "react";
import { useSelector } from "react-redux";
import Banner from "../../components/global/Home/Banner";
import Categories from "../../components/global/Home/Categories";
import MoreProducts from "../../components/global/Home/MoreProducts";
import Slider from "../../components/global/Home/SliderOfferts";

export default function HomeModule() {
  //   const { products } = useSelector((state) => state.product);

  return (
    <>
      <Banner />
      <Slider />
      <Categories />
      {/* <MoreProducts products={products} /> */}
    </>
  );
}
