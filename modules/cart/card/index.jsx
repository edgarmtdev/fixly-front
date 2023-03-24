import React from "react";
import { Product } from "./styled";

export default function Card({ data }) {
  return (
    <Product>
      <div className="flex gap-4 items-center">
        {" "}
        <img
          src={data.product.imgURL[0]}
          alt="product"
          width={80}
          height={80}
        />
        <p className=" text-[#3e5067] font-semibold text-xl">
          {data.product.name}
        </p>
      </div>
      <div>
        <p>{data.amount}</p>
      </div>
      <p className="text-[#3e5067] text-xl">
        ${data.product.price.$numberDecimal}
      </p>
    </Product>
  );
}
