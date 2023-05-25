import Link from "next/link";
import { Card, Name } from "./styled";

export default function CardProduct({ product }) {
  return (
    <Link href={`/admin/details/${product._id}`}>
      <Card>
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
}
