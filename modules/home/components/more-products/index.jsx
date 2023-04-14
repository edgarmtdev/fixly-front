import FlexProducts from "./products";
import { MoreProductsCont, Title } from "./styled";

export default function MoreProducts({ products }) {
  return (
    <MoreProductsCont>
      <Title>More products</Title>
      <FlexProducts products={products} />
    </MoreProductsCont>
  );
}
