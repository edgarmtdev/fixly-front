import CardProduct from "./components/details";
import ScrollToTop from "/hooks/components/ScrollToTop";
import { ProductDetails } from "./styled";
import PaymentsMethods from "./components/methods";
import Reviews from "./components/reviews";

const DeatilsModule = ({ product, loading }) => {
  return (
    <ProductDetails>
      <ScrollToTop />
      <CardProduct product={product} loading={loading} />
      <PaymentsMethods />
      <Reviews reviews={product?.reviews} loading={loading} />
    </ProductDetails>
  );
};

export default DeatilsModule;
