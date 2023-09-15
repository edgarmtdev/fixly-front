import { useSelector } from "react-redux";
import Banner from "./components/banners";
import Categories from "./components/categories";
import MoreProducts from "./components/more-products";
import Slider from "./components/slider";

const HomeModule = () => {
  const { products, loading } = useSelector((state) => state.product);
  return (
    <>
      <Banner />
      <Slider />
      <Categories />
      <MoreProducts products={products} loading={loading} />
    </>
  );
};

export default HomeModule;
