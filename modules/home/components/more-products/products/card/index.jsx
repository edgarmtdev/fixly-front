import { forwardRef } from "react";
import Price from "../../../utilities/price";
import { Card, Name } from "./styled";
import Link from "next/link";

// eslint-disable-next-line react/display-name, no-unused-vars
const ProductCard = forwardRef(({ product }, ref) => {
  return (
    <Link href={`/products/${product._id}`}>
      <Card>
        <Price price={product.price.$numberDecimal} />
        <img
          src={`${product.imgURL[0]}`}
          alt={product.name}
          width={288}
          height={288}
        />
        <Name>{product.name}</Name>
      </Card>
    </Link>
  );
});

export default ProductCard;
