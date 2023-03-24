import React from "react";
import { Product } from "./styled";

export default function Card({ data }) {
  return (
    <Product>
      <div className="flex justify-center items-center">
        {" "}
        <img
          src={data.product.imgURL[0]}
          alt="product"
          width={80}
          height={80}
        />
        <p>{data.product.name}</p>
      </div>
      <div>
        <p>{data.amount}</p>
      </div>
    </Product>
  );
}
