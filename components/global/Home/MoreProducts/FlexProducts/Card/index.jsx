import Price from "../../../Utilities/Price";
import { Card, Name } from "./styled";

function ProductCard({ product }) {
  return (
    <Card>
      <Price price={product.price} />
      <img src={`${product.imgURL[0]}`} alt={product.name} />
      <Name>{product.name}</Name>
    </Card>
  );
}

export default ProductCard;
