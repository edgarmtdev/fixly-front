import { useSelector } from "react-redux";
import SpinnerLoader from "../../components/utils/loaders/spinner";
import ProductsComponent from "./products";
import { CartContainer } from "./styles";

export default function MyCart({ products }) {
  const { total, loading } = useSelector((state) => state.cart);

  return (
    <CartContainer>
      {loading ? (
        <SpinnerLoader />
      ) : (
        <ProductsComponent total={total} products={products} />
      )}
    </CartContainer>
  );
}
