import FlexProducts from "./products";
import { MoreProductsCont, Title } from "./styled";

export default function MoreProducts({ products, loading }) {
  return (
    <MoreProductsCont>
      <Title>More products</Title>
      <FlexProducts products={products} loading={loading} />
    </MoreProductsCont>
  );
}
