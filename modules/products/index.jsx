import CardProduct from "./components/details";
import ScrollToTop from "../../hooks/components/ScrollToTop";
import useGetItem from "../../hooks/useGetItem";
import { Container } from "./styled";

function DeatilsMod({ id }) {
  const { item: product } = useGetItem(id);
  return (
    <Container>
      <ScrollToTop />
      <CardProduct product={product} />
    </Container>
  );
}

export default DeatilsMod;
