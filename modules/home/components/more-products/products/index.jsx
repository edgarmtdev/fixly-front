import ProductCard from "./card";
import { FlexCont } from "./styled";

function FlexProducts({ products }) {
  return (
    <FlexCont>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </FlexCont>
  );
}

export default FlexProducts;
