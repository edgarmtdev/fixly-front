import Link from "next/link";
import ProductCard from "./Card";
import { FlexCont } from "./styled";

function FlexProducts({ products }) {
  return (
    <FlexCont>
      {products.map((product) => (
        <Link key={product._id} href={`/product/details/${product._id}`}>
          <ProductCard product={product} />
        </Link>
      ))}
    </FlexCont>
  );
}

export default FlexProducts;
