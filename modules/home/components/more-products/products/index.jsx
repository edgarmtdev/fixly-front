import ProductCard from "components/global/products/card";
import { FlexCont } from "./styled";
import ProductSkeleton from "components/utils/loaders/skeleton/Product";

function FlexProducts({ products, loading }) {
  return (
    <FlexCont>
      {loading ? (
        <>
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </>
      ) : (
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      )}
    </FlexCont>
  );
}

export default FlexProducts;
