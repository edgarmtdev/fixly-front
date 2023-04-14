import { PriceProduct, Product, ProductInfo } from "./styled";

export default function Card({ data }) {
  return (
    <Product>
      <ProductInfo>
        <img
          src={data.product.imgURL[0]}
          alt="product"
          width={80}
          height={80}
        />
        <p>{data.product.name}</p>
      </ProductInfo>
      <div>
        <p>{data.amount}</p>
      </div>
      <PriceProduct>
        {" "}
        <p>${data.product.price.$numberDecimal}</p>
      </PriceProduct>
    </Product>
  );
}
