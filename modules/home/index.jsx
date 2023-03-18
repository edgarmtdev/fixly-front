import React from "react";
import { useSelector } from "react-redux";
import Banner from "./components/banners";
import Categories from "./components/categories";
import MoreProducts from "./components/more-products";
import Slider from "./components/slider";

const HomeModule = () => {
  const { products } = useSelector((state) => state.product);
  return (
    <React.Fragment>
      {/* <Banner /> */}
      <Slider />
      <Categories />
      <MoreProducts products={products} />
    </React.Fragment>
  );
};

export default HomeModule;
