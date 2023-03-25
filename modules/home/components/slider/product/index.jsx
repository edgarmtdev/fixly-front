import Link from "next/link";
import React from "react";
import Price from "../../utilities/price";
import { Card, Name } from "./styled";

function Product({ data }) {
  return (
    <Link href={`${data.route}`}>
      <div>
        <Card>
          <Price price={data?.price} />
          <img
            src={`${data.imgURL[0]}`}
            alt={data.name}
            width={288}
            height={288}
          />
        </Card>
        <Name>{data?.name}</Name>
      </div>
    </Link>
  );
}

export default Product;
