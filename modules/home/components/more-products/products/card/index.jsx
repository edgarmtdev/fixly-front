import { forwardRef } from "react";
import Price from "../../../Utilities/Price";
import { Card, Name } from "./styled";
import Link from "next/link";

const ProductCard = forwardRef(({ product }, ref) => {
  return (
    <Link href={`/products/${product._id}`}>
      <Card>
        <Price price={product.price} />
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
